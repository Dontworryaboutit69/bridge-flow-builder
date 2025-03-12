
import { useApplication } from '@/lib/applicationContext';
import { isValidTextOnly } from '@/lib/validationUtils';
import { useState } from 'react';

const PersonalAddressSection = () => {
  const { applicationData, updateApplicationData } = useApplication();
  const [errors, setErrors] = useState({
    city: false,
  });

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateApplicationData({ city: value });
    
    // Validate only if there's text
    if (value && !isValidTextOnly(value)) {
      setErrors(prev => ({ ...prev, city: true }));
    } else {
      setErrors(prev => ({ ...prev, city: false }));
    }
  };

  return (
    <>
      <div className="space-y-2">
        <label htmlFor="address" className="block text-lg font-bold text-funding-dark">
          Street Address*
        </label>
        <input
          type="text"
          id="address"
          className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
          placeholder="Enter your street address"
          value={applicationData.address}
          onChange={(e) => updateApplicationData({ address: e.target.value })}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label htmlFor="city" className="block text-lg font-bold text-funding-dark">
            City*
          </label>
          <input
            type="text"
            id="city"
            className={`w-full px-4 py-3 rounded-lg border ${errors.city ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30' : 'border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30'} outline-none transition-all`}
            placeholder="Enter city"
            value={applicationData.city}
            onChange={handleCityChange}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">Please enter a valid city name</p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="state" className="block text-lg font-bold text-funding-dark">
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
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="zipCode" className="block text-lg font-bold text-funding-dark">
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
    </>
  );
};

export default PersonalAddressSection;
