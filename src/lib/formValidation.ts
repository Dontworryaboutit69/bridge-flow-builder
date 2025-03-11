
import { FormData } from './formTypes';

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePhone = (phone: string): boolean => {
  return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
};

export const isStepValid = (currentStep: number, formData: FormData): boolean => {
  console.log(`Validating step ${currentStep} with data:`, formData);
  
  switch (currentStep) {
    case 1:
      return !!formData.loanAmount;
    case 2:
      const isValid = !!formData.businessName && !!formData.industry && !!formData.capitalTimeframe;
      console.log(`Step 2 validation result: ${isValid}`, {
        businessName: !!formData.businessName,
        industry: !!formData.industry,
        capitalTimeframe: !!formData.capitalTimeframe
      });
      return isValid;
    case 3:
      return !!formData.monthlyRevenue && !!formData.timeInBusiness;
    case 4:
      return !!formData.firstName && 
             !!formData.lastName && 
             !!formData.email && 
             !!formData.phone && 
             validateEmail(formData.email) && 
             validatePhone(formData.phone);
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

export const checkQualification = (formData: FormData): boolean => {
  // Check if revenue is "Less than $15,000"
  const isRevenueDisqualified = formData.monthlyRevenue === 'Less than $15,000';
  
  // Check if time in business is "Less than 6 months"
  const isTimeDisqualified = formData.timeInBusiness === 'Less than 6 months';
  
  // Print debug information
  console.log("Qualification check:", { 
    monthlyRevenue: formData.monthlyRevenue,
    timeInBusiness: formData.timeInBusiness,
    isRevenueDisqualified,
    isTimeDisqualified,
    isDisqualified: isRevenueDisqualified || isTimeDisqualified
  });
  
  return isRevenueDisqualified || isTimeDisqualified;
};
