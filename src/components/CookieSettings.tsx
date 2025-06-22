import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Settings, Shield, BarChart3, Clock } from 'lucide-react';
import { useCookieConsent } from '@/contexts/CookieContext';

interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
}

const CookieSettings: React.FC = () => {
  const { preferences, hasConsent, updatePreferences, revokeConsent } = useCookieConsent();
  const [isOpen, setIsOpen] = useState(false);
  const [tempPreferences, setTempPreferences] = useState<ConsentPreferences | null>(null);

  const handleOpenSettings = () => {
    setTempPreferences(preferences || {
      necessary: true,
      analytics: false,
      timestamp: Date.now(),
    });
    setIsOpen(true);
  };

  const handleSaveSettings = () => {
    if (tempPreferences) {
      updatePreferences({ ...tempPreferences, timestamp: Date.now() });
    }
    setIsOpen(false);
  };

  const handleRevokeConsent = () => {
    revokeConsent();
    setIsOpen(false);
  };

  const updateTempPreference = (type: keyof ConsentPreferences, value: boolean) => {
    if (type === 'necessary') return; // Necessary cookies cannot be disabled
    setTempPreferences(prev => prev ? { ...prev, [type]: value } : null);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleOpenSettings}
          className="text-muted-foreground hover:text-foreground"
        >
          <Settings className="h-4 w-4 mr-2" />
          Cookie Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Cookie Settings
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Current Status */}
          {hasConsent && preferences && (
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Current Status</span>
                <Badge variant={preferences.analytics ? "default" : "secondary"}>
                  {preferences.analytics ? "Analytics Enabled" : "Analytics Disabled"}
                </Badge>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                Last updated: {formatDate(preferences.timestamp)}
              </div>
            </div>
          )}

          {/* Cookie Categories */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  Necessary Cookies
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  These cookies are essential for the website to function properly. They enable core functionality 
                  such as page navigation and access to secure areas. The website cannot function properly without these cookies.
                </p>
                <div className="mt-2">
                  <span className="text-xs text-muted-foreground">Always Active</span>
                </div>
              </div>
              <Switch checked={true} disabled />
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                  Analytics Cookies
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  These cookies help us understand how visitors interact with our website by collecting and 
                  reporting information anonymously. We use Google Analytics to improve our services.
                </p>
                <div className="mt-2">
                  <span className="text-xs text-muted-foreground">Provider: Google Analytics</span>
                </div>
              </div>
              <Switch 
                checked={tempPreferences?.analytics || false}
                onCheckedChange={(checked) => updateTempPreference('analytics', checked)}
              />
            </div>
          </div>

          {/* Cookie Information */}
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium mb-2">What are cookies?</h4>
            <p className="text-sm text-muted-foreground">
              Cookies are small text files that are stored on your device when you visit a website. 
              They help websites remember your preferences and provide a better user experience.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button onClick={handleSaveSettings} className="flex-1">
              Save Preferences
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
              Cancel
            </Button>
            {hasConsent && (
              <Button variant="destructive" onClick={handleRevokeConsent} className="flex-1">
                Revoke All Consent
              </Button>
            )}
          </div>
          
          <div className="text-xs text-muted-foreground text-center pt-2">
            For more information, please read our{' '}
            <a href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettings; 