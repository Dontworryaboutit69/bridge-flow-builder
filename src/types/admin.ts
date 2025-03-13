
export type ApplicationData = {
  // Personal Information
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  social_security_number: string;
  date_of_birth: string;
  
  // Business Information
  business_name: string;
  business_type: string;
  business_start_date: string;
  industry: string;
  time_in_business: string;
  employee_count: string;
  business_address: string;
  business_city: string;
  business_state: string;
  business_zip_code: string;
  website_url: string;
  ein_number: string;
  ownership_percentage: string;
  
  // Financial Information
  bank_name: string;
  account_number: string;
  routing_number: string;
  monthly_revenue: string;
  credit_score: string;
  loan_amount: string;
  use_of_funds: string;
  
  // Agreement Information
  agree_to_terms: boolean;
  agree_information_correct: boolean;
  signature: string;
  
  // Additional info
  application_id: string;
  submission_date: string;
};
