
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Settings } from 'lucide-react';
import ZapierSettings from './ZapierSettings';
import { useForm } from '@/lib/formContext';
import { useApplication } from '@/lib/applicationContext';
import { useLocation } from 'react-router-dom';

const AdminButton = () => {
  const { zapierWebhookUrl: prequalWebhookUrl, setZapierWebhookUrl: setPrequalWebhookUrl } = useForm();
  const { zapierWebhookUrl: applicationWebhookUrl, setZapierWebhookUrl: setApplicationWebhookUrl } = useApplication();
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Set the Make.com webhook URL
  const makeWebhookUrl = "https://hook.integromat.com/{{2.rpc://hook}}";

  useEffect(() => {
    // Always show on homepage
    if (isHomePage) {
      setShowButton(true);
    }

    // Also check for special keyboard combination (Shift + Ctrl + A)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.ctrlKey && e.key === 'A') {
        setShowButton(prev => !prev);
      }
    };

    // Check if we have a webhook in the URL
    const params = new URLSearchParams(window.location.search);
    const webhookParam = params.get('webhook');
    if (webhookParam) {
      setShowButton(true);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isHomePage]);

  // Auto-save the webhook URL if it's not set already
  useEffect(() => {
    if (makeWebhookUrl && (!prequalWebhookUrl || !applicationWebhookUrl)) {
      // Add a small delay to ensure contexts are properly initialized
      const timer = setTimeout(() => {
        setPrequalWebhookUrl(makeWebhookUrl);
        setApplicationWebhookUrl(makeWebhookUrl);
        
        // Save to localStorage for persistence
        localStorage.setItem('prequalify_webhook', makeWebhookUrl);
        localStorage.setItem('application_webhook', makeWebhookUrl);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [makeWebhookUrl, prequalWebhookUrl, applicationWebhookUrl, setPrequalWebhookUrl, setApplicationWebhookUrl]);

  if (!showButton) return null;

  return (
    <div className="fixed top-20 right-5 z-50">
      <div className="bg-white p-3 rounded-lg shadow-lg">
        <ZapierSettings
          prequalWebhookUrl={prequalWebhookUrl || makeWebhookUrl}
          applicationWebhookUrl={applicationWebhookUrl || makeWebhookUrl}
          setPrequalWebhookUrl={setPrequalWebhookUrl}
          setApplicationWebhookUrl={setApplicationWebhookUrl}
        />
      </div>
    </div>
  );
};

export default AdminButton;
