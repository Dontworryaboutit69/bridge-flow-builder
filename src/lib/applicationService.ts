
import { ApplicationData } from './applicationTypes';
import { toast } from "sonner";

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
          body: JSON.stringify({
            form_type: 'full_application',
            ...applicationData,
            submission_date: new Date().toISOString(),
            source_url: window.location.href,
          }),
        });
        console.log('Application data sent to webhook successfully');
      } catch (error) {
        console.error('Error sending application data to webhook:', error);
        toast("Error connecting to Make.com, but application saved locally");
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
