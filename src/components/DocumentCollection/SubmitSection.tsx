
import React from 'react';
import { ArrowRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { Document } from '@/types/documents';

type SubmitSectionProps = {
  documents: Document[];
  totalUploaded: number;
  totalRequired: number;
  allRequiredUploaded: boolean;
  onSubmit: () => void;
};

const SubmitSection = ({ 
  documents, 
  totalUploaded, 
  totalRequired, 
  allRequiredUploaded,
  onSubmit
}: SubmitSectionProps) => {
  return (
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
          onClick={onSubmit}
        >
          Submit Documents
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </CustomButton>
      </div>
    </div>
  );
};

export default SubmitSection;
