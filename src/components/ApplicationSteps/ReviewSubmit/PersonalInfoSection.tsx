
import { useApplication } from '@/lib/applicationContext';
import { formatDate } from '@/lib/documentUtils';

const PersonalInfoSection = () => {
  const { applicationData } = useApplication();
  
  return (
    <div className="glass-card p-6 md:p-8 bg-white">
      <h3 className="text-lg font-medium text-funding-dark mb-4 flex items-center">
        <div className="w-6 h-6 rounded-full bg-funding-blue/10 text-funding-blue flex items-center justify-center mr-2">
          <span className="text-sm font-medium">1</span>
        </div>
        Personal Information
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Full Name:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.firstName} {applicationData.lastName}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Email:</span>
          <span className="font-medium text-funding-dark text-right break-all">{applicationData.email}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Phone:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.phone}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Date of Birth:</span>
          <span className="font-medium text-funding-dark text-right">{formatDate(applicationData.dateOfBirth)}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">SSN:</span>
          <span className="font-medium text-funding-dark text-right">XXX-XX-{applicationData.socialSecurityNumber.slice(-4)}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Address:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.address}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">City:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.city}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">State/ZIP:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.state}, {applicationData.zipCode}</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
