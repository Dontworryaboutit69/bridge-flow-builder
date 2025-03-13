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

export const ApplicationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationData, setApplicationData] = useState<ApplicationData>(initialApplicationData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [zapierWebhookUrl, setZapierWebhookUrl] = useState<string>(
    localStorage.getItem('application_webhook') || DEFAULT_WEBHOOK_URL
  );
  const totalSteps = 4;

  useEffect(() => {
    if (!zapierWebhookUrl) {
      setZapierWebhookUrl(DEFAULT_WEBHOOK_URL);
      localStorage.setItem('application_webhook', DEFAULT_WEBHOOK_URL);
    }
  }, [zapierWebhookUrl]);

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
