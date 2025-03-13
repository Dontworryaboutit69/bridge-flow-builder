
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

  // Set the Zapier webhook URL
  const zapierWebhookUrl = "";

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

  // Auto-save the webhook URL if it's not set already
  useEffect(() => {
    if (zapierWebhookUrl && (!prequalWebhookUrl || !applicationWebhookUrl)) {
      // Add a small delay to ensure contexts are properly initialized
      const timer = setTimeout(() => {
        setPrequalWebhookUrl(zapierWebhookUrl);
        setApplicationWebhookUrl(zapierWebhookUrl);
        
        // Save to localStorage for persistence
        localStorage.setItem('prequalify_webhook', zapierWebhookUrl);
        localStorage.setItem('application_webhook', zapierWebhookUrl);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [zapierWebhookUrl, prequalWebhookUrl, applicationWebhookUrl, setPrequalWebhookUrl, setApplicationWebhookUrl]);

  if (!showButton) return null;

  return (
    <div className="fixed top-20 right-5 z-50">
      <div className="bg-white p-3 rounded-lg shadow-lg">
        <ZapierSettings
          prequalWebhookUrl={prequalWebhookUrl || zapierWebhookUrl}
          applicationWebhookUrl={applicationWebhookUrl || zapierWebhookUrl}
          setPrequalWebhookUrl={setPrequalWebhookUrl}
          setApplicationWebhookUrl={setApplicationWebhookUrl}
        />
      </div>
    </div>
  );
};

export default AdminButton;
