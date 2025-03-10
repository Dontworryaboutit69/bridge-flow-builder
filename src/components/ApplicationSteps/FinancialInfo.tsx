
import { useApplication } from '@/lib/applicationContext';
import CustomButton from '../ui/CustomButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FinancialInfo = () => {
  const { applicationData, updateApplicationData, nextStep, prevStep, isStepValid } = useApplication();
  
  const revenueOptions = [
    '$15,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000+'
  ];
  
  const creditOptions = [
    'Excellent (720+)',
    'Good (680-719)',
    'Fair (620-679)',
    'Poor (580-619)',
    'Bad (below 580)'
  ];
  
  const loanAmounts = [
    '$5,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000+'
  ];
  
  const fundUseOptions = [
    'Expansion/Growth',
    'Working Capital',
    'Equipment Purchase',
    'Inventory',
    'Debt Refinancing',
    'Marketing',
    'Hiring/Payroll',
    'Other'
  ];
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
          Financial Information
        </h2>
        <p className="text-funding-gray">
          Help us understand your financial needs
        </p>
      </div>
      
      <div className="glass-card p-6 md:p-8 bg-white">
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-funding-dark">
                Monthly Revenue*
              </label>
              <select
                id="monthlyRevenue"
                className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                value={applicationData.monthlyRevenue}
                onChange={(e) => updateApplicationData({ monthlyRevenue: e.target.value })}
              >
                <option value="">Select Monthly Revenue</option>
                {revenueOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="creditScore" className="block text-sm font-medium text-funding-dark">
                Credit Score*
              </label>
              <select
                id="creditScore"
                className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                value={applicationData.creditScore}
                onChange={(e) => updateApplicationData({ creditScore: e.target.value })}
              >
                <option value="">Select Credit Score</option>
                {creditOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="loanAmount" className="block text-sm font-medium text-funding-dark">
              Funding Amount Needed*
            </label>
            <select
              id="loanAmount"
              className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
              value={applicationData.loanAmount}
              onChange={(e) => updateApplicationData({ loanAmount: e.target.value })}
            >
              <option value="">Select Funding Amount</option>
              {loanAmounts.map((amount) => (
                <option key={amount} value={amount}>
                  {amount}
                </option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="useOfFunds" className="block text-sm font-medium text-funding-dark">
              Primary Use of Funds*
            </label>
            <select
              id="useOfFunds"
              className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
              value={applicationData.useOfFunds}
              onChange={(e) => updateApplicationData({ useOfFunds: e.target.value })}
            >
              <option value="">Select Primary Use</option>
              {fundUseOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="text-funding-dark font-medium mb-2">Bank Account Information (Optional)</h4>
            <p className="text-sm text-funding-gray mb-4">
              Providing bank information can speed up the funding process. This information is secured and encrypted.
            </p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="bankName" className="block text-sm font-medium text-funding-dark">
                  Bank Name
                </label>
                <input
                  type="text"
                  id="bankName"
                  className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                  placeholder="Enter bank name"
                  value={applicationData.bankName}
                  onChange={(e) => updateApplicationData({ bankName: e.target.value })}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="accountNumber" className="block text-sm font-medium text-funding-dark">
                    Account Number
                  </label>
                  <input
                    type="text"
                    id="accountNumber"
                    className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                    placeholder="Enter account number"
                    value={applicationData.accountNumber}
                    onChange={(e) => updateApplicationData({ accountNumber: e.target.value.replace(/[^\d]/g, '') })}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="routingNumber" className="block text-sm font-medium text-funding-dark">
                    Routing Number
                  </label>
                  <input
                    type="text"
                    id="routingNumber"
                    className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                    placeholder="Enter routing number"
                    value={applicationData.routingNumber}
                    onChange={(e) => updateApplicationData({ routingNumber: e.target.value.replace(/[^\d]/g, '').substring(0, 9) })}
                    maxLength={9}
                  />
                </div>
              </div>
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
          Continue to Review & Submit
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </CustomButton>
      </div>
    </div>
  );
};

export default FinancialInfo;
