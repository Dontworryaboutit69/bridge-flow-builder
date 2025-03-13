
import { ApplicationData } from './applicationTypes';

export const validateApplicationStep = (step: number, data: ApplicationData): boolean => {
  switch (step) {
    case 1: // Personal Information
      return Boolean(
        data.firstName && 
        data.lastName && 
        data.email && 
        data.phone && 
        data.address &&
        data.city &&
        data.state &&
        data.zipCode &&
        data.dateOfBirth &&
        data.socialSecurityNumber
      );
    
    case 2: // Business Information
      return Boolean(
        data.businessName &&
        data.businessType &&
        data.industry &&
        data.timeInBusiness &&
        data.businessAddress &&
        data.businessCity &&
        data.businessState &&
        data.businessZipCode &&
        data.einNumber &&
        data.ownershipPercentage
      );
    
    case 3: // Financial Information
      return Boolean(
        data.monthlyRevenue &&
        data.creditScore &&
        data.loanAmount &&
        data.useOfFunds
      );
    
    case 4: // Review & Submit
      return Boolean(
        data.agreeToTerms &&
        data.agreeInformationCorrect &&
        data.signature
      );
    
    default:
      return false;
  }
};
