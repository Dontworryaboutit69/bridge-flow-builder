
import { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';

interface CrmEmbedProps {
  formId?: string;
  height?: string;
  className?: string;
  onFormSubmit?: () => void;
}

const CrmEmbed = ({ 
  formId = '8IL41omixTKGjsWh61T9', 
  height = '600px', 
  className = '',
  onFormSubmit 
}: CrmEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [iframeHeight, setIframeHeight] = useState(height);
  const [lastOriginCheck, setLastOriginCheck] = useState(Date.now());

  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Function to adjust iframe height based on content
    const adjustIframeHeight = () => {
      if (iframeRef.current && containerRef.current) {
        const iframe = iframeRef.current;
        
        try {
          // Try to get the height from the iframe content
          const contentHeight = iframe.contentWindow?.document?.body?.scrollHeight;
          if (contentHeight && contentHeight > 100) {
            setIframeHeight(`${contentHeight + 50}px`); // Add padding
          }
        } catch (e) {
          // The cross-origin error is expected and logged elsewhere
        }
      }
    };

    // Set up a message listener for potential messages from the iframe
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
        if (onFormSubmit) {
          console.log("Calling onFormSubmit callback");
          onFormSubmit();
        }
      }
      
      // Handle height adjustment messages
      if (event.data && event.data.type === 'setHeight' && event.data.formId === formId) {
        setIframeHeight(`${event.data.height + 50}px`); // Add padding
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Check for thank you page as a fallback detection method
    const checkForThankYouPage = () => {
      if (iframeRef.current) {
        try {
          const iframe = iframeRef.current;
          const iframeSrc = iframe.src;
          
          // If we can access contentWindow.location, check for thank you indicators
          if (iframe.contentWindow?.location?.href) {
            const href = iframe.contentWindow.location.href;
            if (href.includes('thank') || href.includes('success') || href.includes('confirm')) {
              console.log("Thank you page detected in iframe:", href);
              if (onFormSubmit && Date.now() - lastOriginCheck > 3000) {
                console.log("Triggering form submission via thank you page detection");
                setLastOriginCheck(Date.now());
                onFormSubmit();
              }
            }
          }
        } catch (e) {
          // Expected cross-origin error, continue with other detection methods
        }
        
        // Visual detection method - check if iframe contains thank you text
        try {
          const thankYouText = iframe.contentDocument?.body?.innerText;
          if (thankYouText && 
              (thankYouText.includes('Thank you') || 
               thankYouText.includes('Thanks') || 
               thankYouText.includes('successfully submitted'))) {
            console.log("Thank you text detected in iframe");
            if (onFormSubmit && Date.now() - lastOriginCheck > 3000) {
              console.log("Triggering form submission via thank you text detection");
              setLastOriginCheck(Date.now());
              onFormSubmit();
            }
          }
        } catch (e) {
          // Expected cross-origin error
        }
      }
    };
    
    // Try to adjust the height periodically and check for thank you page
    const heightTimer = setInterval(adjustIframeHeight, 2000);
    const thankYouTimer = setInterval(checkForThankYouPage, 2000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearInterval(heightTimer);
      clearInterval(thankYouTimer);
    };
  }, [formId, onFormSubmit, lastOriginCheck]);

  // Add click event listener to detect thank you button clicks
  useEffect(() => {
    const containerElement = containerRef.current;
    
    const handleContainerClick = (e: MouseEvent) => {
      // After a click, wait a short time and then check if the form shows a thank you message
      setTimeout(() => {
        if (iframeRef.current) {
          try {
            const thankYouElements = iframeRef.current.contentDocument?.querySelectorAll?.('*');
            if (thankYouElements) {
              const hasThankYou = Array.from(thankYouElements).some(el => 
                el.textContent?.includes('Thank you') || 
                el.textContent?.includes('Thanks')
              );
              
              if (hasThankYou && onFormSubmit && Date.now() - lastOriginCheck > 3000) {
                console.log("Thank you detected after click");
                setLastOriginCheck(Date.now());
                onFormSubmit();
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
  }, [onFormSubmit, lastOriginCheck]);

  // Add MutationObserver to detect DOM changes in iframe
  useEffect(() => {
    if (!iframeRef.current) return;
    
    try {
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (!iframeDoc) return;
      
      const observer = new MutationObserver((mutations) => {
        const hasThankYou = mutations.some(mutation => {
          if (mutation.type === 'childList' && mutation.addedNodes.length) {
            return Array.from(mutation.addedNodes).some((node: any) => 
              node.textContent?.includes('Thank you') || 
              node.textContent?.includes('Thanks')
            );
          }
          return false;
        });
        
        if (hasThankYou && onFormSubmit && Date.now() - lastOriginCheck > 3000) {
          console.log("Thank you detected via DOM mutation");
          setLastOriginCheck(Date.now());
          onFormSubmit();
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
  }, [onFormSubmit, lastOriginCheck]);

  return (
    <Card ref={containerRef} className={`crm-embed-container w-full overflow-hidden ${className}`}>
      <iframe 
        ref={iframeRef}
        src={`https://api.leadconnectorhq.com/widget/survey/${formId}`}
        style={{ 
          border: 'none', 
          width: '100%', 
          overflow: 'hidden', 
          height: iframeHeight,
        }}
        scrolling="no"
        id={formId}
        title="Business Funding Application Form"
        className="w-full"
      />
    </Card>
  );
};

export default CrmEmbed;
