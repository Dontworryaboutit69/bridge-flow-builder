
import React, { createContext, useContext, useState } from 'react';
import { toast } from "sonner";
import { FormData, FormContextType, initialFormData } from './formTypes';
import { isStepValid as validateStep, checkQualification as validateQualification, validateEmail, validatePhone } from './formValidation';

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isDisqualified, setIsDisqualified] = useState(false);
  const [zapierWebhookUrl, setZapierWebhookUrl] = useState<string>(
    localStorage.getItem('prequalify_zapier_webhook') || ''
  );
  const totalSteps = 5;

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    
    if (data.monthlyRevenue) {
      setTimeout(() => checkQualification(), 0);
    }
    
    if (data.timeInBusiness) {
      setTimeout(() => checkQualification(), 0);
    }
  };

  const checkQualification = () => {
    setIsDisqualified(validateQualification(formData));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    return validateStep(currentStep, formData);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setSubmitSuccess(false);
    setIsDisqualified(false);
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      console.log('Pre-qualification form submitted:', formData);
      
      // Save webhook URL to localStorage if provided
      if (zapierWebhookUrl) {
        localStorage.setItem('prequalify_zapier_webhook', zapierWebhookUrl);
      }
      
      // If we have a webhook URL, send the data to Zapier
      if (zapierWebhookUrl) {
        try {
          await fetch(zapierWebhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            mode: 'no-cors', // Handle CORS issues
            body: JSON.stringify({
              form_type: 'pre_qualification',
              ...formData,
              submission_date: new Date().toISOString(),
              source_url: window.location.href,
            }),
          });
          console.log('Data sent to Zapier webhook successfully');
        } catch (error) {
          console.error('Error sending data to Zapier:', error);
          toast("Error connecting to Zapier, but qualification saved locally");
        }
      }
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting pre-qualification form:', error);
      toast("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
