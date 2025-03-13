
import { ApplicationData } from './applicationTypes';
import { toast } from "sonner";
import { DEFAULT_WEBHOOK_URL } from './applicationContext';

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
    
    // Format data to send only the raw values without questions
    const formattedData: Record<string, any> = {
      form_type: 'full_application',
      submission_date: new Date().toISOString(),
      source_url: window.location.href,
    };
    
    // Add raw data (without questions and answers format)
    Object.entries(applicationData).forEach(([field, value]) => {
      // Add to the raw data
      formattedData[field] = value;
    });
    
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
      toast("Error connecting to Zapier, but application saved locally");
      return false;
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
