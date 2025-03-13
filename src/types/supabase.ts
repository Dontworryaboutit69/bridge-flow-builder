
// Custom type definitions for Supabase tables to override the generated types
// that only have id and created_at

export type GrowthPathApplicationRow = {
  id: number;
  created_at: string;
  application_id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  social_security_number?: string;
  date_of_birth?: string;
  business_name?: string;
  business_type?: string;
  business_start_date?: string;
  industry?: string;
  time_in_business?: string;
  employee_count?: string;
  business_address?: string;
  business_city?: string;
  business_state?: string;
  business_zip_code?: string;
  website_url?: string;
  ein_number?: string;
  ownership_percentage?: string;
  bank_name?: string;
  account_number?: string;
  routing_number?: string;
  monthly_revenue?: string;
  credit_score?: string;
  loan_amount?: string;
  use_of_funds?: string;
  agree_to_terms?: boolean;
  agree_information_correct?: boolean;
  signature?: string;
  webhook_url?: string;
  submission_date?: string;
};

export type GrowthPathDocumentsRow = {
  id: number;
  created_at: string;
  application_id?: string;
  document_type?: string;
  document_name?: string;
  file_path?: string;
  file_size?: number;
  file_type?: string;
};
