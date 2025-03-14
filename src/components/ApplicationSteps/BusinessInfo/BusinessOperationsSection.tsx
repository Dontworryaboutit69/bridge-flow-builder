import { useApplication } from '@/lib/applicationContext';
import { isValidUrl, formatWebsiteUrl } from '@/lib/validationUtils';
import { useState, useEffect } from 'react';

const BusinessOperationsSection = () => {
  const { applicationData, updateApplicationData } = useApplication();
  const [errors, setErrors] = useState({
    website: false,
  });
  
  const industries = [
    'Retail',
    'Food & Restaurant',
    'Professional Services',
    'Healthcare',
    'Construction',
    'Manufacturing',
    'Technology',
    'Transportation',
    'Real Estate',
    'Other'
  ];
  
  const timeOptions = [
    'Less than 6 months',
    '6-12 months',
    '1-2 years',
    '2-5 years',
    '5+ years'
  ];
  
  const employeeOptions = [
    '1-5 employees',
    '6-10 employees',
    '11-25 employees',
    '26-50 employees',
    '51-100 employees',
    '100+ employees'
  ];

  const handleWebsiteBlur = () => {
    if (applicationData.websiteUrl) {
      const formattedUrl = formatWebsiteUrl(applicationData.websiteUrl);
      updateApplicationData({ websiteUrl: formattedUrl });
      
      if (!isValidUrl(formattedUrl)) {
        setErrors(prev => ({ ...prev, website: true }));
      } else {
        setErrors(prev => ({ ...prev, website: false }));
      }
    }
  };

  const handleWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateApplicationData({ websiteUrl: value });
    
    if (value && !isValidUrl(value)) {
      setErrors(prev => ({ ...prev, website: true }));
    } else {
      setErrors(prev => ({ ...prev, website: false }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="industry" className="block text-lg font-bold text-funding-dark">
            Industry*
          </label>
          <select
            id="industry"
            className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
            value={applicationData.industry}
            onChange={(e) => updateApplicationData({ industry: e.target.value })}
          >
            <option value="">Select Industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="timeInBusiness" className="block text-lg font-bold text-funding-dark">
            Time in Business*
          </label>
          <select
            id="timeInBusiness"
            className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
            value={applicationData.timeInBusiness}
            onChange={(e) => updateApplicationData({ timeInBusiness: e.target.value })}
          >
            <option value="">Select Time in Business</option>
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="employeeCount" className="block text-lg font-bold text-funding-dark">
            Number of Employees
          </label>
          <select
            id="employeeCount"
            className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
            value={applicationData.employeeCount}
            onChange={(e) => updateApplicationData({ employeeCount: e.target.value })}
          >
            <option value="">Select Employee Count</option>
            {employeeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="websiteUrl" className="block text-lg font-bold text-funding-dark">
            Business Website
          </label>
          <input
            type="url"
            id="websiteUrl"
            className={`w-full px-4 py-3 rounded-lg border ${errors.website ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30' : 'border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30'} outline-none transition-all`}
            placeholder="https://www.example.com"
            value={applicationData.websiteUrl}
            onChange={handleWebsiteChange}
            onBlur={handleWebsiteBlur}
          />
          {errors.website && (
            <p className="text-red-500 text-sm mt-1">Please enter a valid website URL</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessOperationsSection;
