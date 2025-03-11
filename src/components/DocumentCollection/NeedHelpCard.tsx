
import React from 'react';
import { Phone, Clock, CalendarClock } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

type NeedHelpCardProps = {
  schedulingLink: string;
};

const NeedHelpCard = ({ schedulingLink }: NeedHelpCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mb-6">
      <h2 className="text-xl font-bold text-funding-dark mb-4">Need Help?</h2>
      <p className="text-funding-gray mb-6">
        Our funding specialists are available to assist you with document collection and answer any questions.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <Phone className="w-5 h-5 text-funding-blue mr-3 mt-0.5" />
          <div>
            <p className="font-medium text-funding-dark">Call Us</p>
            <p className="text-sm text-funding-gray">
              <a href="tel:+15735333894" className="hover:text-funding-blue">1-573-533-3894</a>
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="w-5 h-5 text-funding-blue mr-3 mt-0.5" />
          <div>
            <p className="font-medium text-funding-dark">Business Hours</p>
            <p className="text-sm text-funding-gray">Mon-Fri: 9am - 6pm EST</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-funding-light-gray">
        <p className="font-medium text-center text-funding-dark mb-4">
          Schedule a Document Review Call
        </p>
        <CustomButton 
          href={schedulingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-full"
          size="md"
        >
          <CalendarClock className="mr-2 w-4 h-4" />
          Schedule Call
        </CustomButton>
      </div>
    </div>
  );
};

export default NeedHelpCard;
