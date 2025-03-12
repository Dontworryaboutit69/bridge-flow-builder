
import React, { createContext, useContext, useState, useCallback } from 'react';
import { FormData, FormContextType, initialFormData } from './formTypes';
import { useFormSubmission, useFormNavigation } from './formHooks';
import { checkQualification as validateQualification } from './formValidation';

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isDisqualified, setIsDisqualified] = useState(false);
  const [zapierWebhookUrl, setZapierWebhookUrl] = useState<string>(
    localStorage.getItem('prequalify_webhook') || ''
  );
  const totalSteps = 5;

  const updateFormData = useCallback((data: Partial<FormData>) => {
    console.log("Updating form data:", data);
    setFormData(prev => ({ ...prev, ...data }));
  }, []);

  const checkQualification = useCallback(() => {
    const disqualified = validateQualification(formData);
    console.log("Setting disqualification status:", disqualified);
    setIsDisqualified(disqualified);
    return disqualified;
  }, [formData]);

  const resetForm = useCallback(() => {
    console.log("Resetting form");
    setFormData(initialFormData);
    setCurrentStep(1);
    setSubmitSuccess(false);
    setIsDisqualified(false);
  }, []);

  // Use our custom hooks
  const { nextStep, prevStep, isStepValid } = useFormNavigation(
    currentStep,
    totalSteps,
    formData,
    setCurrentStep,
    checkQualification
  );

  const { submitForm } = useFormSubmission(
    formData,
    zapierWebhookUrl,
    checkQualification,
    setIsSubmitting,
    setSubmitSuccess
  );

  return (
    <FormContext.Provider
      value={{
        currentStep,
        formData,
        setCurrentStep,
        updateFormData,
        nextStep,
        prevStep,
        isStepValid,
        totalSteps,
        resetForm,
        submitForm,
        isSubmitting,
        submitSuccess,
        isDisqualified,
        checkQualification,
        zapierWebhookUrl,
        setZapierWebhookUrl,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
