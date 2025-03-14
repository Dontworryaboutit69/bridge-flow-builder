
import { useApplication } from '@/lib/applicationContext';
import CustomButton from '../../ui/CustomButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from '@/lib/formContext';
import CrmEmbed from '../../CrmEmbed';
import { toast } from '@/components/ui/use-toast';

interface BusinessInfoProps {
  onFormSubmit?: () => void;
}

const BusinessInfo = ({ onFormSubmit }: BusinessInfoProps) => {
  const { nextStep, prevStep } = useApplication();
  const { formData } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Autopopulate from pre-qualification data if available
  useEffect(() => {
    // Only populate if the business fields are empty
    if (formData.businessName) {
      console.log("Business data available for pre-population:", formData);
      // Note: The CRM form handles its own data, so we don't need to update applicationData here
    }
  }, [formData]);
  
  const handleFormSubmit = () => {
    setFormSubmitted(true);
    toast({
      title: "Business Information Saved",
      description: "Your business information has been successfully saved.",
      variant: "default",
      duration: 3000,
    });
    
    // Call the parent's onFormSubmit if provided
    if (onFormSubmit) {
      onFormSubmit();
    } else {
      // Automatically proceed to next step after form is submitted
      setTimeout(() => {
        nextStep();
      }, 1000);
    }
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
          Business Information
        </h2>
        <p className="text-funding-gray">
          Tell us about your business
        </p>
      </div>
      
      <div className="bg-white rounded-lg overflow-hidden">
        <CrmEmbed 
          formId="Zpokq763avf7gpY0mHEd"
          height="1200px" 
          onFormSubmit={handleFormSubmit}
        />
      </div>
      
      <div className="mt-10 flex justify-between">
        <CustomButton 
          variant="outline" 
          onClick={prevStep}
          className="group"
        >
          <ArrowLeft className="mr-1 w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back
        </CustomButton>
        
        {/* Only show next button if the form hasn't been submitted yet */}
        {!formSubmitted && (
          <CustomButton 
            onClick={nextStep} 
            className="group"
          >
            Continue to Financial Information
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </CustomButton>
        )}
      </div>
    </div>
  );
};

export default BusinessInfo;
