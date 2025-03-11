
import React, { useState, useRef } from 'react';
import { FileCheck, File, Upload, Loader2, X } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { toast } from '@/hooks/use-toast';
import { Document } from '@/types/documents';

type DocumentUploadItemProps = {
  document: Document;
  uploadingId: string | null;
  onUpload: (id: string, files: FileList) => void;
};

const DocumentUploadItem = ({ document, uploadingId, onUpload }: DocumentUploadItemProps) => {
  const [hoveringOnDrop, setHoveringOnDrop] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload(document.id, e.target.files);
    }
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setHoveringOnDrop(true);
  };

  const handleDragLeave = () => {
    setHoveringOnDrop(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setHoveringOnDrop(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onUpload(document.id, e.dataTransfer.files);
    }
  };

  return (
    <div 
      className={`p-4 rounded-lg border ${document.uploaded ? 'bg-green-50 border-green-100' : hoveringOnDrop ? 'bg-funding-blue/5 border-funding-blue border-dashed' : 'bg-white border-funding-light-gray'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
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
              <div className="flex space-x-2">
                <span className="text-sm text-green-600 font-medium flex items-center">
                  <FileCheck className="w-4 h-4 mr-1" /> Uploaded
                </span>
                <button 
                  onClick={() => document.id && onUpload(document.id, new DataTransfer().files)}
                  className="text-red-500 hover:text-red-700 transition-colors p-1 rounded-full hover:bg-red-50"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <CustomButton
                size="sm"
                onClick={openFileDialog}
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
          
          {!document.uploaded && (
            <div className="mt-3">
              <p className="text-xs text-funding-gray italic">
                {document.id === 'bank-statements' ? 'You can upload multiple files' : 'Drag and drop file here or click to browse'}
              </p>
            </div>
          )}
        </div>
      </div>
      
      <input 
        type="file" 
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileSelect}
        multiple={document.id === 'bank-statements'}
        accept=".pdf,.jpg,.jpeg,.png"
      />
    </div>
  );
};

export default DocumentUploadItem;
