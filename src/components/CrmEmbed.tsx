
import { useEffect, useRef } from 'react';

interface CrmEmbedProps {
  formId?: string;
  height?: string;
  className?: string;
}

const CrmEmbed = ({ formId = '8IL41omixTKGjsWh61T9', height = '600px', className = '' }: CrmEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
          const iframeHeight = iframe.contentWindow?.document?.body?.scrollHeight;
          if (iframeHeight && iframeHeight > 100) {
            iframe.style.height = `${iframeHeight}px`;
          } else {
            iframe.style.height = height;
          }
        } catch (e) {
          console.log('Could not access iframe content due to same-origin policy', e);
          iframe.style.height = height;
        }
      }
    };

    // Set up a message listener for potential messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'setHeight' && event.data.formId === formId) {
        if (iframeRef.current) {
          iframeRef.current.style.height = `${event.data.height}px`;
        }
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Try to adjust the height periodically
    const timer = setInterval(adjustIframeHeight, 1000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearInterval(timer);
    };
  }, [formId, height]);

  return (
    <div ref={containerRef} className={`crm-embed-container w-full rounded-lg ${className}`}>
      <iframe 
        ref={iframeRef}
        src={`https://api.leadconnectorhq.com/widget/survey/${formId}`}
        style={{ 
          border: 'none', 
          width: '100%', 
          overflow: 'hidden', 
          height,
          borderRadius: '0.5rem',
        }}
        scrolling="no"
        id={formId}
        title="Business Funding Application Form"
        className="w-full shadow-sm"
      />
    </div>
  );
};

export default CrmEmbed;
