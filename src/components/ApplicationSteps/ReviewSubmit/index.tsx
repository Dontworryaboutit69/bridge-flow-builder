
import { useApplication } from '@/lib/applicationContext';
import CustomButton from '../../ui/CustomButton';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalInfoSection from './PersonalInfoSection';
import BusinessInfoSection from './BusinessInfoSection';
import FinancialInfoSection from './FinancialInfoSection';
import DigitalSignatureSection from './DigitalSignatureSection';
import AgreementSection from './AgreementSection';
import SuccessView from './SuccessView';

const ReviewSubmit = () => {
  const { 
    updateApplicationData, 
    prevStep, 
    isStepValid, 
    submitApplication, 
    isSubmitting,
    submitSuccess 
  } = useApplication();
  
  const navigate = useNavigate();
  
  // Redirect to thank-you page on successful submission
  useEffect(() => {
    if (submitSuccess) {
      setTimeout(() => {
        navigate('/thank-you');
      }, 1500);
    }
  }, [submitSuccess, navigate]);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [submitSuccess]);
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      {!submitSuccess ? (
        <>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
              Review & Submit Your Application
            </h2>
            <p className="text-funding-gray">
              Please review your information before submitting
            </p>
          </div>
          
          <div className="space-y-6">
            <PersonalInfoSection />
            <BusinessInfoSection />
            <FinancialInfoSection />
            <DigitalSignatureSection />
            <AgreementSection />
          </div>
          
          <div className="mt-10 flex justify-between gap-4">
            <CustomButton 
              variant="outline" 
              onClick={prevStep}
              className="group"
              disabled={isSubmitting}
              size="md"
            >
              <ArrowLeft className="mr-1 w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back
            </CustomButton>
            <CustomButton 
              onClick={submitApplication}
              disabled={!isStepValid() || isSubmitting}
              className="group"
              isLoading={isSubmitting}
              size="md"
            >
              Submit Application
            </CustomButton>
          </div>
        </>
      ) : (
        <SuccessView />
      )}
    </div>
  );
};

export default ReviewSubmit;
