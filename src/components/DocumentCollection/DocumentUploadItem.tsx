
import React from 'react';
import { FileCheck, File, Upload } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

type DocumentUploadItemProps = {
  document: {
    id: string;
    name: string;
    description: string;
    uploaded: boolean;
    required: boolean;
  };
  uploadingId: string | null;
  onUpload: (id: string) => void;
};

const DocumentUploadItem = ({ document, uploadingId, onUpload }: DocumentUploadItemProps) => {
  return (
    <div 
      className={`p-4 rounded-lg border ${document.uploaded ? 'bg-green-50 border-green-100' : 'bg-white border-funding-light-gray'}`}
    >
      <div className="flex items-start">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${document.uploaded ? 'bg-green-100 text-green-600' : 'bg-funding-blue/10 text-funding-blue'}`}>
          {document.uploaded ? <FileCheck className="w-5 h-5" /> : <File className="w-5 h-5" />}
        </div>
        <div className="ml-4 flex-grow">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-funding-dark">
              {document.name} {document.required && <span className="text-red-500">*</span>}
            </h3>
            {document.uploaded ? (
              <span className="text-sm text-green-600 font-medium flex items-center">
                <FileCheck className="w-4 h-4 mr-1" />
                Uploaded
              </span>
            ) : (
              <CustomButton
                size="sm"
                onClick={() => onUpload(document.id)}
                disabled={uploadingId === document.id}
                isLoading={uploadingId === document.id}
                className="py-1 px-3 h-auto"
              >
                <Upload className="w-4 h-4 mr-1" />
                Upload
              </CustomButton>
            )}
          </div>
          <p className="text-sm text-funding-gray mt-1">{document.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadItem;
