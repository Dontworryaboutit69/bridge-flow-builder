
import { useCallback } from 'react';
import { FormData } from './formTypes';
import { isStepValid as validateStep, checkQualification as validateQualification } from './formValidation';
import { toast } from 'sonner';
import { supabase } from "@/integrations/supabase/client";

// Helper function to get question text for pre-qualification fields
const getPreQualQuestionText = (field: string): string => {
  const questions: Record<string, string> = {
    loanAmount: "How much funding do you need?",
    businessName: "Business Name",
    monthlyRevenue: "Current Monthly Revenue",
    timeInBusiness: "Time in Business",
    creditScore: "Credit Score",
    industry: "Industry",
    capitalTimeframe: "When do you need the capital?",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number"
  };
  
  return questions[field] || field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
};

export const useFormSubmission = (
  formData: FormData,
  webhookUrl: string,
  checkQualification: () => boolean,
  setIsSubmitting: (value: boolean) => void,
  setSubmitSuccess: (value: boolean) => void
) => {
  const submitForm = useCallback(async () => {
    setIsSubmitting(true);
    try {
      console.log('Pre-qualification form submitted:', formData);
      
      if (typeof window !== 'undefined') {
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Business Funding Pre-qualification',
            content_category: 'Funding',
            value: formData.loanAmount || 'Unknown',
            currency: 'USD',
          });
        }
        
        if (window.gtag) {
          window.gtag('event', 'generate_lead', {
            'event_category': 'form',
            'event_label': 'Pre-qualification Form',
            'value': formData.loanAmount ? parseFloat(formData.loanAmount.replace(/[^0-9.-]+/g, '')) : 0,
          });
        }
      }
      
      const disqualified = checkQualification();
      console.log("Qualification status after submission:", { disqualified });
      
      if (typeof window !== 'undefined') {
        if (window.fbq) {
          window.fbq('trackCustom', 'QualificationResult', { 
            qualified: !disqualified,
            loanAmount: formData.loanAmount,
            businessName: formData.businessName
          });
        }
        
        if (window.gtag) {
          window.gtag('event', 'qualification_result', {
            'event_category': 'form',
            'event_label': disqualified ? 'Disqualified' : 'Qualified',
            'value': disqualified ? 0 : 1
          });
        }
      }
      
      if (webhookUrl) {
        localStorage.setItem('prequalify_webhook', webhookUrl);
      }
      
      // Save data to Supabase
      const { error: supabaseError } = await supabase
        .from('prequalifications')
        .insert({
          loan_amount: formData.loanAmount,
          business_name: formData.businessName,
          monthly_revenue: formData.monthlyRevenue,
          time_in_business: formData.timeInBusiness,
          credit_score: formData.creditScore,
          industry: formData.industry,
          capital_timeframe: formData.capitalTimeframe,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          is_disqualified: disqualified,
          zapier_webhook_url: webhookUrl
        });
        
      if (supabaseError) {
        console.error('Error saving to Supabase:', supabaseError);
        toast("Data saved to Zapier, but there was an issue with database storage");
      } else {
        console.log('Pre-qualification data saved to Supabase successfully');
      }
      
      // Zapier webhook still works - as a backup/integration, not the primary storage
      if (webhookUrl) {
        try {
          // Format data with questions and answers for each field
          const formattedData: Record<string, any> = {
            form_type: 'pre_qualification',
            submission_date: new Date().toISOString(),
            source_url: window.location.href,
            is_qualified: !disqualified,
            questions_and_answers: {}
          };
          
          // Add both raw data and formatted Q&A
          Object.entries(formData).forEach(([field, value]) => {
            // Add to the raw data
            formattedData[field] = value;
            
            // Also add to the questions_and_answers object
            if (value !== undefined && value !== null && value !== '') {
              formattedData.questions_and_answers[getPreQualQuestionText(field)] = value;
            }
          });
          
          await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            mode: 'no-cors',
            body: JSON.stringify(formattedData),
          });
          console.log('Data sent to webhook successfully');
        } catch (error) {
          console.error('Error sending data to webhook:', error);
          toast("Data saved to database, but there was an error connecting to webhook");
        }
      }
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (!disqualified) {
        setSubmitSuccess(true);
      }
      
    } catch (error) {
      console.error('Error submitting pre-qualification form:', error);
      toast("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, webhookUrl, checkQualification, setIsSubmitting, setSubmitSuccess]);

  return { submitForm };
};

export const useFormNavigation = (
  currentStep: number, 
  totalSteps: number, 
  formData: FormData,
  setCurrentStep: (step: number) => void,
  checkQualification: () => boolean
) => {
  const getStepName = (step: number): string => {
    switch (step) {
      case 1: return 'Loan Amount';
      case 2: return 'Business Details';
      case 3: return 'Financial Information';
      case 4: return 'Contact Information';
      case 5: return 'Review & Submit';
      default: return 'Unknown Step';
    }
  };

  const nextStep = useCallback(() => {
    if (currentStep < totalSteps) {
      if (validateStep(currentStep, formData)) {
        console.log(`Moving from step ${currentStep} to ${currentStep + 1}`);
        
        if (typeof window !== 'undefined') {
          if (window.fbq) {
            window.fbq('trackCustom', 'CompleteStep', { 
              step: currentStep,
              stepName: getStepName(currentStep)
            });
          }
          
          if (window.gtag) {
            window.gtag('event', 'complete_step', {
              'event_category': 'form',
              'event_label': `Step ${currentStep} - ${getStepName(currentStep)}`,
              'value': currentStep
            });
          }
        }
        
        if (currentStep === 4) {
          checkQualification();
        }
        
        // Fix: Instead of using a callback function, pass the direct value
        setCurrentStep(currentStep + 1);
      } else {
        console.log(`Cannot move to next step - validation failed for step ${currentStep}`);
      }
    } else {
      console.log("Already at the last step");
    }
  }, [currentStep, totalSteps, formData, setCurrentStep, checkQualification]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      console.log(`Moving from step ${currentStep} to ${currentStep - 1}`);
      // Fix: Instead of using a callback function, pass the direct value
      setCurrentStep(currentStep - 1);
    } else {
      console.log("Already at the first step");
    }
  }, [currentStep, setCurrentStep]);

  const isStepValid = useCallback(() => {
    const valid = validateStep(currentStep, formData);
    console.log(`Step ${currentStep} validation: ${valid}`);
    return valid;
  }, [currentStep, formData]);

  return { nextStep, prevStep, isStepValid };
};
