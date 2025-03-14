
export type ApplicationData = {
  // Personal Information
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  dateOfBirth?: string;
  socialSecurityNumber?: string;
  
  // Business Information
  businessName?: string;
  businessType?: string;
  businessStartDate?: string;
  timeInBusiness?: string;
  industry?: string;
  employeeCount?: string;
  businessAddress?: string;
  businessCity?: string;
  businessState?: string;
  businessZipCode?: string;
  websiteUrl?: string;
  einNumber?: string;
  ownershipPercentage?: string;
  
  // Financial Information
  bankName?: string;
  accountNumber?: string;
  routingNumber?: string;
  monthlyRevenue?: string;
  creditScore?: string;
  loanAmount?: string;
  useOfFunds?: string;
  
  // Agreement Information
  agreeToTerms?: boolean;
  agreeInformationCorrect?: boolean;
  signature?: string;
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
  getStepLink: (step: number) => string;
};

export const initialApplicationData: ApplicationData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  businessName: '',
  businessType: '',
};
