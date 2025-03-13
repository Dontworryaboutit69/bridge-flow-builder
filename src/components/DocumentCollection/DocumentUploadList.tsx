import React from 'react';
import { ArrowRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import DocumentUploadItem from './DocumentUploadItem';
import { toast } from '@/hooks/use-toast';
import { Document } from '@/types/documents';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_WEBHOOK_URL } from '@/lib/applicationContext';
import { supabase } from "@/integrations/supabase/client";

type DocumentUploadListProps = {
  documents: Document[];
  uploadingId: string | null;
  handleUpload: (id: string, files: FileList) => void;
  onSubmitDocuments: () => void;
  webhookUrl?: string;
};

const DocumentUploadList = ({ 
  documents, 
  uploadingId, 
  handleUpload, 
  onSubmitDocuments,
  webhookUrl
}: DocumentUploadListProps) => {
  const navigate = useNavigate();
  const finalWebhookUrl = webhookUrl || DEFAULT_WEBHOOK_URL;
  
  const allRequiredUploaded = documents
    .filter(doc => doc.required)
    .every(doc => {
      if (doc.id === 'bank-statements' && doc.maxUploads) {
        return (doc.uploadCount || 0) >= doc.maxUploads;
      }
      return doc.uploaded;
    });

  const handleSubmit = async () => {
    // Check for bank statements specifically
    const bankStatement = documents.find(doc => doc.id === 'bank-statements');
    if (bankStatement && bankStatement.required && bankStatement.maxUploads) {
      if ((bankStatement.uploadCount || 0) < bankStatement.maxUploads) {
        toast({
          title: "Bank statements missing",
          description: `Please upload all ${bankStatement.maxUploads} months of bank statements before submitting.`,
          variant: "destructive",
        });
        return;
      }
    }
    
    if (allRequiredUploaded) {
      console.log("Using document webhook URL:", finalWebhookUrl);
      
      // Get the current application ID from localStorage
      const applicationId = localStorage.getItem('current_application_id');
      
      // Save document information to Supabase
      for (const doc of documents) {
        if (doc.files && doc.files.length > 0) {
          for (const file of doc.files) {
            try {
              // Add each document to the GrowthPath Documents Table
              const insertData = {
                application_id: applicationId,
                document_type: doc.id,
                document_name: file.name,
                file_path: `documents/${applicationId}/${doc.id}/${file.name}`,
                file_size: file.size,
                file_type: file.type
              };
              
              const { error } = await supabase
                .from('GrowthPath Documents Table')
                .insert(insertData);
                
              if (error) {
                console.error(`Error saving document ${file.name} to Supabase:`, error);
              } else {
                console.log(`Document ${file.name} saved to Supabase successfully`);
              }
            } catch (error) {
              console.error(`Error processing document ${file.name}:`, error);
            }
          }
        }
      }
      
      // Store document data in localStorage as a fallback
      localStorage.setItem(`documents_${applicationId}`, JSON.stringify(
        documents.map(doc => ({
          document_type: doc.id,
          document_name: doc.name,
          uploaded: doc.uploaded,
          upload_count: doc.uploadCount || 0,
          required: doc.required,
          files: doc.files ? doc.files.map(f => ({
            name: f.name,
            size: f.size,
            type: f.type
          })) : []
        }))
      ));
      
      // Send data to webhook as the primary integration
      try {
        const documentSummary = documents.map(doc => ({
          id: doc.id,
          name: doc.name,
          uploaded: doc.uploaded,
          uploadCount: doc.uploadCount || 0,
          required: doc.required,
          filesCount: doc.files?.length || 0
        }));
        
        await fetch(finalWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors',
          body: JSON.stringify({
            form_type: 'document_collection',
            application_id: applicationId,
            documents: documentSummary,
            submission_date: new Date().toISOString(),
            source_url: window.location.href,
          }),
        });
        console.log('Document data sent to webhook successfully');
      } catch (error) {
        console.error('Error sending document data to webhook:', error);
        toast({
          title: "Warning",
          description: "Documents could not be sent to Zapier",
          variant: "destructive",
        });
      }
      
      toast({
        title: "Documents successfully submitted",
        description: "Your documents are being processed for review.",
      });
      
      // Call the submission function first
      onSubmitDocuments();
      
      // Delay navigation to ensure toast is visible
      setTimeout(() => {
        navigate('/thank-you?docs_submitted=true');
      }, 1500);
    } else {
      toast({
        title: "Required documents missing",
        description: "Please upload all required documents before submitting.",
        variant: "destructive",
      });
    }
  };

  const totalUploaded = documents.reduce((count, doc) => {
    if (doc.id === 'bank-statements') {
      return count + (doc.uploadCount || 0);
    }
    return doc.uploaded ? count + 1 : count;
  }, 0);
  
  const totalRequired = documents.reduce((count, doc) => {
    if (doc.id === 'bank-statements' && doc.maxUploads) {
      return count + doc.maxUploads;
    }
    return count + 1;
  }, 0);

  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mb-6">
      <h2 className="text-xl font-bold text-funding-dark mb-6">Required Documents</h2>
      
      <div className="space-y-4">
        {documents.map(doc => (
          <DocumentUploadItem 
            key={doc.id}
            document={doc}
            uploadingId={uploadingId}
            onUpload={handleUpload}
          />
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-funding-light-gray">
        <p className="text-sm text-funding-gray mb-4">
          <span className="text-red-500">*</span> Required documents
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <p className="text-sm font-medium">
            {totalUploaded} of {totalRequired} documents uploaded
          </p>
          <CustomButton 
            className="group rounded-full"
            size="md"
            disabled={!allRequiredUploaded}
            onClick={handleSubmit}
          >
            Submit Documents
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadList;
