
import React from 'react';
import { ArrowRight, FileCheck } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import DocumentUploadItem from './DocumentUploadItem';

type Document = {
  id: string;
  name: string;
  description: string;
  uploaded: boolean;
  required: boolean;
};

type DocumentUploadListProps = {
  documents: Document[];
  uploadingId: string | null;
  handleUpload: (id: string) => void;
};

const DocumentUploadList = ({ documents, uploadingId, handleUpload }: DocumentUploadListProps) => {
  const allRequiredUploaded = documents
    .filter(doc => doc.required)
    .every(doc => doc.uploaded);

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
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">
            {documents.filter(d => d.uploaded).length} of {documents.length} documents uploaded
          </p>
          {allRequiredUploaded ? (
            <CustomButton 
              className="group"
            >
              Submit Documents
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </CustomButton>
          ) : (
            <CustomButton 
              disabled
            >
              Submit Documents
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadList;
