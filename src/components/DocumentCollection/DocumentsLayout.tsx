
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
  handleUpload: (id: string) => void;
  schedulingLink: string;
};

const DocumentsLayout = ({ documents, uploadingId, handleUpload, schedulingLink }: DocumentsLayoutProps) => {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
      <DocumentHeader schedulingLink={schedulingLink} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-10">
        <div className="col-span-2">
          <DocumentUploadList 
            documents={documents}
            uploadingId={uploadingId}
            handleUpload={handleUpload}
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
