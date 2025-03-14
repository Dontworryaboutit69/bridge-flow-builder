
import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import BackgroundDecorations from '@/components/DocumentCollection/BackgroundDecorations';
import AdminSettingsSection from '@/components/DocumentCollection/AdminSettingsSection';
import { useDocumentCollection } from '@/hooks/useDocumentCollection';
import CrmEmbed from '@/components/CrmEmbed';
import DocumentPageFooter from '@/components/DocumentCollection/DocumentPageFooter';

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

  const handleFormSubmit = useCallback(() => {
    console.log('Document form submitted');
    if (webhookUrl) {
      localStorage.setItem('document_webhook', webhookUrl);
    }
    toast({
      title: "Documents submitted successfully",
      description: "Our team will review your documents shortly.",
    });
    
    // Navigate to thank you page after a brief delay
    setTimeout(() => {
      navigate('/thank-you?docs_submitted=true');
    }, 1500);
  }, [webhookUrl, navigate]);

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
        
        <div className="max-w-7xl mx-auto px-4 md:px-10 relative">
          <div className="border-b border-funding-light-gray pb-6 mb-6">
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-funding-dark mb-4">
                Document Collection
              </h1>
              <p className="text-funding-gray max-w-2xl mx-auto text-center">
                Please upload the required documents to complete your funding application
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <CrmEmbed 
              formId="nwNTfdAx1lyFn4mAQVkD" 
              height="800px"
              className="mb-8"
              onFormSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </main>
      
      <DocumentPageFooter />
    </div>
  );
};

export default DocumentCollection;
