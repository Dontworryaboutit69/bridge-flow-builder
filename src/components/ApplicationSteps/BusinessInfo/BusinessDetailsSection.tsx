
import { useApplication } from '@/lib/applicationContext';

const BusinessDetailsSection = () => {
  const { applicationData, updateApplicationData } = useApplication();
  
  const businessTypes = [
    'Sole Proprietorship',
    'Partnership',
    'Limited Liability Company (LLC)',
    'Corporation',
    'S Corporation',
    'Nonprofit Organization',
    'Other'
  ];
  
  const formatEIN = (value: string) => {
    const numbersOnly = value.replace(/[^\d]/g, '');
    if (numbersOnly.length <= 2) {
      return numbersOnly;
    } else {
      return `${numbersOnly.slice(0, 2)}-${numbersOnly.slice(2, 9)}`;
    }
  };
  
  const formatOwnershipPercentage = (value: string) => {
    const numbersOnly = value.replace(/[^\d]/g, '');
    const percentage = parseInt(numbersOnly, 10);
    
    if (isNaN(percentage)) {
      return '';
    }
    
    return Math.min(percentage, 100).toString();
  };
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="businessName" className="block text-lg font-bold text-funding-dark">
            Business Name*
          </label>
          <input
            type="text"
            id="businessName"
            className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
            placeholder="Enter business name"
            value={applicationData.businessName}
            onChange={(e) => updateApplicationData({ businessName: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="businessType" className="block text-lg font-bold text-funding-dark">
            Business Type*
          </label>
          <select
            id="businessType"
            className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
            value={applicationData.businessType}
            onChange={(e) => updateApplicationData({ businessType: e.target.value })}
          >
            <option value="">Select Business Type</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="einNumber" className="block text-lg font-bold text-funding-dark">
            EIN Number*
          </label>
          <input
            type="text"
            id="einNumber"
            className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
            placeholder="XX-XXXXXXX"
            value={applicationData.einNumber}
            onChange={(e) => updateApplicationData({ einNumber: formatEIN(e.target.value) })}
            maxLength={10}
          />
          <p className="text-xs text-funding-gray">Your Employer Identification Number (Tax ID)</p>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="ownershipPercentage" className="block text-lg font-bold text-funding-dark">
            Ownership Percentage*
          </label>
          <div className="relative">
            <input
              type="text"
              id="ownershipPercentage"
              className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
              placeholder="0-100"
              value={applicationData.ownershipPercentage}
              onChange={(e) => updateApplicationData({ ownershipPercentage: formatOwnershipPercentage(e.target.value) })}
              maxLength={3}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-funding-gray">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailsSection;
