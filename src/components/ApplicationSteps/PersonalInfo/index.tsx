
import { useApplication } from '@/lib/applicationContext';
import CustomButton from '../../ui/CustomButton';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from '@/lib/formContext';
import CrmEmbed from '../../CrmEmbed';
import { toast } from '@/components/ui/use-toast';

interface PersonalInfoProps {
  onFormSubmit?: () => void;
}

const PersonalInfo = ({ onFormSubmit }: PersonalInfoProps) => {
  const { nextStep } = useApplication();
  const { formData } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleFormSubmit = () => {
    console.log("PersonalInfo: Form submitted handler triggered");
    if (formSubmitted) {
      console.log("Form already marked as submitted, ignoring duplicate event");
      return;
    }
    
    setFormSubmitted(true);
    toast({
      title: "Information Saved",
      description: "Your personal information has been successfully saved.",
      variant: "default",
      duration: 3000,
    });
    
    // Call the parent's onFormSubmit if provided
    if (onFormSubmit) {
      console.log("Calling parent onFormSubmit");
      onFormSubmit();
    } else {
      // Automatically proceed to next step after form is submitted
      console.log("Auto-advancing to next step in 1 second");
      setTimeout(() => {
        nextStep();
      }, 1000);
    }
  };
  
  // Add a manual continue button as fallback
  const handleManualContinue = () => {
    if (formSubmitted) {
      nextStep();
    } else {
      toast({
        title: "Please complete the form",
        description: "Please fill out and submit the form before continuing.",
        variant: "destructive",
      });
    }
  };
  
  // Reset form submitted state when component unmounts
  useEffect(() => {
    return () => {
      setFormSubmitted(false);
    };
  }, []);
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
          Personal Information
        </h2>
        <p className="text-funding-gray">
          Please provide your contact details
        </p>
      </div>
      
      <div className="bg-white rounded-lg overflow-hidden">
        <CrmEmbed 
          height="1000px" 
          onFormSubmit={handleFormSubmit}
        />
      </div>
      
      {/* Provide a fallback button in case automatic submission detection fails */}
      {!formSubmitted ? (
        <div className="mt-6 text-center text-sm text-funding-gray">
          <p>Please complete and submit the form above</p>
        </div>
      ) : (
        <div className="mt-6 flex justify-center">
          <CustomButton
            onClick={handleManualContinue}
            className="group"
          >
            Continue to Business Information
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
