import React, { createContext, useContext, useState } from 'react';

type ApplicationData = {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  socialSecurityNumber: string;
  dateOfBirth: string;
  
  // Business Information
  businessName: string;
  businessType: string;
  businessStartDate: string;
  industry: string;
  timeInBusiness: string;
  employeeCount: string;
  businessAddress: string;
  businessCity: string;
  businessState: string;
  businessZipCode: string;
  websiteUrl: string;
  einNumber: string;
  ownershipPercentage: string;
  
  // Financial Information
  bankName: string;
  accountNumber: string;
  routingNumber: string;
  monthlyRevenue: string;
  creditScore: string;
  loanAmount: string;
  useOfFunds: string;
  
  // Documentation Agreement
  agreeToTerms: boolean;
  agreeInformationCorrect: boolean;
};

type ApplicationContextType = {
  currentStep: number;
  applicationData: ApplicationData;
  setCurrentStep: (step: number) => void;
  updateApplicationData: (data: Partial<ApplicationData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  isStepValid: () => boolean;
  totalSteps: number;
  submitApplication: () => Promise<void>;
  isSubmitting: boolean;
  submitSuccess: boolean;
};

const initialApplicationData: ApplicationData = {
  // Personal Information
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  socialSecurityNumber: '',
  dateOfBirth: '',
  
  // Business Information
  businessName: '',
  businessType: '',
  businessStartDate: '',
  industry: '',
  timeInBusiness: '',
  employeeCount: '',
  businessAddress: '',
  businessCity: '',
  businessState: '',
  businessZipCode: '',
  websiteUrl: '',
  einNumber: '',
  ownershipPercentage: '',
  
  // Financial Information
  bankName: '',
  accountNumber: '',
  routingNumber: '',
  monthlyRevenue: '',
  creditScore: '',
  loanAmount: '',
  useOfFunds: '',
  
  // Documentation Agreement
  agreeToTerms: false,
  agreeInformationCorrect: false,
};

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export const ApplicationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationData, setApplicationData] = useState<ApplicationData>(initialApplicationData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
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
    // Basic validation logic based on current step
    switch (currentStep) {
      case 1: // Personal Information
        return (
          !!applicationData.firstName &&
          !!applicationData.lastName &&
          !!applicationData.email &&
          !!applicationData.phone &&
          !!applicationData.address &&
          !!applicationData.city &&
          !!applicationData.state &&
          !!applicationData.zipCode &&
          !!applicationData.socialSecurityNumber &&
          !!applicationData.dateOfBirth
        );
      case 2: // Business Information
        return (
          !!applicationData.businessName &&
          !!applicationData.businessType &&
          !!applicationData.businessStartDate &&
          !!applicationData.industry &&
          !!applicationData.timeInBusiness &&
          !!applicationData.businessAddress &&
          !!applicationData.businessCity &&
          !!applicationData.businessState &&
          !!applicationData.businessZipCode &&
          !!applicationData.einNumber &&
          !!applicationData.ownershipPercentage
        );
      case 3: // Financial Information
        return (
          !!applicationData.monthlyRevenue &&
          !!applicationData.creditScore &&
          !!applicationData.loanAmount &&
          !!applicationData.useOfFunds
        );
      case 4: // Documentation
        return applicationData.agreeToTerms && applicationData.agreeInformationCorrect;
      default:
        return false;
    }
  };

  const submitApplication = async () => {
    setIsSubmitting(true);
    try {
      // In a real app, you would send the application data to your backend here
      console.log('Application submitted with data:', applicationData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting application:', error);
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
