
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
        <div className="mb-8 flex justify-center">
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
  
  // Improved success view to match the image
  return (
    <div className="w-full max-w-xl mx-auto animate-fade-in text-center">
      <div className="mb-8 flex justify-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a43] mb-4">
        Congratulations! You're Pre-Qualified
      </h2>
      <p className="text-[#5e6577] mb-10 max-w-lg mx-auto text-lg leading-relaxed">
        Based on your information, you pre-qualify for business funding. Complete your application to finalize your funding request.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <CustomButton 
          variant="primary" 
          onClick={handleStartApplication}
          className="py-4 text-lg"
          isLoading={isLoading}
          fullWidth
        >
          Complete Your Application
          <ArrowUpRight className="ml-1 w-5 h-5" />
        </CustomButton>
        
        <CustomButton 
          href="https://calendly.com/growthpath/30min" 
          target="_blank"
          variant="outline" 
          className="py-4 text-lg"
          fullWidth
        >
          Schedule a Call First
          <Calendar className="ml-1 w-5 h-5" />
        </CustomButton>
      </div>
    </div>
  );
};

export default Step5;
