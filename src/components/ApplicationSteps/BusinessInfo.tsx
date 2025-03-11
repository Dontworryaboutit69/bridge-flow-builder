import { useApplication } from '@/lib/applicationContext';
import CustomButton from '../ui/CustomButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

const BusinessInfo = () => {
  const { applicationData, updateApplicationData, nextStep, prevStep, isStepValid } = useApplication();
  
  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  
  const businessTypes = [
    'Sole Proprietorship',
    'Partnership',
    'Limited Liability Company (LLC)',
    'Corporation',
    'S Corporation',
    'Nonprofit Organization',
    'Other'
  ];
  
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="businessName" className="block text-sm font-medium text-funding-dark">
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
              <label htmlFor="businessType" className="block text-sm font-medium text-funding-dark">
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
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-funding-dark">
              Business Start Date*
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={`w-full px-4 py-3 rounded-lg border text-left border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all ${
                    !applicationData.businessStartDate && 'text-funding-gray'
                  }`}
                >
                  {applicationData.businessStartDate ? 
                    format(new Date(applicationData.businessStartDate), 'PPP') : 
                    'Select start date'}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={applicationData.businessStartDate ? new Date(applicationData.businessStartDate) : undefined}
                  onSelect={(date) => updateApplicationData({ businessStartDate: date?.toISOString() })}
                  disabled={(date) => date > new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="einNumber" className="block text-sm font-medium text-funding-dark">
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
              <label htmlFor="ownershipPercentage" className="block text-sm font-medium text-funding-dark">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="industry" className="block text-sm font-medium text-funding-dark">
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
              <label htmlFor="timeInBusiness" className="block text-sm font-medium text-funding-dark">
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
              <label htmlFor="employeeCount" className="block text-sm font-medium text-funding-dark">
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
              <label htmlFor="websiteUrl" className="block text-sm font-medium text-funding-dark">
                Business Website
              </label>
              <input
                type="url"
                id="websiteUrl"
                className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                placeholder="https://www.example.com"
                value={applicationData.websiteUrl}
                onChange={(e) => updateApplicationData({ websiteUrl: e.target.value })}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="businessAddress" className="block text-sm font-medium text-funding-dark">
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
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="businessCity" className="block text-sm font-medium text-funding-dark">
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
              <label htmlFor="businessState" className="block text-sm font-medium text-funding-dark">
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
              <label htmlFor="businessZipCode" className="block text-sm font-medium text-funding-dark">
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
