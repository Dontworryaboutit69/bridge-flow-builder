
import { useApplication } from '@/lib/applicationContext';
import CustomButton from '../../ui/CustomButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CrmEmbed from '@/components/CrmEmbed';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const FinancialInfo = () => {
  const { nextStep, prevStep } = useApplication();
  const navigate = useNavigate();
  
  const handleFinancialFormSubmit = () => {
    toast({
      title: "Financial information submitted",
      description: "Your financial information has been saved successfully.",
    });
    // Automatically go to the next step
    nextStep();
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
          Financial Information
        </h2>
        <p className="text-funding-gray">
          Help us understand your financial needs
        </p>
      </div>
      
      <div className="glass-card p-6 md:p-8 bg-white">
        <CrmEmbed 
          formId="8IL41omixTKGjsWh61T9" 
          height="600px" 
          onFormSubmit={handleFinancialFormSubmit}
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
        <CustomButton 
          onClick={nextStep} 
          className="group"
        >
          Continue to Review & Submit
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </CustomButton>
      </div>
    </div>
  );
};

export default FinancialInfo;
