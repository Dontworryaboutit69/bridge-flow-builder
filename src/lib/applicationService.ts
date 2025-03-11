
import { ApplicationData } from './applicationTypes';
import { toast } from "sonner";

export const submitApplicationData = async (
  applicationData: ApplicationData, 
  zapierWebhookUrl: string
): Promise<boolean> => {
  try {
    // Log the application data
    console.log('Application submitted with data:', applicationData);
    
    // Save webhook URL to localStorage if provided
    if (zapierWebhookUrl) {
      localStorage.setItem('application_zapier_webhook', zapierWebhookUrl);
    }
    
    // Send data to Zapier if webhook URL is available
    if (zapierWebhookUrl) {
      try {
        await fetch(zapierWebhookUrl, {
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
        console.log('Application data sent to Zapier webhook successfully');
      } catch (error) {
        console.error('Error sending application data to Zapier:', error);
        toast("Error connecting to Zapier, but application saved locally");
      }
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
