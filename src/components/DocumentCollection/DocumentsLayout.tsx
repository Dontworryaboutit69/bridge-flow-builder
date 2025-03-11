
import React from 'react';
import DocumentHeader from './DocumentHeader';
import DocumentUploadList from './DocumentUploadList';
import DocumentSubmissionTips from './DocumentSubmissionTips';
import NeedHelpCard from './NeedHelpCard';
import ApplicationStatusCard from './ApplicationStatusCard';
import { Document } from '@/types/documents';

type DocumentsLayoutProps = {
  documents: Document[];
  uploadingId: string | null;
  handleUpload: (id: string, files: FileList) => void;
  schedulingLink: string;
  onSubmitDocuments: () => void;
};

const DocumentsLayout = ({ 
  documents, 
  uploadingId, 
  handleUpload, 
  schedulingLink,
  onSubmitDocuments
}: DocumentsLayoutProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 relative">
      <div className="border-b border-funding-light-gray pb-6 mb-6">
        <DocumentHeader schedulingLink={schedulingLink} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-10">
        <div className="col-span-2">
          <DocumentUploadList 
            documents={documents}
            uploadingId={uploadingId}
            handleUpload={handleUpload}
            onSubmitDocuments={onSubmitDocuments}
          />
          
          <DocumentSubmissionTips />
        </div>
        
        <div className="col-span-1">
          <NeedHelpCard schedulingLink={schedulingLink} />
          <ApplicationStatusCard />
        </div>
      </div>
    </div>
  );
};

export default DocumentsLayout;
