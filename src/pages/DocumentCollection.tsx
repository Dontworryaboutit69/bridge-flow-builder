
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DocumentsLayout from '@/components/DocumentCollection/DocumentsLayout';
import DocumentPageFooter from '@/components/DocumentCollection/DocumentPageFooter';
import { Document } from '@/types/documents';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';

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
    },
    {
      id: 'photo-id',
      name: 'Photo ID',
      description: 'Driver\'s license, passport, or government-issued photo ID',
      uploaded: false,
      required: true,
    },
    {
      id: 'business-license',
      name: 'Business License',
      description: 'Valid business license or registration',
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

  const handleUpload = useCallback((id: string, files: FileList) => {
    if (files.length === 0) {
      // This is a "remove" operation
      setDocuments(docs => docs.map(doc => 
        doc.id === id ? { ...doc, uploaded: false, uploadCount: 0 } : doc
      ));
      toast({
        title: "Document removed",
        description: "You can upload a new document when ready.",
      });
      return;
    }
    
    // Validate file types and sizes
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
    
    // Simulate file upload
    setUploadingId(id);
    
    // In a real application, you would create a FormData object and use fetch/axios to upload
    setTimeout(() => {
      setDocuments(docs => docs.map(doc => {
        if (doc.id === id) {
          if (doc.id === 'bank-statements') {
            // For bank statements, we want to track the number of uploads
            const newCount = Math.min((doc.uploadCount || 0) + 1, doc.maxUploads || 3);
            const isFullyUploaded = newCount >= (doc.maxUploads || 3);
            
            return { 
              ...doc, 
              uploaded: isFullyUploaded, 
              uploadCount: newCount 
            };
          } else {
            // For other documents, uploaded is binary
            return { ...doc, uploaded: true };
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
    // Here you would typically send all document references to your backend
    console.log('Documents submitted:', documents);
    
    // For the demo, we'll simulate success
    toast({
      title: "Documents submitted successfully",
      description: "Our team will review your documents shortly.",
    });
  }, [documents]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-8 md:pb-16 bg-funding-light-gray/30 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-soft-peach/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-soft-blue/20 rounded-full blur-3xl"></div>
          <div className="dot-pattern"></div>
        </div>
        
        <DocumentsLayout 
          documents={documents}
          uploadingId={uploadingId}
          handleUpload={handleUpload}
          schedulingLink={schedulingLink}
          onSubmitDocuments={handleSubmitDocuments}
        />
      </main>
      
      <DocumentPageFooter />
    </div>
  );
};

export default DocumentCollection;
