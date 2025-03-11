
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component allows us to inject tracking scripts into the application
// and track page views across different routes
const TrackingScripts: React.FC = () => {
  const location = useLocation();
  
  // Track page views - this effect runs whenever the location changes
  useEffect(() => {
    // Facebook pixel page view tracking
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
    
    // Google Analytics page view tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', window.GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
    
    console.log('Page view tracked:', location.pathname);
  }, [location]);
  
  return null; // This component doesn't render anything
};

export default TrackingScripts;
