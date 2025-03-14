
import { useRef } from 'react';
import { Card } from './ui/card';
import { useFormSubmissionDetection } from '@/hooks/useFormSubmissionDetection';
import { useIframeHeight } from '@/hooks/useIframeHeight';
import FormScriptLoader from './CrmEmbed/FormScriptLoader';

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
  
  // Handle form submission detection
  const { setupClickDetection } = useFormSubmissionDetection({
    iframeRef,
    formId,
    onDetect: () => {
      if (onFormSubmit) {
        onFormSubmit();
      }
    }
  });
  
  // Set up click detection
  setupClickDetection(containerRef);
  
  // Handle iframe height adjustment
  const iframeHeight = useIframeHeight({
    iframeRef,
    containerRef,
    initialHeight: height,
    formId
  });

  return (
    <>
      <FormScriptLoader />
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
    </>
  );
};

export default CrmEmbed;
