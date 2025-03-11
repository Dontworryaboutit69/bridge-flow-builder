
export type ApplicationData = {
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

export type ApplicationContextType = {
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
  zapierWebhookUrl: string;
  setZapierWebhookUrl: (url: string) => void;
};

export const initialApplicationData: ApplicationData = {
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
