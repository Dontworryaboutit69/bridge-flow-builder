
import { ApplicationData } from './applicationTypes';

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
        !!data.dateOfBirth
      );
    case 2: // Business Information
      return (
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
