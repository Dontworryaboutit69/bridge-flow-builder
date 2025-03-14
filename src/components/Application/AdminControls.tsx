
import { useState, useEffect } from 'react';
import ZapierSettings from '@/components/admin/ZapierSettings';
import { DEFAULT_WEBHOOK_URL } from '@/lib/applicationContext';

interface AdminControlsProps {
  isAdmin: boolean;
}

const AdminControls = ({ isAdmin }: AdminControlsProps) => {
  // Initialize webhook URLs with defaults
  const [prequalWebhookUrl, setPrequalWebhookUrl] = useState<string>(
    localStorage.getItem('prequalify_webhook') || DEFAULT_WEBHOOK_URL
  );
  const [applicationWebhookUrl, setApplicationWebhookUrl] = useState<string>(
    localStorage.getItem('application_webhook') || DEFAULT_WEBHOOK_URL
  );
  
  // Ensure webhook URL is set on load
  useEffect(() => {
    if (!prequalWebhookUrl) {
      setPrequalWebhookUrl(DEFAULT_WEBHOOK_URL);
      localStorage.setItem('prequalify_webhook', DEFAULT_WEBHOOK_URL);
    }
    if (!applicationWebhookUrl) {
      setApplicationWebhookUrl(DEFAULT_WEBHOOK_URL);
      localStorage.setItem('application_webhook', DEFAULT_WEBHOOK_URL);
    }
  }, [prequalWebhookUrl, applicationWebhookUrl]);
  
  if (!isAdmin) return null;
  
  return (
    <div className="mb-4 flex justify-end">
      <ZapierSettings 
        prequalWebhookUrl={prequalWebhookUrl}
        applicationWebhookUrl={applicationWebhookUrl}
        setPrequalWebhookUrl={(url) => {
          setPrequalWebhookUrl(url);
          localStorage.setItem('prequalify_webhook', url);
        }}
        setApplicationWebhookUrl={(url) => {
          setApplicationWebhookUrl(url);
          localStorage.setItem('application_webhook', url);
        }}
      />
    </div>
  );
};

export default AdminControls;
