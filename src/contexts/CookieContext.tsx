import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getConsentPreferences, setConsentPreferences } from '@/components/CookieBanner';

interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
}

interface CookieContextType {
  preferences: ConsentPreferences | null;
  hasConsent: boolean;
  updatePreferences: (preferences: ConsentPreferences) => void;
  revokeConsent: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

interface CookieProviderProps {
  children: ReactNode;
}

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [preferences, setPreferences] = useState<ConsentPreferences | null>(null);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Load consent preferences on mount
    const storedPreferences = getConsentPreferences();
    if (storedPreferences) {
      setPreferences(storedPreferences);
      setHasConsent(true);
    }
  }, []);

  const updatePreferences = (newPreferences: ConsentPreferences) => {
    setPreferences(newPreferences);
    setHasConsent(true);
    setConsentPreferences(newPreferences);
  };

  const revokeConsent = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('hotels-tools-consent');
    }
    setPreferences(null);
    setHasConsent(false);
  };

  const value: CookieContextType = {
    preferences,
    hasConsent,
    updatePreferences,
    revokeConsent,
  };

  return (
    <CookieContext.Provider value={value}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
};

export default CookieContext; 