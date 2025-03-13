
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Settings } from 'lucide-react';
import ZapierSettings from './ZapierSettings';
import { useForm } from '@/lib/formContext';
import { useApplication } from '@/lib/applicationContext';
import { useLocation } from 'react-router-dom';

const DEFAULT_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/15135493/2lh1woc/";

const AdminButton = () => {
  const { zapierWebhookUrl: prequalWebhookUrl, setZapierWebhookUrl: setPrequalWebhookUrl } = useForm();
  const { zapierWebhookUrl: applicationWebhookUrl, setZapierWebhookUrl: setApplicationWebhookUrl } = useApplication();
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show when specifically triggered, not by default on homepage
    
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

  // Auto-save the default webhook URL if it's not set already
  useEffect(() => {
    // Add a small delay to ensure contexts are properly initialized
    const timer = setTimeout(() => {
      if (!prequalWebhookUrl || prequalWebhookUrl === '') {
        console.log("Setting default prequalification webhook URL:", DEFAULT_WEBHOOK_URL);
        setPrequalWebhookUrl(DEFAULT_WEBHOOK_URL);
        localStorage.setItem('prequalify_webhook', DEFAULT_WEBHOOK_URL);
      }
      
      if (!applicationWebhookUrl || applicationWebhookUrl === '') {
        console.log("Setting default application webhook URL:", DEFAULT_WEBHOOK_URL);
        setApplicationWebhookUrl(DEFAULT_WEBHOOK_URL);
        localStorage.setItem('application_webhook', DEFAULT_WEBHOOK_URL);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [prequalWebhookUrl, applicationWebhookUrl, setPrequalWebhookUrl, setApplicationWebhookUrl]);

  if (!showButton) return null;

  return (
    <div className="fixed top-20 right-5 z-50">
      <div className="bg-white p-3 rounded-lg shadow-lg">
        <ZapierSettings
          prequalWebhookUrl={prequalWebhookUrl || DEFAULT_WEBHOOK_URL}
          applicationWebhookUrl={applicationWebhookUrl || DEFAULT_WEBHOOK_URL}
          setPrequalWebhookUrl={setPrequalWebhookUrl}
          setApplicationWebhookUrl={setApplicationWebhookUrl}
        />
      </div>
    </div>
  );
};

export default AdminButton;
