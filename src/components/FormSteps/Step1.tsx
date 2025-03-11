
import { useForm } from '@/lib/formContext';
import CustomButton from '../ui/CustomButton';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Step1 = () => {
  const { formData, updateFormData, nextStep, isStepValid, setCurrentStep } = useForm();
  const navigate = useNavigate();
  
  const loanAmounts = [
    '$5,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000+'
  ];
  
  const handleSelect = (amount: string) => {
    updateFormData({ loanAmount: amount });
  };
  
  // Check if we're on pre-qualification page and should skip to step 2
  useEffect(() => {
    if (window.location.pathname === '/pre-qualification' && formData.loanAmount) {
      // If we're on pre-qualification page and have a loan amount, skip to step 2
      setCurrentStep(2);
    }
  }, [window.location.pathname, formData.loanAmount, setCurrentStep]);
  
  const handleContinue = () => {
    if (window.location.pathname === '/') {
      // If on landing page, navigate to pre-qualification page
      // The step will be automatically advanced to step 2 by the useEffect
      navigate('/pre-qualification');
    } else {
      // If already on pre-qualification page, just move to next step
      nextStep();
    }
  };
  
  return (
    <div className="w-full max-w-xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
          How much funding do you need?
        </h2>
        <p className="text-funding-gray">
          Select an amount that would help your business grow
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {loanAmounts.map((amount, index) => (
          <button
            key={index}
            className={`p-3 rounded-lg transition-all duration-200 text-left relative ${
              formData.loanAmount === amount
                ? 'border-2 border-funding-blue bg-funding-blue/5 text-funding-dark'
                : 'border border-funding-light-gray hover:border-funding-blue/30 text-funding-gray hover:text-funding-dark'
            }`}
            onClick={() => handleSelect(amount)}
          >
            {formData.loanAmount === amount && (
              <div className="absolute inset-0 bg-gradient-to-br from-funding-blue/5 to-transparent rounded-lg pointer-events-none"></div>
            )}
            <span className="font-medium text-sm">{amount}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-10 flex justify-end">
        <CustomButton 
          onClick={handleContinue} 
          disabled={!isStepValid()}
          className="group"
        >
          Continue
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </CustomButton>
      </div>
    </div>
  );
};

export default Step1;
