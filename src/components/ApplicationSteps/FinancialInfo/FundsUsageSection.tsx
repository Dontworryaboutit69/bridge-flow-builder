
import { useApplication } from '@/lib/applicationContext';

const FundsUsageSection = () => {
  const { applicationData, updateApplicationData } = useApplication();
  
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
    <div className="space-y-2">
      <label htmlFor="useOfFunds" className="block text-lg font-bold text-funding-dark">
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
  );
};

export default FundsUsageSection;
