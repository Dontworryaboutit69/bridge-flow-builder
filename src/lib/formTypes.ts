
export type FormData = {
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

export type FormContextType = {
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

export const initialFormData: FormData = {
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
