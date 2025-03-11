
import React from 'react';
import { ArrowRight, CalendarClock } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ReviewStepProps = {
  documentsSubmitted: boolean;
  onSchedule: () => void;
};

const ReviewStep = ({ documentsSubmitted, onSchedule }: ReviewStepProps) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-xl mr-5">
        {documentsSubmitted ? '1' : '2'}
      </div>
      <div className="text-left pt-1 flex-1">
        <h4 className="font-medium text-lg text-funding-dark mb-1">Application Review</h4>
        <p className="text-funding-gray mb-3">
          A funding specialist will review your {documentsSubmitted ? 'documents' : 'application and documents'} within 24-48 hours.
        </p>
        <div>
          <Button 
            variant="outline"
            size="default"
            onClick={onSchedule}
            className="group flex items-center border-funding-blue/30 text-funding-blue hover:bg-funding-blue/5"
          >
            <CalendarClock className="mr-2 w-4 h-4" />
            Schedule a Consultation
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
