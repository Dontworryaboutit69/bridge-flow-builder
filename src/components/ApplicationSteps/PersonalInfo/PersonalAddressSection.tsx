
import { useApplication } from '@/lib/applicationContext';

const PersonalAddressSection = () => {
  const { applicationData, updateApplicationData } = useApplication();

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
    <>
      <div className="space-y-2">
        <label htmlFor="address" className="block text-sm font-medium text-funding-dark">
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
              <option key={state} value={state}>{state}</option>
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
    </>
  );
};

export default PersonalAddressSection;
