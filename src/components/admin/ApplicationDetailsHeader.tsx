
import React from 'react';
import CustomButton from "@/components/ui/CustomButton";
import { ArrowLeft, DownloadIcon, Loader2 } from 'lucide-react';
import { formatDate } from '@/lib/documentUtils';

type ApplicationDetailsHeaderProps = {
  applicationId: string;
  submissionDate: string;
  onBack: () => void;
  onGeneratePdf: () => void;
  isGeneratingPdf: boolean;
};

const ApplicationDetailsHeader: React.FC<ApplicationDetailsHeaderProps> = ({ 
  applicationId, 
  submissionDate, 
  onBack, 
  onGeneratePdf, 
  isGeneratingPdf 
}) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center border-b border-gray-200">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Application Details
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Application ID: {applicationId}
          </p>
        </div>
        <div className="text-sm text-gray-500">
          <p>Submitted on: {formatDate(submissionDate)}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailsHeader;
