
import React from 'react';
import DocumentUploadItem from './DocumentUploadItem';
import SubmitSection from './SubmitSection';
import { Document } from '@/types/documents';
import { useDocumentSubmission } from './useDocumentSubmission';

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
  const { 
    handleSubmit, 
    checkAllRequiredUploaded, 
    calculateTotals 
  } = useDocumentSubmission({
    documents,
    onSubmitDocuments,
    webhookUrl
  });

  const allRequiredUploaded = checkAllRequiredUploaded();
  const { totalUploaded, totalRequired } = calculateTotals();

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
      
      <SubmitSection
        documents={documents}
        totalUploaded={totalUploaded}
        totalRequired={totalRequired}
        allRequiredUploaded={allRequiredUploaded}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default DocumentUploadList;
