
import { useEffect } from 'react';

/**
 * A component that loads the form embed script
 */
const FormScriptLoader = () => {
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

  return null;
};

export default FormScriptLoader;
