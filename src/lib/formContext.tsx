
import React, { createContext, useContext, useState } from 'react';
import { toast } from "sonner";

type FormData = {
  loanAmount: string;
  businessName: string;
  monthlyRevenue: string;
  timeInBusiness: string;
  creditScore: string;
  industry: string;
  capitalTimeframe: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type FormContextType = {
  currentStep: number;
  formData: FormData;
  setCurrentStep: (step: number) => void;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  isStepValid: () => boolean;
  totalSteps: number;
  resetForm: () => void;
  submitForm: () => Promise<void>;
  isSubmitting: boolean;
  submitSuccess: boolean;
  isDisqualified: boolean;
  checkQualification: () => void;
  zapierWebhookUrl: string;
  setZapierWebhookUrl: (url: string) => void;
};

const initialFormData: FormData = {
  loanAmount: '',
  businessName: '',
  monthlyRevenue: '',
  timeInBusiness: '',
  creditScore: '',
  industry: '',
  capitalTimeframe: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

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
    const isRevenueDisqualified = formData.monthlyRevenue === 'Less than $15,000';
    const isTimeDisqualified = formData.timeInBusiness === 'Less than 6 months';
    
    setIsDisqualified(isRevenueDisqualified || isTimeDisqualified);
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
    switch (currentStep) {
      case 1:
        return !!formData.loanAmount;
      case 2:
        return !!formData.businessName && !!formData.industry && !!formData.capitalTimeframe;
      case 3:
        return !!formData.monthlyRevenue && !!formData.timeInBusiness;
      case 4:
        return !!formData.firstName && !!formData.lastName && !!formData.email && !!formData.phone && validateEmail(formData.email) && validatePhone(formData.phone);
      case 5:
        return !!formData.loanAmount && 
               !!formData.businessName && 
               !!formData.industry && 
               !!formData.capitalTimeframe &&
               !!formData.monthlyRevenue && 
               !!formData.timeInBusiness && 
               !!formData.firstName && 
               !!formData.lastName && 
               !!formData.email && 
               !!formData.phone && 
               validateEmail(formData.email) && 
               validatePhone(formData.phone);
      default:
        return false;
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
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
