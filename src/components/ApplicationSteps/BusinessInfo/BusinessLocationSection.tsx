
import { useApplication } from '@/lib/applicationContext';

const BusinessLocationSection = () => {
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
    <div className="space-y-2">
      <label htmlFor="businessAddress" className="block text-lg font-bold text-funding-dark">
        Business Street Address*
      </label>
      <input
        type="text"
        id="businessAddress"
        className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
        placeholder="Enter business street address"
        value={applicationData.businessAddress}
        onChange={(e) => updateApplicationData({ businessAddress: e.target.value })}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div className="space-y-2">
          <label htmlFor="businessCity" className="block text-lg font-bold text-funding-dark">
            City*
          </label>
          <input
            type="text"
            id="businessCity"
            className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
            placeholder="Enter city"
            value={applicationData.businessCity}
            onChange={(e) => updateApplicationData({ businessCity: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="businessState" className="block text-lg font-bold text-funding-dark">
            State*
          </label>
          <select
            id="businessState"
            className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
            value={applicationData.businessState}
            onChange={(e) => updateApplicationData({ businessState: e.target.value })}
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
          <label htmlFor="businessZipCode" className="block text-lg font-bold text-funding-dark">
            ZIP Code*
          </label>
          <input
            type="text"
            id="businessZipCode"
            className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
            placeholder="Enter ZIP code"
            value={applicationData.businessZipCode}
            onChange={(e) => updateApplicationData({ businessZipCode: e.target.value.replace(/[^\d]/g, '').substring(0, 5) })}
            maxLength={5}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessLocationSection;
