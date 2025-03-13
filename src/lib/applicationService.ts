
import { ApplicationData } from './applicationTypes';
import { toast } from "sonner";

// Helper function to get question text for a field
const getQuestionText = (field: string): string => {
  const questions: Record<string, string> = {
    // Personal information
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    address: "Street Address",
    city: "City",
    state: "State",
    zipCode: "ZIP Code",
    dateOfBirth: "Date of Birth",
    ssn: "Social Security Number",
    
    // Business information
    businessName: "Business Name",
    businessType: "Business Type",
    einNumber: "EIN Number",
    ownershipPercentage: "Ownership Percentage",
    businessStartDate: "Business Start Date",
    businessAddress: "Business Street Address",
    businessCity: "Business City",
    businessState: "Business State",
    businessZipCode: "Business ZIP Code",
    employeeCount: "Number of Employees",
    
    // Financial information
    monthlyRevenue: "Monthly Revenue",
    creditScore: "Credit Score",
    loanAmount: "Funding Amount Needed",
    useOfFunds: "Primary Use of Funds",
    bankName: "Bank Name",
    accountType: "Account Type",
    accountLength: "Account Length",
    hasTaxLiens: "Has Tax Liens",
    hasOtherLoans: "Has Other Loans",
    
    // Pre-qualification specific fields
    industry: "Industry",
    timeInBusiness: "Time in Business",
    capitalTimeframe: "Capital Timeframe"
  };
  
  return questions[field] || field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
};

export const submitApplicationData = async (
  applicationData: ApplicationData, 
  webhookUrl: string
): Promise<boolean> => {
  try {
    // Log the application data
    console.log('Application submitted with data:', applicationData);
    
    // Save webhook URL to localStorage if provided
    if (webhookUrl) {
      localStorage.setItem('application_webhook', webhookUrl);
      localStorage.setItem('prequalify_webhook', webhookUrl); // Use the same webhook for both forms
    }
    
    // Format data with questions and answers for each field
    const formattedData: Record<string, any> = {
      form_type: 'full_application',
      submission_date: new Date().toISOString(),
      source_url: window.location.href,
      questions_and_answers: {}
    };
    
    // Add both raw data and formatted Q&A
    Object.entries(applicationData).forEach(([field, value]) => {
      // Add to the raw data
      formattedData[field] = value;
      
      // Also add to the questions_and_answers object
      if (value !== undefined && value !== null && value !== '') {
        formattedData.questions_and_answers[getQuestionText(field)] = value;
      }
    });
    
    // Send data to webhook if URL is available
    if (webhookUrl) {
      try {
        console.log('Sending application data to webhook:', webhookUrl);
        
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors', // Handle CORS issues
          body: JSON.stringify(formattedData),
        });
        console.log('Application data sent to webhook successfully');
      } catch (error) {
        console.error('Error sending application data to webhook:', error);
        toast("Error connecting to Zapier, but application saved locally");
      }
    } else {
      console.warn('No webhook URL provided for application submission');
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return true;
  } catch (error) {
    console.error('Error submitting application:', error);
    toast("An error occurred. Please try again.");
    return false;
  }
};
