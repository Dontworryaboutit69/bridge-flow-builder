
import { useApplication } from '@/lib/applicationContext';
import CustomButton from '../ui/CustomButton';
import { ArrowRight } from 'lucide-react';

const PersonalInfo = () => {
  const { applicationData, updateApplicationData, nextStep, isStepValid } = useApplication();
  
  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-funding-dark">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                placeholder="Enter first name"
                value={applicationData.firstName}
                onChange={(e) => updateApplicationData({ firstName: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-funding-dark">
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                placeholder="Enter last name"
                value={applicationData.lastName}
                onChange={(e) => updateApplicationData({ lastName: e.target.value })}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-funding-dark">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                placeholder="Enter email address"
                value={applicationData.email}
                onChange={(e) => updateApplicationData({ email: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-funding-dark">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                placeholder="(XXX) XXX-XXXX"
                value={applicationData.phone}
                onChange={(e) => updateApplicationData({ phone: e.target.value.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3').trim() })}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="address" className="block text-sm font-medium text-funding-dark">
              Street Address*
            </label>
            <input
              type="text"
              id="address"
              className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
              placeholder="Enter street address"
              value={applicationData.address}
              onChange={(e) => updateApplicationData({ address: e.target.value })}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-medium text-funding-dark">
                City*
              </label>
              <input
                type="text"
                id="city"
                className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                placeholder="Enter city"
                value={applicationData.city}
                onChange={(e) => updateApplicationData({ city: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="state" className="block text-sm font-medium text-funding-dark">
                State*
              </label>
              <select
                id="state"
                className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                value={applicationData.state}
                onChange={(e) => updateApplicationData({ state: e.target.value })}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="zipCode" className="block text-sm font-medium text-funding-dark">
                ZIP Code*
              </label>
              <input
                type="text"
                id="zipCode"
                className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                placeholder="Enter ZIP code"
                value={applicationData.zipCode}
                onChange={(e) => updateApplicationData({ zipCode: e.target.value.replace(/[^\d]/g, '').substring(0, 5) })}
                maxLength={5}
              />
            </div>
          </div>
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
