
import { useEffect, useState } from 'react';

interface UseIframeHeightProps {
  iframeRef: React.RefObject<HTMLIFrameElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  initialHeight: string;
  formId?: string;
}

/**
 * A hook that adjusts the iframe height based on its content
 */
export function useIframeHeight({
  iframeRef,
  containerRef,
  initialHeight,
  formId
}: UseIframeHeightProps) {
  const [iframeHeight, setIframeHeight] = useState(initialHeight);

  useEffect(() => {
    // Function to adjust iframe height based on content
    const adjustIframeHeight = () => {
      if (iframeRef.current && containerRef.current) {
        const currentIframe = iframeRef.current;
        
        try {
          // Try to get the height from the iframe content
          const contentHeight = currentIframe.contentWindow?.document?.body?.scrollHeight;
          if (contentHeight && contentHeight > 100) {
            setIframeHeight(`${contentHeight + 50}px`); // Add padding
          }
        } catch (e) {
          // The cross-origin error is expected
        }
      }
    };

    // Set up a message listener for potential height messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Handle height adjustment messages
      if (event.data && event.data.type === 'setHeight' && event.data.formId === formId) {
        setIframeHeight(`${event.data.height + 50}px`); // Add padding
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Try to adjust the height periodically
    const heightTimer = setInterval(adjustIframeHeight, 2000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearInterval(heightTimer);
    };
  }, [iframeRef, containerRef, formId]);

  return iframeHeight;
}
