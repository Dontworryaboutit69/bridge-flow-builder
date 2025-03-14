
import { useApplication } from '@/lib/applicationContext';

const ProgressBar = () => {
  const { currentStep, totalSteps } = useApplication();
  
  const steps = [
    "Personal Information",
    "Business Information",
    "Financial Information",
    "Review & Submit"
  ];
  
  return (
    <div className="w-full max-w-3xl mx-auto mb-10">
      <div className="hidden md:flex justify-between mb-2">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center w-1/4 ${index < currentStep ? 'text-funding-blue' : 'text-funding-gray'}`}
          >
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium mb-2
              ${index + 1 <= currentStep 
                ? 'bg-funding-blue text-white' 
                : 'bg-funding-light-gray text-funding-gray'
              }`}
            >
              {index + 1}
            </div>
            <span className="text-sm text-center">{step}</span>
          </div>
        ))}
      </div>
      
      <div className="md:hidden mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm font-medium">{steps[currentStep - 1]}</span>
        </div>
      </div>
      
      <div className="w-full bg-funding-light-gray h-2 rounded-full overflow-hidden">
        <div 
          className="bg-funding-blue h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
