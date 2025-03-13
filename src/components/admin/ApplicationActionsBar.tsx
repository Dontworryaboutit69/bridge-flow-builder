
import React from 'react';
import CustomButton from "@/components/ui/CustomButton";
import { ArrowLeft, DownloadIcon, Loader2 } from 'lucide-react';

type ApplicationActionsBarProps = {
  onBack: () => void;
  onGeneratePdf: () => void;
  isGeneratingPdf: boolean;
};

const ApplicationActionsBar: React.FC<ApplicationActionsBarProps> = ({ 
  onBack, 
  onGeneratePdf, 
  isGeneratingPdf 
}) => {
  return (
    <div className="flex justify-between items-center">
      <CustomButton onClick={onBack} variant="outline" className="flex items-center">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Applications
      </CustomButton>
      
      <CustomButton 
        onClick={onGeneratePdf} 
        disabled={isGeneratingPdf}
        className="flex items-center"
      >
        {isGeneratingPdf ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <DownloadIcon className="mr-2 h-4 w-4" />
        )}
        {isGeneratingPdf ? 'Generating PDF...' : 'Download as PDF'}
      </CustomButton>
    </div>
  );
};

export default ApplicationActionsBar;
