
import { useForm } from '@/lib/formContext';
import CustomButton from '../ui/CustomButton';
import { ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Step1 = () => {
  const { formData, updateFormData, nextStep, isStepValid } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  
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
  
  const handleContinue = () => {
    if (location.pathname === '/') {
      // When on homepage, navigate to pre-qualification with the amount saved in context
      // This ensures the form data persists across the navigation
      navigate('/pre-qualification', { 
        state: { fromHomepage: true, loanAmount: formData.loanAmount },
        replace: false
      });
      
      // Scroll to top after navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // When already on pre-qualification page, just go to next step
      nextStep();
    }
  };
  
  // If we navigate from homepage with a loan amount, make sure it stays selected
  useEffect(() => {
    const loanAmountFromState = location?.state?.loanAmount;
    if (loanAmountFromState && !formData.loanAmount) {
      console.log("Setting loan amount from navigation state:", loanAmountFromState);
      updateFormData({ loanAmount: loanAmountFromState });
    }
  }, [location.state, formData.loanAmount, updateFormData]);
  
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
      
      <div className="mt-10 flex justify-center w-full">
        <CustomButton 
          onClick={handleContinue} 
          disabled={!isStepValid()}
          className="group mx-auto"
          fullWidth={false}
        >
          Continue
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </CustomButton>
      </div>
    </div>
  );
};

export default Step1;
