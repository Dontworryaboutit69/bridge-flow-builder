
import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DocumentsLayout from '@/components/DocumentCollection/DocumentsLayout';
import DocumentPageFooter from '@/components/DocumentCollection/DocumentPageFooter';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import BackgroundDecorations from '@/components/DocumentCollection/BackgroundDecorations';
import AdminSettingsSection from '@/components/DocumentCollection/AdminSettingsSection';
import { useDocumentCollection } from '@/hooks/useDocumentCollection';

const DocumentCollection = () => {
  const navigate = useNavigate();
  const { documents, uploadingId, handleUpload } = useDocumentCollection();
  const schedulingLink = "https://api.leadconnectorhq.com/widget/bookings/soniab";
  
  const [webhookUrl, setWebhookUrl] = useState<string>(
    localStorage.getItem('document_webhook') || ''
  );
  const [prequalWebhookUrl, setPrequalWebhookUrl] = useState<string>(
    localStorage.getItem('prequalify_webhook') || ''
  );
  const [applicationWebhookUrl, setApplicationWebhookUrl] = useState<string>(
    localStorage.getItem('application_webhook') || ''
  );
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsAdmin(params.get('admin') === 'true');
  }, []);

  const handleSubmitDocuments = useCallback(() => {
    console.log('Documents submitted:', documents);
    if (webhookUrl) {
      localStorage.setItem('document_webhook', webhookUrl);
    }
    toast({
      title: "Documents submitted successfully",
      description: "Our team will review your documents shortly.",
    });
  }, [documents, webhookUrl]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-8 md:pb-16 bg-funding-light-gray/30 relative">
        <BackgroundDecorations />
        
        <AdminSettingsSection 
          isAdmin={isAdmin}
          prequalWebhookUrl={prequalWebhookUrl}
          applicationWebhookUrl={applicationWebhookUrl}
          setPrequalWebhookUrl={setPrequalWebhookUrl}
          setApplicationWebhookUrl={setApplicationWebhookUrl}
          setWebhookUrl={setWebhookUrl}
        />
        
        <DocumentsLayout 
          documents={documents}
          uploadingId={uploadingId}
          handleUpload={handleUpload}
          schedulingLink={schedulingLink}
          onSubmitDocuments={handleSubmitDocuments}
          webhookUrl={webhookUrl}
        />
      </main>
      
      <DocumentPageFooter />
    </div>
  );
};

export default DocumentCollection;
