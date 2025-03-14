
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  ApplicationData, 
  ApplicationContextType, 
  initialApplicationData 
} from './applicationTypes';
import { validateApplicationStep } from './applicationValidation';
import { submitApplicationData } from './applicationService';

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export const DEFAULT_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/15135493/2lh1woc/";

interface ApplicationProviderProps {
  children: React.ReactNode;
  initialStep?: string | null;
}

export const ApplicationProvider: React.FC<ApplicationProviderProps> = ({ 
  children, 
  initialStep = null 
}) => {
  // Parse the initial step or default to 1
  const parsedInitialStep = initialStep ? parseInt(initialStep, 10) : 1;
  const validInitialStep = !isNaN(parsedInitialStep) && parsedInitialStep > 0 && parsedInitialStep <= 4 
    ? parsedInitialStep 
    : 1;

  const [currentStep, setCurrentStep] = useState(validInitialStep);
  const [applicationData, setApplicationData] = useState<ApplicationData>(initialApplicationData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [zapierWebhookUrl, setZapierWebhookUrl] = useState<string>(
    localStorage.getItem('application_webhook') || DEFAULT_WEBHOOK_URL
  );
  
  // Form IDs for each step
  const formIds = {
    personalInfo: "8IL41omixTKGjsWh61T9", // Replace with actual form IDs
    businessInfo: "dHoTF5Jdw3bUaLUJB2vn", // Replace with actual form IDs
    financialInfo: "yEPrgj0AWmA0dJrAoLKa", // Replace with actual form IDs
    documents: "nwNTfdAx1lyFn4mAQVkD"      // Replace with actual form IDs
  };
  
  const totalSteps = 4;

  useEffect(() => {
    if (!zapierWebhookUrl) {
      setZapierWebhookUrl(DEFAULT_WEBHOOK_URL);
      localStorage.setItem('application_webhook', DEFAULT_WEBHOOK_URL);
    }
  }, [zapierWebhookUrl]);

  // Save the current step to localStorage so we can recover it
  useEffect(() => {
    localStorage.setItem('application_current_step', currentStep.toString());
  }, [currentStep]);

  const updateApplicationData = (data: Partial<ApplicationData>) => {
    setApplicationData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const isStepValid = () => {
    return validateApplicationStep(currentStep, applicationData);
  };

  const submitApplication = async () => {
    setIsSubmitting(true);
    try {
      const webhookToUse = zapierWebhookUrl || DEFAULT_WEBHOOK_URL;
      console.log("Using webhook URL for submission:", webhookToUse);
      
      const success = await submitApplicationData(applicationData, webhookToUse);
      if (success) {
        setSubmitSuccess(true);
      }
    } catch (error) {
      console.error('Error in submit application flow:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate direct links to specific steps
  const getStepLink = (step: number): string => {
    if (step < 1 || step > totalSteps) return '';
    return `/application?step=${step}`;
  };

  return (
    <ApplicationContext.Provider
      value={{
        currentStep,
        applicationData,
        setCurrentStep,
        updateApplicationData,
        nextStep,
        prevStep,
        isStepValid,
        totalSteps,
        submitApplication,
        isSubmitting,
        submitSuccess,
        zapierWebhookUrl,
        setZapierWebhookUrl,
        getStepLink,
        formIds,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplication = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplication must be used within an ApplicationProvider');
  }
  return context;
};
