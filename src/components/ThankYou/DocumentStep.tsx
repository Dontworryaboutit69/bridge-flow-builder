
import React from 'react';
import { ArrowRight, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type DocumentStepProps = {
  documentsSubmitted: boolean;
};

const DocumentStep = ({ documentsSubmitted }: DocumentStepProps) => {
  if (documentsSubmitted) {
    return (
      <div className="flex items-start">
        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 mr-5">
          <CheckCircle className="w-5 h-5" />
        </div>
        <div className="text-left pt-1">
          <h4 className="font-medium text-lg text-funding-dark mb-1">Document Collection</h4>
          <p className="text-funding-gray">
            Your documents have been successfully submitted and are being reviewed by our team.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-xl mr-5">
        1
      </div>
      <div className="text-left pt-1 flex-1">
        <h4 className="font-medium text-lg text-funding-dark mb-1">Document Collection</h4>
        <p className="text-funding-gray mb-3">
          We need a few documents to verify your business information and process your application quickly.
        </p>
        <Link to="/documents">
          <Button 
            className="group bg-funding-blue hover:bg-funding-blue/90 text-white"
            size="default"
          >
            <FileText className="mr-2 w-5 h-5" />
            Upload Documents Now
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DocumentStep;
