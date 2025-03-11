
import { ApplicationProvider } from '@/lib/applicationContext';
import { useApplication } from '@/lib/applicationContext';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PersonalInfo from '@/components/ApplicationSteps/PersonalInfo';
import BusinessInfo from '@/components/ApplicationSteps/BusinessInfo';
import FinancialInfo from '@/components/ApplicationSteps/FinancialInfo';
import ReviewSubmit from '@/components/ApplicationSteps/ReviewSubmit';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useForm } from '@/lib/formContext';
import ZapierSettings from '@/components/admin/ZapierSettings';
import { useState, useEffect } from 'react';

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

const ApplicationContent = () => {
  const { currentStep } = useApplication();
  
  return (
    <TransitionGroup>
      <CSSTransition
        key={currentStep}
        timeout={300}
        classNames="form-step"
      >
        <div className="form-step">
          {currentStep === 1 && <PersonalInfo />}
          {currentStep === 2 && <BusinessInfo />}
          {currentStep === 3 && <FinancialInfo />}
          {currentStep === 4 && <ReviewSubmit />}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const ApplicationWrapper = () => {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 md:p-10 mb-16">
      <ProgressBar />
      <ApplicationContent />
    </div>
  );
};

// Simplified footer for the application page without clickable links
const SimplifiedFooter = () => {
  return (
    <footer className="bg-funding-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/bc9b5dea-776a-46a3-b886-59da9c741e0f.png" 
              alt="Growth Path Advisory Logo" 
              className="h-8" 
            />
          </div>
          
          <div>
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:+15735333894" className="text-white hover:text-gray-300">1-573-533-3894</a>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Growth Path Advisory. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const Application = () => {
  // Access contexts outside of provider to avoid nesting issues
  const formContext = useForm();
  
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Simple admin check using "?admin=true" in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsAdmin(params.get('admin') === 'true');
  }, []);
  
  return (
    <ApplicationProvider>
      {(applicationContext) => {
        const { zapierWebhookUrl: applicationWebhookUrl, setZapierWebhookUrl: setApplicationWebhookUrl } = useApplication();
        
        return (
          <div className="min-h-screen flex flex-col">
            <Navbar />
            
            <main className="flex-grow pt-32 md:pt-40 pb-8 md:pb-16 bg-funding-light-gray/30 relative">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-soft-peach/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-soft-blue/20 rounded-full blur-3xl"></div>
                <div className="dot-pattern"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
                {isAdmin && (
                  <div className="mb-4 flex justify-end">
                    <ZapierSettings 
                      prequalWebhookUrl={formContext.zapierWebhookUrl}
                      applicationWebhookUrl={applicationWebhookUrl}
                      setPrequalWebhookUrl={formContext.setZapierWebhookUrl}
                      setApplicationWebhookUrl={setApplicationWebhookUrl}
                    />
                  </div>
                )}
                
                <div className="text-center mb-10">
                  <h1 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
                    Business Funding Application
                  </h1>
                  <p className="text-funding-gray max-w-2xl mx-auto">
                    Complete this application to finalize your funding request with Growth Path Advisory.
                  </p>
                </div>
                
                <ApplicationWrapper />
              </div>
            </main>
            
            <SimplifiedFooter />
          </div>
        );
      }}
    </ApplicationProvider>
  );
};

export default Application;
