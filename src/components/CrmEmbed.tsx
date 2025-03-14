
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
          console.log('Could not access iframe content due to same-origin policy', e);
        }
      }
    };

    // Set up a message listener for potential messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Handle form submission events if they exist
      if (event.data && event.data.type === 'formSubmit' && formId === event.data.formId) {
        if (onFormSubmit) onFormSubmit();
      }
      
      // Handle height adjustment messages
      if (event.data && event.data.type === 'setHeight' && event.data.formId === formId) {
        setIframeHeight(`${event.data.height + 50}px`); // Add padding
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Try to adjust the height periodically
    const timer = setInterval(adjustIframeHeight, 1000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearInterval(timer);
    };
  }, [formId, onFormSubmit]);

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
