
import { useForm } from '@/lib/formContext';
import CustomButton from '../ui/CustomButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Step3 = () => {
  const { formData, updateFormData, nextStep, prevStep, isStepValid } = useForm();
  
  const revenueOptions = [
    'Less than $15,000',
    '$15,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000+'
  ];
  
  const timeOptions = [
    'Less than 6 months',
    '6-12 months',
    '1-2 years',
    '2-5 years',
    '5+ years'
  ];
  
  const creditOptions = [
    'Excellent (720+)',
    'Good (680-719)',
    'Fair (620-679)',
    'Poor (580-619)',
    'Bad (below 580)'
  ];
  
  return (
    <div className="w-full max-w-xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
          Business Qualifications
        </h2>
        <p className="text-funding-gray">
          Help us understand your business better
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-funding-dark">
            Monthly Revenue
          </label>
          <div className="grid grid-cols-2 gap-3">
            {revenueOptions.map((option, index) => (
              <button
                key={index}
                type="button"
                className={`p-3 rounded-xl border text-center transition-all duration-200 ${
                  formData.monthlyRevenue === option
                    ? 'border-funding-blue bg-funding-blue/5 text-funding-dark'
                    : 'border-funding-light-gray hover:border-funding-blue/30 text-funding-gray hover:text-funding-dark'
                }`}
                onClick={() => updateFormData({ monthlyRevenue: option })}
              >
                <span className="text-sm font-medium">{option}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-funding-dark">
            Time in Business
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {timeOptions.map((option, index) => (
              <button
                key={index}
                type="button"
                className={`p-3 rounded-xl border text-center transition-all duration-200 ${
                  formData.timeInBusiness === option
                    ? 'border-funding-blue bg-funding-blue/5 text-funding-dark'
                    : 'border-funding-light-gray hover:border-funding-blue/30 text-funding-gray hover:text-funding-dark'
                }`}
                onClick={() => updateFormData({ timeInBusiness: option })}
              >
                <span className="text-sm font-medium">{option}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-funding-dark">
            Credit Score
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {creditOptions.map((option, index) => (
              <button
                key={index}
                type="button"
                className={`p-3 rounded-xl border text-center transition-all duration-200 ${
                  formData.creditScore === option
                    ? 'border-funding-blue bg-funding-blue/5 text-funding-dark'
                    : 'border-funding-light-gray hover:border-funding-blue/30 text-funding-gray hover:text-funding-dark'
                }`}
                onClick={() => updateFormData({ creditScore: option })}
              >
                <span className="text-sm font-medium">{option}</span>
              </button>
            ))}
          </div>
        </div>
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

export default Step3;
