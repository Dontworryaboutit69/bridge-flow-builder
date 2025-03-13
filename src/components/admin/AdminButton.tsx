
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Settings } from 'lucide-react';
import ZapierSettings from './ZapierSettings';
import { useForm } from '@/lib/formContext';
import { useApplication, DEFAULT_WEBHOOK_URL } from '@/lib/applicationContext';
import { useLocation } from 'react-router-dom';

const AdminButton = () => {
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);
  
  // Access form context conditionally to avoid errors when not in form context
  const formContext = React.useMemo(() => {
    try {
      return useForm();
    } catch (e) {
      return {
        zapierWebhookUrl: localStorage.getItem('prequalify_webhook') || DEFAULT_WEBHOOK_URL,
        setZapierWebhookUrl: (url: string) => {
          localStorage.setItem('prequalify_webhook', url);
        }
      };
    }
  }, []);
  
  // Access application context conditionally to avoid errors when not in application context
  const applicationContext = React.useMemo(() => {
    try {
      return useApplication();
    } catch (e) {
      return {
        zapierWebhookUrl: localStorage.getItem('application_webhook') || DEFAULT_WEBHOOK_URL,
        setZapierWebhookUrl: (url: string) => {
          localStorage.setItem('application_webhook', url);
        }
      };
    }
  }, []);

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
      const prequalWebhookUrl = formContext.zapierWebhookUrl;
      const applicationWebhookUrl = applicationContext.zapierWebhookUrl;
      
      if (!prequalWebhookUrl || prequalWebhookUrl === '') {
        console.log("Setting default prequalification webhook URL:", DEFAULT_WEBHOOK_URL);
        formContext.setZapierWebhookUrl(DEFAULT_WEBHOOK_URL);
        localStorage.setItem('prequalify_webhook', DEFAULT_WEBHOOK_URL);
      }
      
      if (!applicationWebhookUrl || applicationWebhookUrl === '') {
        console.log("Setting default application webhook URL:", DEFAULT_WEBHOOK_URL);
        applicationContext.setZapierWebhookUrl(DEFAULT_WEBHOOK_URL);
        localStorage.setItem('application_webhook', DEFAULT_WEBHOOK_URL);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [formContext, applicationContext]);

  if (!showButton) return null;

  return (
    <div className="fixed top-20 right-5 z-50">
      <div className="bg-white p-3 rounded-lg shadow-lg">
        <ZapierSettings
          prequalWebhookUrl={formContext.zapierWebhookUrl || DEFAULT_WEBHOOK_URL}
          applicationWebhookUrl={applicationContext.zapierWebhookUrl || DEFAULT_WEBHOOK_URL}
          setPrequalWebhookUrl={formContext.setZapierWebhookUrl}
          setApplicationWebhookUrl={applicationContext.setZapierWebhookUrl}
        />
      </div>
    </div>
  );
};

export default AdminButton;
