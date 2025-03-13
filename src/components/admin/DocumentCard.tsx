
import React from 'react';
import { FileText } from 'lucide-react';
import { Document } from '@/lib/documentService';
import { formatDate, formatDocumentType } from '@/lib/documentUtils';

type DocumentCardProps = {
  document: Document;
};

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm flex items-start">
      <div className="bg-funding-blue/10 p-2 rounded-md mr-4">
        <FileText className="h-6 w-6 text-funding-blue" />
      </div>
      <div className="flex-1">
        <h5 className="text-sm font-medium text-gray-900">{document.document_name}</h5>
        <p className="text-xs text-gray-500 mt-1">
          Type: {formatDocumentType(document.document_type)}
        </p>
        <p className="text-xs text-gray-500">
          Uploaded: {formatDate(document.created_at)}
        </p>
      </div>
    </div>
  );
};

export default DocumentCard;
