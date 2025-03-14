
import { jsPDF } from 'jspdf';
import { ApplicationData } from '@/types/admin';

// Helper function to safely access nested properties
export const safeValue = (value: any, defaultValue = 'N/A') => {
  if (value === null || value === undefined || value === '') {
    return defaultValue;
  }
  return String(value);
};

// Helper to safely get the last 4 digits of a sensitive number
export const lastFourDigits = (value: string | null | undefined) => {
  if (!value) return 'N/A';
  if (value.length < 4) return '****';
  return `****${value.slice(-4)}`;
};

// Create a safe filename for downloading
export const createSafeFilename = (applicationId: string): string => {
  const safeId = safeValue(applicationId, 'download').replace(/[^a-z0-9]/gi, '_');
  return `GrowthPath_Application_${safeId}.pdf`;
};

// Generate personal information table data
export const generatePersonalInfoData = (application: ApplicationData): Array<[string, string]> => {
  return [
    ["Full Name", `${safeValue(application.first_name, '')} ${safeValue(application.last_name, '')}`],
    ["Email", safeValue(application.email)],
    ["Phone", safeValue(application.phone)],
    ["Address", [
      safeValue(application.address, ''),
      safeValue(application.city, ''),
      safeValue(application.state, ''),
      safeValue(application.zip_code, '')
    ].filter(Boolean).join(', ') || 'N/A'],
    ["Social Security Number", application.social_security_number ? `***-**-${application.social_security_number.slice(-4)}` : 'N/A'],
    ["Date of Birth", safeValue(application.date_of_birth)]
  ];
};

// Generate business information table data
export const generateBusinessInfoData = (application: ApplicationData): Array<[string, string]> => {
  return [
    ["Business Name", safeValue(application.business_name)],
    ["Business Type", safeValue(application.business_type)],
    ["Industry", safeValue(application.industry)],
    ["Time in Business", safeValue(application.time_in_business)],
    ["Employees", safeValue(application.employee_count)],
    ["Business Address", [
      safeValue(application.business_address, ''), 
      safeValue(application.business_city, ''), 
      safeValue(application.business_state, ''), 
      safeValue(application.business_zip_code, '')
    ].filter(Boolean).join(', ') || 'N/A'],
    ["Website", safeValue(application.website_url)],
    ["EIN", safeValue(application.ein_number)],
    ["Ownership %", safeValue(application.ownership_percentage)]
  ];
};

// Generate financial information table data
export const generateFinancialInfoData = (application: ApplicationData): Array<[string, string]> => {
  return [
    ["Bank Name", safeValue(application.bank_name)],
    ["Account Number", application.account_number ? lastFourDigits(application.account_number) : 'N/A'],
    ["Routing Number", application.routing_number ? lastFourDigits(application.routing_number) : 'N/A'],
    ["Monthly Revenue", safeValue(application.monthly_revenue)],
    ["Credit Score", safeValue(application.credit_score)],
    ["Loan Amount", safeValue(application.loan_amount)],
    ["Use of Funds", safeValue(application.use_of_funds)]
  ];
};

// Generate agreement information table data
export const generateAgreementInfoData = (application: ApplicationData): Array<[string, string]> => {
  return [
    ["Terms Agreed", application.agree_to_terms ? "Yes" : "No"],
    ["Information Correct", application.agree_information_correct ? "Yes" : "No"],
    ["Signature", application.signature ? "Signed" : "Not signed"]
  ];
};

// Add a section header to the PDF
export const addSectionHeader = (doc: jsPDF, title: string, yPosition: number): number => {
  doc.setFontSize(16);
  doc.setTextColor(0, 48, 87); 
  doc.text(title, 14, yPosition);
  return yPosition + 8; // Return the next Y position
};
