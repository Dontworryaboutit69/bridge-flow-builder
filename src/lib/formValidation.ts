
import { FormData } from './formTypes';
import { isValidEmail, isValidTextOnly, isValidUrl } from './validationUtils';

export const validateEmail = (email: string): boolean => {
  return isValidEmail(email);
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
      const isDataValid = !!formData.businessName && !!formData.industry && !!formData.capitalTimeframe;
      const isBusinessNameValid = isValidTextOnly(formData.businessName || '');
      
      console.log(`Step 2 validation result: ${isDataValid && isBusinessNameValid}`, {
        businessName: !!formData.businessName,
        industry: !!formData.industry,
        capitalTimeframe: !!formData.capitalTimeframe,
        isBusinessNameValid
      });
      
      return isDataValid && isBusinessNameValid;
    case 3:
      return !!formData.monthlyRevenue && !!formData.timeInBusiness;
    case 4:
      return !!formData.firstName && 
             !!formData.lastName && 
             !!formData.email && 
             !!formData.phone && 
             validateEmail(formData.email) && 
             validatePhone(formData.phone) &&
             isValidTextOnly(formData.firstName || '') &&
             isValidTextOnly(formData.lastName || '');
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
             validatePhone(formData.phone) &&
             isValidTextOnly(formData.firstName || '') &&
             isValidTextOnly(formData.lastName || '') &&
             isValidTextOnly(formData.businessName || '');
    default:
      return false;
  }
};

export const checkQualification = (formData: FormData): boolean => {
  // Check if revenue is "Less than $15,000"
  const isRevenueDisqualified = formData.monthlyRevenue === 'Less than $15,000';
  
  // Check if time in business is "Less than 6 months"
  const isTimeDisqualified = formData.timeInBusiness === 'Less than 6 months';
  
  // Check if credit score is "Excellent (720+)" or "Good (680-719)"
  const hasHighCreditScore = 
    formData.creditScore === 'Excellent (720+)' || 
    formData.creditScore === 'Good (680-719)';
  
  // If they have high credit score, they can qualify regardless of revenue or time in business
  const isQualified = hasHighCreditScore || (!isRevenueDisqualified && !isTimeDisqualified);
  
  // Print debug information
  console.log("Qualification check:", { 
    monthlyRevenue: formData.monthlyRevenue,
    timeInBusiness: formData.timeInBusiness,
    creditScore: formData.creditScore,
    isRevenueDisqualified,
    isTimeDisqualified,
    hasHighCreditScore,
    isDisqualified: !isQualified
  });
  
  // Return true if disqualified (not qualified)
  return !isQualified;
};
