
import { FormProvider } from '@/lib/formContext';
import { useForm } from '@/lib/formContext';
import Step1 from './FormSteps/Step1';
import Step2 from './FormSteps/Step2';
import Step3 from './FormSteps/Step3';
import Step4 from './FormSteps/Step4';
import Step5 from './FormSteps/Step5';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProgressBar = () => {
  const { currentStep, totalSteps } = useForm();
  
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div 
            key={i}
            className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium
              ${i + 1 <= currentStep 
                ? 'bg-funding-blue text-white' 
                : 'bg-funding-light-gray text-funding-gray'
              }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="w-full bg-funding-light-gray h-1 rounded-full">
        <div 
          className="bg-funding-blue h-1 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

const FormStepContent = () => {
  const { currentStep } = useForm();
  
  return (
    <TransitionGroup>
      <CSSTransition
        key={currentStep}
        timeout={300}
        classNames="form-step"
      >
        <div className="form-step">
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
          {currentStep === 4 && <Step4 />}
          {currentStep === 5 && <Step5 />}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const FormWrapper = () => {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 md:p-10 max-w-2xl mx-auto">
      <ProgressBar />
      <FormStepContent />
    </div>
  );
};

const ProgressiveForm = () => {
  return (
    <FormProvider>
      <section id="apply-now" className="py-16 bg-funding-light-gray/30">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
              Get Funding in 3 Easy Steps
            </h2>
            <p className="text-funding-gray max-w-xl mx-auto">
              Complete this simple application to see if you qualify for business funding. It takes less than 2 minutes.
            </p>
          </div>
          
          <FormWrapper />
        </div>
      </section>
    </FormProvider>
  );
};

export default ProgressiveForm;
