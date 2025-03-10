
import { useForm } from '@/lib/formContext';
import CustomButton from '../ui/CustomButton';
import { ArrowRight } from 'lucide-react';

const Step1 = () => {
  const { formData, updateFormData, nextStep, isStepValid } = useForm();
  
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {loanAmounts.map((amount, index) => (
          <button
            key={index}
            className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
              formData.loanAmount === amount
                ? 'border-funding-blue bg-funding-blue/5 text-funding-dark'
                : 'border-funding-light-gray hover:border-funding-blue/30 text-funding-gray hover:text-funding-dark'
            }`}
            onClick={() => handleSelect(amount)}
          >
            <span className="font-medium">{amount}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-10 flex justify-end">
        <CustomButton 
          onClick={nextStep} 
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
