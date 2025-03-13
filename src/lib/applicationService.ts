
import { ApplicationData } from './applicationTypes';
import { toast } from "sonner";
import { DEFAULT_WEBHOOK_URL } from './applicationContext';
import { supabase } from "@/integrations/supabase/client";
import { GrowthPathApplicationRow } from '@/types/supabase';

export const submitApplicationData = async (
  applicationData: ApplicationData, 
  webhookUrl: string = DEFAULT_WEBHOOK_URL
): Promise<boolean> => {
  try {
    // Log the application data
    console.log('Application submitted with data:', applicationData);
    
    // Use default webhook URL if none provided
    const finalWebhookUrl = webhookUrl || DEFAULT_WEBHOOK_URL;
    
    // Save webhook URL to localStorage
    localStorage.setItem('application_webhook', finalWebhookUrl);
    localStorage.setItem('prequalify_webhook', finalWebhookUrl); // Use the same webhook for both forms
    
    console.log('Using webhook URL:', finalWebhookUrl);
    
    // Generate a unique ID for this application
    const applicationId = `app_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    localStorage.setItem('current_application_id', applicationId);
    
    // Store application data in localStorage as a fallback
    const applicationJson = JSON.stringify({
      // Personal Information
      first_name: applicationData.firstName,
      last_name: applicationData.lastName,
      email: applicationData.email,
      phone: applicationData.phone,
      address: applicationData.address,
      city: applicationData.city,
      state: applicationData.state,
      zip_code: applicationData.zipCode,
      social_security_number: applicationData.socialSecurityNumber,
      date_of_birth: applicationData.dateOfBirth,
      
      // Business Information
      business_name: applicationData.businessName,
      business_type: applicationData.businessType,
      business_start_date: applicationData.businessStartDate,
      industry: applicationData.industry,
      time_in_business: applicationData.timeInBusiness,
      employee_count: applicationData.employeeCount,
      business_address: applicationData.businessAddress,
      business_city: applicationData.businessCity,
      business_state: applicationData.businessState,
      business_zip_code: applicationData.businessZipCode,
      website_url: applicationData.websiteUrl,
      ein_number: applicationData.einNumber,
      ownership_percentage: applicationData.ownershipPercentage,
      
      // Financial Information
      bank_name: applicationData.bankName,
      account_number: applicationData.accountNumber,
      routing_number: applicationData.routingNumber,
      monthly_revenue: applicationData.monthlyRevenue,
      credit_score: applicationData.creditScore,
      loan_amount: applicationData.loanAmount,
      use_of_funds: applicationData.useOfFunds,
      
      // Agreement Information
      agree_to_terms: applicationData.agreeToTerms,
      agree_information_correct: applicationData.agreeInformationCorrect,
      signature: applicationData.signature,
      
      // Additional info
      application_id: applicationId,
      zapier_webhook_url: finalWebhookUrl,
      submission_date: new Date().toISOString()
    });
    
    localStorage.setItem('current_application_data', applicationJson);
    
    // Format data to send only the raw values without questions
    const formattedData: Record<string, any> = {
      application_id: applicationId,
      form_type: 'full_application',
      submission_date: new Date().toISOString(),
      source_url: window.location.href,
    };
    
    // Add raw data (without questions and answers format)
    Object.entries(applicationData).forEach(([field, value]) => {
      // Add to the raw data
      formattedData[field] = value;
    });
    
    // Save to Supabase
    try {
      console.log('Saving application data to Supabase...');
      
      const insertData = {
        first_name: applicationData.firstName,
        last_name: applicationData.lastName,
        email: applicationData.email,
        phone: applicationData.phone,
        address: applicationData.address,
        city: applicationData.city,
        state: applicationData.state,
        zip_code: applicationData.zipCode,
        social_security_number: applicationData.socialSecurityNumber,
        date_of_birth: applicationData.dateOfBirth,
        business_name: applicationData.businessName,
        business_type: applicationData.businessType,
        business_start_date: applicationData.businessStartDate,
        industry: applicationData.industry,
        time_in_business: applicationData.timeInBusiness,
        employee_count: applicationData.employeeCount,
        business_address: applicationData.businessAddress,
        business_city: applicationData.businessCity,
        business_state: applicationData.businessState,
        business_zip_code: applicationData.businessZipCode,
        website_url: applicationData.websiteUrl,
        ein_number: applicationData.einNumber,
        ownership_percentage: applicationData.ownershipPercentage,
        bank_name: applicationData.bankName,
        account_number: applicationData.accountNumber,
        routing_number: applicationData.routingNumber,
        monthly_revenue: applicationData.monthlyRevenue,
        credit_score: applicationData.creditScore,
        loan_amount: applicationData.loanAmount,
        use_of_funds: applicationData.useOfFunds,
        agree_to_terms: applicationData.agreeToTerms,
        agree_information_correct: applicationData.agreeInformationCorrect,
        signature: applicationData.signature,
        application_id: applicationId,
        webhook_url: finalWebhookUrl,
        submission_date: new Date().toISOString()
      } as GrowthPathApplicationRow;
      
      const { error } = await supabase
        .from('GrowthPath Application')
        .insert(insertData);
        
      if (error) {
        console.error('Error saving to Supabase:', error);
      } else {
        console.log('Application data saved to Supabase successfully');
      }
    } catch (error) {
      console.error('Error saving application data to Supabase:', error);
      // Don't fail if Supabase insert fails, still try the webhook
    }
    
    // Send data to webhook
    try {
      console.log('Sending application data to webhook:', finalWebhookUrl);
      console.log('Payload:', JSON.stringify(formattedData));
      
      await fetch(finalWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Handle CORS issues
        body: JSON.stringify(formattedData),
      });
      console.log('Application data sent to webhook successfully');
      toast("Application submitted successfully!");
    } catch (error) {
      console.error('Error sending application data to webhook:', error);
      toast("An error occurred. Please try again.");
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
