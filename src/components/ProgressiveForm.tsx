import { useForm } from '@/lib/formContext';
import Step1 from './FormSteps/Step1';
import Step2 from './FormSteps/Step2';
import Step3 from './FormSteps/Step3';
import Step4 from './FormSteps/Step4';
import Step5 from './FormSteps/Step5';
import DisqualifiedView from './DisqualifiedView';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ProgressBar = () => {
  const { currentStep, totalSteps } = useForm();
  
  useEffect(() => {
    console.log("Current step in progress bar:", currentStep);
  }, [currentStep]);
  
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
  const { currentStep, isDisqualified, submitForm } = useForm();
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    console.log("Rendering step component:", currentStep, "isDisqualified:", isDisqualified);
  }, [currentStep, isDisqualified]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'ViewStep', { step: currentStep });
    }
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_step', {
        'event_category': 'form',
        'event_label': `Step ${currentStep}`,
        'value': currentStep
      });
    }
  }, [currentStep]);

  if (isDisqualified && currentStep === 5) {
    return <DisqualifiedView />;
  }
  
  return (
    <div className="form-step" ref={contentRef}>
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
      {currentStep === 4 && <Step4 />}
      {currentStep === 5 && <Step5 />}
    </div>
  );
};

const FormWrapper = () => {
  const { formData, currentStep, setCurrentStep } = useForm();
  const location = useLocation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const isPrequalificationPage = location.pathname === '/pre-qualification';
    const hasLoanAmount = Boolean(formData.loanAmount);
    
    console.log("FormWrapper init:", { 
      isPrequalificationPage, 
      hasLoanAmount,
      loanAmount: formData.loanAmount, 
      currentStep 
    });
    
    if (isPrequalificationPage && hasLoanAmount && currentStep === 1) {
      console.log("Setting current step to 2 due to existing loan amount");
      setCurrentStep(2);
      
      if (wrapperRef.current) {
        wrapperRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, formData.loanAmount, setCurrentStep, currentStep]);
  
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 md:p-10 max-w-2xl mx-auto" ref={wrapperRef}>
      <ProgressBar />
      <FormStepContent />
    </div>
  );
};

const ProgressiveForm = () => {
  const formRef = useRef<HTMLElement>(null);
  const { currentStep } = useForm();
  
  useEffect(() => {
    if (formRef.current) {
      window.scrollTo({
        top: formRef.current.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  }, [currentStep]);
  
  return (
    <section ref={formRef} className="py-16 bg-funding-light-gray/30 min-h-screen relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-soft-peach/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-soft-blue/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
            Get Prequalified For Funding
          </h2>
          <p className="text-funding-gray max-w-xl mx-auto">
            Only takes 2 minutes to qualify for $15,000 - $5M in business funding.
          </p>
        </div>
        
        <FormWrapper />
      </div>
    </section>
  );
};

export default ProgressiveForm;
