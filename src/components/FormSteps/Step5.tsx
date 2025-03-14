
import { useForm } from '@/lib/formContext';
import CustomButton from '../ui/CustomButton';
import { CheckCircle2, Calendar, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const Step5 = () => {
  const { formData, resetForm, isDisqualified } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.fbq) {
        window.fbq('track', 'Lead');
        window.fbq('track', 'PreQualified');
      }
      
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          'event_category': 'form',
          'event_label': 'Pre-qualification form completed'
        });
        window.gtag('event', 'conversion', {
          'send_to': 'AW-123456789/AbC-D_efG-h1i2J3k4L5',
          'value': 1.0,
          'currency': 'USD'
        });
      }
    }
  }, []);
  
  if (isDisqualified) {
    return (
      <div className="w-full max-w-xl mx-auto animate-fade-in text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
            <Calendar className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
          Let's Schedule a Call
        </h2>
        <p className="text-funding-gray mb-8 max-w-md mx-auto">
          Based on your responses, we'd like to discuss your business funding needs directly.
        </p>
        
        <CustomButton 
          href="https://calendly.com/growthpath/30min" 
          target="_blank"
          className="group mx-auto"
        >
          Schedule a Call
          <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </CustomButton>
      </div>
    );
  }
  
  const handleStartApplication = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "https://mca.growthpathadvisory.com/application-page-7972-6296";
    }, 500);
  };
  
  return (
    <div className="w-full max-w-xl mx-auto animate-fade-in text-center">
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
        Congratulations! You're Pre-Qualified
      </h2>
      <p className="text-funding-gray mb-8 max-w-md mx-auto">
        Based on your information, you pre-qualify for business funding. Complete your application to finalize your funding request.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <CustomButton 
          variant="primary" 
          onClick={handleStartApplication}
          className="group"
          isLoading={isLoading}
        >
          Complete Your Application
          <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </CustomButton>
        
        <CustomButton 
          href="https://calendly.com/growthpath/30min" 
          target="_blank"
          variant="outline"
          className="group"
        >
          Schedule a Call First
          <Calendar className="ml-1 w-4 h-4" />
        </CustomButton>
      </div>
    </div>
  );
};

export default Step5;
