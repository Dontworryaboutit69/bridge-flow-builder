
import { useApplication } from '@/lib/applicationContext';
import CustomButton from '../../ui/CustomButton';
import { ArrowRight } from 'lucide-react';
import PersonalContactSection from './PersonalContactSection';
import PersonalAddressSection from './PersonalAddressSection';
import PersonalIdentitySection from './PersonalIdentitySection';

const PersonalInfo = () => {
  const { nextStep, isStepValid } = useApplication();

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
          Personal Information
        </h2>
        <p className="text-funding-gray">
          Please provide your contact details
        </p>
      </div>
      
      <div className="glass-card p-6 md:p-8 bg-white">
        <div className="space-y-6">
          <PersonalContactSection />
          <PersonalIdentitySection />
          <PersonalAddressSection />
        </div>
      </div>
      
      <div className="mt-10 flex justify-end">
        <CustomButton 
          onClick={nextStep} 
          disabled={!isStepValid()}
          className="group"
        >
          Continue to Business Information
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </CustomButton>
      </div>
    </div>
  );
};

export default PersonalInfo;
