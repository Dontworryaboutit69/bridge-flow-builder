
import { useApplication } from '@/lib/applicationContext';

const FinancialInfoSection = () => {
  const { applicationData } = useApplication();
  
  return (
    <div className="glass-card p-6 md:p-8 bg-white">
      <h3 className="text-lg font-medium text-funding-dark mb-4 flex items-center">
        <div className="w-6 h-6 rounded-full bg-funding-blue/10 text-funding-blue flex items-center justify-center mr-2">
          <span className="text-sm font-medium">3</span>
        </div>
        Financial Information
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Monthly Revenue:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.monthlyRevenue}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Credit Score:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.creditScore}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Funding Amount:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.loanAmount}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Use of Funds:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.useOfFunds}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Bank Name:</span>
          <span className="font-medium text-funding-dark text-right">{applicationData.bankName || 'Not provided'}</span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-funding-gray">Bank Account:</span>
          <span className="font-medium text-funding-dark text-right">
            {applicationData.accountNumber ? 
              '•••• ' + applicationData.accountNumber.slice(-4) 
              : 'Not provided'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinancialInfoSection;
