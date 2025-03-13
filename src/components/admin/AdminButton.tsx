
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Settings } from 'lucide-react';
import ZapierSettings from './ZapierSettings';
import { useForm } from '@/lib/formContext';
import { useApplication } from '@/lib/applicationContext';

const AdminButton = () => {
  const { zapierWebhookUrl: prequalWebhookUrl, setZapierWebhookUrl: setPrequalWebhookUrl } = useForm();
  const { zapierWebhookUrl: applicationWebhookUrl, setZapierWebhookUrl: setApplicationWebhookUrl } = useApplication();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Check for special keyboard combination (Shift + Ctrl + A)
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
  }, []);

  if (!showButton) return null;

  return (
    <div className="fixed top-20 right-5 z-50">
      <div className="bg-white p-3 rounded-lg shadow-lg">
        <ZapierSettings
          prequalWebhookUrl={prequalWebhookUrl}
          applicationWebhookUrl={applicationWebhookUrl}
          setPrequalWebhookUrl={setPrequalWebhookUrl}
          setApplicationWebhookUrl={setApplicationWebhookUrl}
        />
      </div>
    </div>
  );
};

export default AdminButton;
