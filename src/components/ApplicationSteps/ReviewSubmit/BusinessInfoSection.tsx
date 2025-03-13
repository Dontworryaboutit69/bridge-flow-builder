
import { useApplication } from '@/lib/applicationContext';

const BusinessInfoSection = () => {
  const { applicationData } = useApplication();
  
  return (
    <div className="glass-card p-6 md:p-8 bg-white">
      <h3 className="text-lg font-medium text-funding-dark mb-4 flex items-center">
        <div className="w-6 h-6 rounded-full bg-funding-blue/10 text-funding-blue flex items-center justify-center mr-2">
          <span className="text-sm font-medium">2</span>
        </div>
        Business Information
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Business Name:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.businessName}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Business Type:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.businessType}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">EIN Number:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.einNumber}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Ownership Percentage:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.ownershipPercentage}%</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Industry:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.industry}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Time in Business:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.timeInBusiness}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Employees:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.employeeCount || 'Not specified'}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Website:</span>
          <span className="font-medium text-funding-dark text-right break-all">{applicationData.websiteUrl || 'Not specified'}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Business Address:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.businessAddress}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Business Location:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.businessCity}, {applicationData.businessState} {applicationData.businessZipCode}</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoSection;
