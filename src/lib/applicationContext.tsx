
import React, { createContext, useContext, useState } from 'react';
import { 
  ApplicationData, 
  ApplicationContextType, 
  initialApplicationData 
} from './applicationTypes';
import { validateApplicationStep } from './applicationValidation';
import { submitApplicationData } from './applicationService';

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export const ApplicationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationData, setApplicationData] = useState<ApplicationData>(initialApplicationData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [zapierWebhookUrl, setZapierWebhookUrl] = useState<string>(
    localStorage.getItem('application_zapier_webhook') || ''
  );
  const totalSteps = 4;

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
      const success = await submitApplicationData(applicationData, zapierWebhookUrl);
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
