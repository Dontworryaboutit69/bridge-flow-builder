
import React from 'react';
import ZapierSettings from '@/components/admin/ZapierSettings';

type AdminSettingsSectionProps = {
  isAdmin: boolean;
  prequalWebhookUrl: string;
  applicationWebhookUrl: string;
  setPrequalWebhookUrl: (url: string) => void;
  setApplicationWebhookUrl: (url: string) => void;
  setWebhookUrl: (url: string) => void;
};

const AdminSettingsSection = ({
  isAdmin,
  prequalWebhookUrl,
  applicationWebhookUrl,
  setPrequalWebhookUrl,
  setApplicationWebhookUrl,
  setWebhookUrl
}: AdminSettingsSectionProps) => {
  if (!isAdmin) return null;
  
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 mb-4 flex justify-end">
      <ZapierSettings 
        prequalWebhookUrl={prequalWebhookUrl}
        applicationWebhookUrl={applicationWebhookUrl}
        setPrequalWebhookUrl={url => {
          setPrequalWebhookUrl(url);
          localStorage.setItem('prequalify_webhook', url);
        }}
        setApplicationWebhookUrl={url => {
          setApplicationWebhookUrl(url);
          setWebhookUrl(url); // Use the same webhook for documents
          localStorage.setItem('application_webhook', url);
          localStorage.setItem('document_webhook', url);
        }}
      />
    </div>
  );
};

export default AdminSettingsSection;
