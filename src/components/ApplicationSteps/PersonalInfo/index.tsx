
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
    setFormSubmitted(true);
    toast({
      title: "Information Saved",
      description: "Your personal information has been successfully saved.",
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
      
      {!formSubmitted && (
        <div className="mt-10 flex justify-end">
          <CustomButton 
            onClick={nextStep} 
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
