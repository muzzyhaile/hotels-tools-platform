import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { X, Cookie, Shield, BarChart3 } from 'lucide-react';

// Types for consent preferences
interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
}

// Cookie consent management utilities
export const CONSENT_COOKIE_NAME = 'hotels-tools-consent';
export const CONSENT_VERSION = '1.0';

export const getConsentPreferences = (): ConsentPreferences | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(CONSENT_COOKIE_NAME);
    if (!stored) return null;
    
    const parsed = JSON.parse(stored);
    if (parsed.version !== CONSENT_VERSION) return null;
    
    return parsed.preferences;
  } catch {
    return null;
  }
};

export const setConsentPreferences = (preferences: ConsentPreferences) => {
  if (typeof window === 'undefined') return;
  
  const data = {
    version: CONSENT_VERSION,
    preferences,
  };
  
  localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(data));
  
  // Initialize or update Google Analytics based on consent
  if (preferences.analytics) {
    initializeGoogleAnalytics();
  } else {
    disableGoogleAnalytics();
  }
};

// Google Analytics integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const initializeGoogleAnalytics = () => {
  if (typeof window === 'undefined') return;
  
  // Don't load if already loaded
  if (document.querySelector('script[src*="googletagmanager.com/gtag"]')) {
    return;
  }
  
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-DGY2ZN63NL';
  document.head.appendChild(script);
  
  // Configure Google Analytics
  script.onload = () => {
    window.gtag('js', new Date());
    window.gtag('config', 'G-DGY2ZN63NL', {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  };
};

const disableGoogleAnalytics = () => {
  if (typeof window === 'undefined') return;
  
  // Disable Google Analytics
  window[`ga-disable-G-DGY2ZN63NL`] = true;
  
  // Clear Google Analytics cookies
  const gaCookies = document.cookie.split(';').filter(cookie => 
    cookie.trim().startsWith('_ga') || cookie.trim().startsWith('_gid')
  );
  
  gaCookies.forEach(cookie => {
    const cookieName = cookie.split('=')[0].trim();
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
};

interface CookieBannerProps {
  onConsentChange?: (preferences: ConsentPreferences) => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onConsentChange }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    timestamp: Date.now(),
  });

  useEffect(() => {
    // Check if user has already made a choice
    const existingPreferences = getConsentPreferences();
    
    if (existingPreferences) {
      setPreferences(existingPreferences);
      setShowBanner(false);
      
      // Initialize analytics if consented
      if (existingPreferences.analytics) {
        initializeGoogleAnalytics();
      }
    } else {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences: ConsentPreferences = {
      necessary: true,
      analytics: true,
      timestamp: Date.now(),
    };
    
    setPreferences(newPreferences);
    setConsentPreferences(newPreferences);
    setShowBanner(false);
    onConsentChange?.(newPreferences);
  };

  const handleAcceptNecessary = () => {
    const newPreferences: ConsentPreferences = {
      necessary: true,
      analytics: false,
      timestamp: Date.now(),
    };
    
    setPreferences(newPreferences);
    setConsentPreferences(newPreferences);
    setShowBanner(false);
    onConsentChange?.(newPreferences);
  };

  const handleSaveSettings = () => {
    const newPreferences = { ...preferences, timestamp: Date.now() };
    setConsentPreferences(newPreferences);
    setShowBanner(false);
    setShowSettings(false);
    onConsentChange?.(newPreferences);
  };

  const updatePreference = (type: keyof ConsentPreferences, value: boolean) => {
    if (type === 'necessary') return; // Necessary cookies cannot be disabled
    setPreferences(prev => ({ ...prev, [type]: value }));
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <Cookie className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold mb-2">We value your privacy</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. 
                  By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn more 
                  in our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90 w-full sm:w-auto text-sm">
                    Accept All
                  </Button>
                  <Button onClick={handleAcceptNecessary} variant="outline" className="w-full sm:w-auto text-sm">
                    Accept Necessary Only
                  </Button>
                  <Dialog open={showSettings} onOpenChange={setShowSettings}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                        Customize Settings
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto mx-3 sm:mx-0">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-base sm:text-lg">
                          <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                          Cookie Preferences
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 sm:space-y-6">
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-4">
                            <div className="flex-1">
                              <h4 className="font-medium flex items-center gap-2 text-sm sm:text-base">
                                <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                                Necessary Cookies
                              </h4>
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                These cookies are essential for the website to function properly. They cannot be disabled.
                              </p>
                            </div>
                            <Switch checked={true} disabled />
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 border rounded-lg gap-3 sm:gap-4">
                            <div className="flex-1">
                              <h4 className="font-medium flex items-center gap-2 text-sm sm:text-base">
                                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4" />
                                Analytics Cookies
                              </h4>
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                              </p>
                            </div>
                            <Switch 
                              checked={preferences.analytics}
                              onCheckedChange={(checked) => updatePreference('analytics', checked)}
                            />
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3">
                          <Button variant="outline" onClick={() => setShowSettings(false)} className="w-full sm:w-auto text-sm">
                            Cancel
                          </Button>
                          <Button onClick={handleSaveSettings} className="w-full sm:w-auto text-sm">
                            Save Preferences
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleAcceptNecessary}
                className="flex-shrink-0 self-start sm:self-center"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CookieBanner; 