
import { useForm } from '@/lib/formContext';
import CustomButton from '../ui/CustomButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Step4 = () => {
  const { formData, updateFormData, nextStep, prevStep, isStepValid } = useForm();
  
  return (
    <div className="w-full max-w-xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
          About You
        </h2>
        <p className="text-funding-gray">
          Tell us who we'll be working with
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-lg font-bold text-funding-dark">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-3 rounded-xl border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={(e) => updateFormData({ firstName: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-lg font-bold text-funding-dark">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-3 rounded-xl border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={(e) => updateFormData({ lastName: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-lg font-bold text-funding-dark">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-xl border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-lg font-bold text-funding-dark">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-3 rounded-xl border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
            placeholder="(XXX) XXX-XXXX"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3').trim() })}
          />
          <p className="text-xs text-funding-gray mt-1">
            Standard rates apply. We'll never spam you.
          </p>
        </div>
        
        <div className="glass-card p-5 border border-funding-blue/20">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-funding-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-funding-dark">
                Your information is secure and will only be used to process your funding application. We'll never share your information without your permission.
              </p>
            </div>
          </div>
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
          Continue
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </CustomButton>
      </div>
    </div>
  );
};

export default Step4;
