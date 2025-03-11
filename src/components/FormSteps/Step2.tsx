
import { useForm } from '@/lib/formContext';
import CustomButton from '../ui/CustomButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const Step2 = () => {
  const { formData, updateFormData, nextStep, prevStep, isStepValid } = useForm();
  
  const industries = [
    'Retail',
    'Food & Restaurant',
    'Professional Services',
    'Healthcare',
    'Construction',
    'Manufacturing',
    'Technology',
    'Transportation',
    'Real Estate',
    'Other'
  ];
  
  const capitalTimeframes = [
    'ASAP (Within days)',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    'No rush (3+ months)'
  ];
  
  const handleIndustrySelect = (industry: string) => {
    updateFormData({ industry });
  };
  
  const handleTimeframeSelect = (capitalTimeframe: string) => {
    updateFormData({ capitalTimeframe });
  };
  
  // Add debugging to verify if isStepValid() is working correctly
  useEffect(() => {
    console.log("Step 2 validation state:", {
      businessName: !!formData.businessName,
      industry: !!formData.industry,
      capitalTimeframe: !!formData.capitalTimeframe,
      isValid: isStepValid()
    });
  }, [formData.businessName, formData.industry, formData.capitalTimeframe, isStepValid]);

  // Handle next step click
  const handleNextStep = () => {
    if (isStepValid()) {
      console.log("Moving to next step from Step 2");
      nextStep();
    } else {
      console.log("Cannot move to next step - validation failed");
    }
  };
  
  return (
    <div className="w-full max-w-xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
          Tell us about your business
        </h2>
        <p className="text-funding-gray">
          This helps us find the right funding option for you
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="businessName" className="block text-sm font-medium text-funding-dark">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            className="w-full px-4 py-3 rounded-xl border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
            placeholder="Enter your business name"
            value={formData.businessName || ''}
            onChange={(e) => updateFormData({ businessName: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-funding-dark">
            Industry
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {industries.map((industry, index) => (
              <button
                key={index}
                type="button"
                className={`p-3 rounded-xl border text-center transition-all duration-200 ${
                  formData.industry === industry
                    ? 'border-funding-blue bg-funding-blue/5 text-funding-dark'
                    : 'border-funding-light-gray hover:border-funding-blue/30 text-funding-gray hover:text-funding-dark'
                }`}
                onClick={() => handleIndustrySelect(industry)}
              >
                <span className="text-sm font-medium">{industry}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2 mt-8">
          <label className="block text-sm font-medium text-funding-dark">
            How quickly do you need capital?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {capitalTimeframes.map((timeframe, index) => (
              <button
                key={index}
                type="button"
                className={`p-3 rounded-xl border text-center transition-all duration-200 ${
                  formData.capitalTimeframe === timeframe
                    ? 'border-funding-blue bg-funding-blue/5 text-funding-dark'
                    : 'border-funding-light-gray hover:border-funding-blue/30 text-funding-gray hover:text-funding-dark'
                }`}
                onClick={() => handleTimeframeSelect(timeframe)}
              >
                <span className="text-sm font-medium">{timeframe}</span>
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
          onClick={handleNextStep} 
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

export default Step2;
