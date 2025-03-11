
import { useApplication } from '@/lib/applicationContext';
import CustomButton from '../../ui/CustomButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import BusinessDetailsSection from './BusinessDetailsSection';
import BusinessLocationSection from './BusinessLocationSection';
import BusinessOperationsSection from './BusinessOperationsSection';
import BusinessDateSelector from './BusinessDateSelector';
import { useEffect } from 'react';
import { useForm } from '@/lib/formContext';

const BusinessInfo = () => {
  const { applicationData, updateApplicationData, nextStep, prevStep, isStepValid } = useApplication();
  const { formData } = useForm();
  
  // Autopopulate from pre-qualification data if available
  useEffect(() => {
    // Only populate if the business fields are empty
    if (!applicationData.businessName && formData.businessName) {
      updateApplicationData({
        businessName: formData.businessName || '',
        industry: formData.industry || '',
        timeInBusiness: formData.timeInBusiness || '',
        monthlyRevenue: formData.monthlyRevenue || '',
        creditScore: formData.creditScore || '',
        loanAmount: formData.loanAmount || ''
      });
    }
  }, [formData, applicationData, updateApplicationData]);
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
          Business Information
        </h2>
        <p className="text-funding-gray">
          Tell us about your business
        </p>
      </div>
      
      <div className="glass-card p-6 md:p-8 bg-white">
        <div className="space-y-6">
          {/* Business Details Section */}
          <BusinessDetailsSection />
          
          {/* Business Start Date Section */}
          <BusinessDateSelector />
          
          {/* Business Operations Section */}
          <BusinessOperationsSection />
          
          {/* Business Location Section */}
          <BusinessLocationSection />
        </div>
      </div>
      
      <div className="mt-10 flex justify-between">
        <CustomButton 
          variant="outline" 
          onClick={prevStep}
          className="group"
        >
          <ArrowLeft className="mr-1 w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back
        </CustomButton>
        <CustomButton 
          onClick={nextStep} 
          disabled={!isStepValid()}
          className="group"
        >
          Continue to Financial Information
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </CustomButton>
      </div>
    </div>
  );
};

export default BusinessInfo;
