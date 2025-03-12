
import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DocumentsLayout from '@/components/DocumentCollection/DocumentsLayout';
import DocumentPageFooter from '@/components/DocumentCollection/DocumentPageFooter';
import { Document } from '@/types/documents';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import ZapierSettings from '@/components/admin/ZapierSettings';

const DocumentCollection = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 'bank-statements',
      name: 'Last 3 Bank Statements',
      description: 'Most recent 3 months of business bank statements',
      uploaded: false,
      required: true,
      uploadCount: 0,
      maxUploads: 3,
      files: [],
    },
    {
      id: 'photo-id',
      name: 'Photo ID',
      description: 'Driver\'s license, passport, or government-issued photo ID',
      uploaded: false,
      required: true,
    },
    {
      id: 'voided-check',
      name: 'Voided Check or Direct Deposit Form',
      description: 'For verification of your business bank account',
      uploaded: false,
      required: false,
    },
    {
      id: 'tax-returns',
      name: 'Business Tax Returns',
      description: 'Most recent business tax return (if available)',
      uploaded: false,
      required: false,
    },
    {
      id: 'profit-loss',
      name: 'Profit & Loss Statement',
      description: 'Year-to-date profit and loss statement',
      uploaded: false,
      required: false,
    },
  ]);

  const [uploadingId, setUploadingId] = useState<string | null>(null);
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

  const handleUpload = useCallback((id: string, files: FileList) => {
    if (files.length === 0) {
      setDocuments(docs => docs.map(doc => 
        doc.id === id ? { ...doc, uploaded: false, uploadCount: 0, files: [] } : doc
      ));
      toast({
        title: "Document removed",
        description: "You can upload a new document when ready.",
      });
      return;
    }
    
    const invalidFiles = Array.from(files).filter(file => {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      const maxSize = 10 * 1024 * 1024; // 10MB
      
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload PDF, JPG, or PNG files only.",
          variant: "destructive",
        });
        return true;
      }
      
      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: "Files must be less than 10MB.",
          variant: "destructive",
        });
        return true;
      }
      
      return false;
    });
    
    if (invalidFiles.length > 0) {
      return;
    }
    
    setUploadingId(id);
    
    setTimeout(() => {
      setDocuments(docs => docs.map(doc => {
        if (doc.id === id) {
          if (doc.id === 'bank-statements') {
            const currentFiles = doc.files || [];
            const newFiles = Array.from(files);
            const updatedFiles = [...currentFiles, ...newFiles];
            const newCount = Math.min((doc.uploadCount || 0) + 1, doc.maxUploads || 3);
            const isFullyUploaded = newCount >= (doc.maxUploads || 3);
            
            return { 
              ...doc, 
              uploaded: isFullyUploaded,
              uploadCount: newCount,
              files: updatedFiles
            };
          } else {
            return { ...doc, uploaded: true, files: Array.from(files) };
          }
        }
        return doc;
      }));
      
      setUploadingId(null);
      
      toast({
        title: "Upload successful",
        description: `${files.length} file${files.length > 1 ? 's' : ''} uploaded successfully.`,
      });
    }, 1500);
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-soft-peach/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-soft-blue/20 rounded-full blur-3xl"></div>
          <div className="dot-pattern"></div>
        </div>
        
        {isAdmin && (
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
        )}
        
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
