
import { useEffect, useState } from 'react';

interface UseFormSubmissionDetectionProps {
  iframeRef: React.RefObject<HTMLIFrameElement>;
  formId?: string;
  onDetect: () => void;
}

/**
 * A hook that uses multiple strategies to detect form submission in an iframe
 */
export function useFormSubmissionDetection({
  iframeRef,
  formId,
  onDetect,
}: UseFormSubmissionDetectionProps) {
  const [lastDetectionTime, setLastDetectionTime] = useState(Date.now());
  
  // Prevent duplicate triggers by enforcing a cooldown period
  const triggerSubmissionDetected = () => {
    if (Date.now() - lastDetectionTime > 3000) {
      console.log("Form submission detected, triggering callback");
      setLastDetectionTime(Date.now());
      onDetect();
    } else {
      console.log("Ignoring duplicate submission detection within cooldown period");
    }
  };

  // Listen for postMessage events from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log("Received message from iframe:", event.data);
      
      // Handle form submission events from the CRM iframe
      if (event.data && 
          (event.data.type === 'formSubmit' || 
           event.data.type === 'hsFormSubmit' || 
           event.data.type === 'formComplete' || 
           event.data.type === 'thankyou' ||
           event.data.status === 'submitted')) {
        console.log("Form submission detected via postMessage");
        triggerSubmissionDetected();
      }
    };

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [lastDetectionTime, onDetect]);

  // Check for thank you page as a fallback detection method
  useEffect(() => {
    const checkForThankYouPage = () => {
      if (!iframeRef.current) return;
      
      try {
        const currentIframe = iframeRef.current;
        
        // If we can access contentWindow.location, check for thank you indicators
        if (currentIframe.contentWindow?.location?.href) {
          const href = currentIframe.contentWindow.location.href;
          if (href.includes('thank') || href.includes('success') || href.includes('confirm')) {
            console.log("Thank you page detected in iframe:", href);
            triggerSubmissionDetected();
          }
        }
      } catch (e) {
        // Expected cross-origin error, continue with other detection methods
      }
      
      // Visual detection method - check if iframe contains thank you text
      try {
        const currentIframe = iframeRef.current;
        const thankYouText = currentIframe.contentDocument?.body?.innerText;
        console.log("Checking iframe content for thank you text:", thankYouText);
        if (thankYouText && 
            (thankYouText.includes('Thank you') || 
             thankYouText.includes('Thanks') || 
             thankYouText.includes('thank you') ||
             thankYouText.includes('thanks') ||
             thankYouText.includes('successfully submitted') ||
             thankYouText.includes('complete this survey'))) {
          console.log("Thank you text detected in iframe");
          triggerSubmissionDetected();
        }
      } catch (e) {
        // Expected cross-origin error
      }
    };
    
    // Check immediately and then at regular intervals
    checkForThankYouPage();
    const thankYouTimer = setInterval(checkForThankYouPage, 1000);
    
    return () => {
      clearInterval(thankYouTimer);
    };
  }, [iframeRef, lastDetectionTime, onDetect]);

  // Add MutationObserver to detect DOM changes in iframe
  useEffect(() => {
    if (!iframeRef.current) return;
    
    try {
      const currentIframe = iframeRef.current;
      const iframeDoc = currentIframe.contentDocument || currentIframe.contentWindow?.document;
      
      if (!iframeDoc) return;
      
      const observer = new MutationObserver((mutations) => {
        const hasThankYou = mutations.some(mutation => {
          if (mutation.type === 'childList' && mutation.addedNodes.length) {
            return Array.from(mutation.addedNodes).some((node: any) => 
              node.textContent?.includes('Thank you') || 
              node.textContent?.includes('Thanks') ||
              node.textContent?.includes('thank you') ||
              node.textContent?.includes('thanks') ||
              node.textContent?.includes('complete this survey')
            );
          }
          return false;
        });
        
        if (hasThankYou) {
          console.log("Thank you detected via DOM mutation");
          triggerSubmissionDetected();
        }
      });
      
      observer.observe(iframeDoc.body, { 
        childList: true, 
        subtree: true,
        characterData: true
      });
      
      return () => observer.disconnect();
    } catch (e) {
      // Expected cross-origin error
    }
  }, [iframeRef, lastDetectionTime, onDetect]);

  // Add click handler to detect thank you after user interactions
  const setupClickDetection = (containerRef: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
      const containerElement = containerRef.current;
      
      const handleContainerClick = (e: MouseEvent) => {
        // After a click, wait a short time and then check if the form shows a thank you message
        setTimeout(() => {
          if (iframeRef.current) {
            try {
              const currentIframe = iframeRef.current;
              const thankYouElements = currentIframe.contentDocument?.querySelectorAll?.('*');
              if (thankYouElements) {
                const hasThankYou = Array.from(thankYouElements).some(el => 
                  el.textContent?.includes('Thank you') || 
                  el.textContent?.includes('Thanks') ||
                  el.textContent?.includes('thank you') ||
                  el.textContent?.includes('thanks') ||
                  el.textContent?.includes('complete this survey')
                );
                
                if (hasThankYou) {
                  console.log("Thank you detected after click");
                  triggerSubmissionDetected();
                }
              }
            } catch (e) {
              // Expected cross-origin error
            }
          }
        }, 1000);
      };
      
      if (containerElement) {
        containerElement.addEventListener('click', handleContainerClick);
      }
      
      return () => {
        if (containerElement) {
          containerElement.removeEventListener('click', handleContainerClick);
        }
      };
    }, [containerRef, iframeRef, lastDetectionTime, onDetect]);
  };

  return {
    setupClickDetection
  };
}
