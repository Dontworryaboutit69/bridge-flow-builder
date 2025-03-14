
// Global type definitions for tracking scripts

interface Window {
  // Facebook Pixel
  fbq?: (
    event: string,
    eventName: string,
    params?: Record<string, any>
  ) => void;
  _fbq?: any;
  
  // Google Analytics / Google Tag Manager
  gtag?: (
    command: string,
    action: string,
    params?: Record<string, any>
  ) => void;
  dataLayer?: any[];
  GA_MEASUREMENT_ID?: string;
}
