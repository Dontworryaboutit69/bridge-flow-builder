
import React from 'react';
import { ArrowRight, FileCheck } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import DocumentUploadItem from './DocumentUploadItem';
import { toast } from '@/hooks/use-toast';
import { Document } from '@/types/documents';
import { useNavigate } from 'react-router-dom';

type DocumentUploadListProps = {
  documents: Document[];
  uploadingId: string | null;
  handleUpload: (id: string, files: FileList) => void;
  onSubmitDocuments: () => void;
};

const DocumentUploadList = ({ documents, uploadingId, handleUpload, onSubmitDocuments }: DocumentUploadListProps) => {
  const navigate = useNavigate();
  
  const allRequiredUploaded = documents
    .filter(doc => doc.required)
    .every(doc => doc.uploaded);

  const handleSubmit = () => {
    if (allRequiredUploaded) {
      toast({
        title: "Documents successfully submitted",
        description: "Your documents are being processed for review.",
      });
      
      // Call the submission function first
      onSubmitDocuments();
      
      // Delay navigation to ensure toast is visible
      setTimeout(() => {
        navigate('/thank-you');
      }, 1500);
    } else {
      toast({
        title: "Required documents missing",
        description: "Please upload all required documents before submitting.",
        variant: "destructive",
      });
    }
  };

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
            {documents.filter(d => d.uploaded).length} of {documents.length} documents uploaded
          </p>
          <CustomButton 
            className="group"
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
