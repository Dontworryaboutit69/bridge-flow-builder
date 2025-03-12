
import { useApplication } from '@/lib/applicationContext';

const FinancialDetailsSection = () => {
  const { applicationData, updateApplicationData } = useApplication();
  
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
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="monthlyRevenue" className="block text-lg font-bold text-funding-dark">
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
          <label htmlFor="creditScore" className="block text-lg font-bold text-funding-dark">
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
        <label htmlFor="loanAmount" className="block text-lg font-bold text-funding-dark">
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
    </div>
  );
};

export default FinancialDetailsSection;
