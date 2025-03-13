
import { useState, useCallback, useEffect } from 'react';
import { Document } from '@/types/documents';
import { toast } from '@/hooks/use-toast';

export const useDocumentCollection = () => {
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

  return { 
    documents, 
    uploadingId, 
    handleUpload 
  };
};
