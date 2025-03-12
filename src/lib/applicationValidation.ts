
import { ApplicationData } from './applicationTypes';
import { isValidEmail, isValidTextOnly, isValidUrl } from './validationUtils';

export const validateApplicationStep = (step: number, data: ApplicationData): boolean => {
  // Basic validation logic based on current step
  switch (step) {
    case 1: // Personal Information
      return (
        !!data.firstName &&
        !!data.lastName &&
        !!data.email &&
        !!data.phone &&
        !!data.address &&
        !!data.city &&
        !!data.state &&
        !!data.zipCode &&
        !!data.socialSecurityNumber &&
        !!data.dateOfBirth &&
        isValidTextOnly(data.firstName) && 
        isValidTextOnly(data.lastName) &&
        isValidEmail(data.email) &&
        isValidTextOnly(data.city)
      );
    case 2: // Business Information
      const hasAllRequiredBusinessFields = (
        !!data.businessName &&
        !!data.businessType &&
        !!data.businessStartDate &&
        !!data.industry &&
        !!data.timeInBusiness &&
        !!data.businessAddress &&
        !!data.businessCity &&
        !!data.businessState &&
        !!data.businessZipCode &&
        !!data.einNumber &&
        !!data.ownershipPercentage
      );

      // Website validation (only if provided)
      const isWebsiteValid = !data.websiteUrl || isValidUrl(data.websiteUrl);
      
      return hasAllRequiredBusinessFields && 
        isValidTextOnly(data.businessCity) && 
        isWebsiteValid;
        
    case 3: // Financial Information
      return (
        !!data.monthlyRevenue &&
        !!data.creditScore &&
        !!data.loanAmount &&
        !!data.useOfFunds
      );
    case 4: // Documentation
      return data.agreeToTerms && data.agreeInformationCorrect;
    default:
      return false;
  }
};
