
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
  const handleBack = () => {
    console.log("Back button clicked");
    onBack();
  };
  
  const handleGeneratePdf = () => {
    console.log("Generate PDF button clicked");
    onGeneratePdf();
  };

  return (
    <div className="flex justify-between items-center">
      <CustomButton 
        onClick={handleBack} 
        variant="outline" 
        className="flex items-center"
        type="button"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Applications
      </CustomButton>
      
      <CustomButton 
        onClick={handleGeneratePdf}
        disabled={isGeneratingPdf}
        className="flex items-center"
        type="button"
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
