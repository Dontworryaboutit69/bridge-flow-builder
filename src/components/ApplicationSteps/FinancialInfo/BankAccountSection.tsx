
import { useApplication } from '@/lib/applicationContext';

const BankAccountSection = () => {
  const { applicationData, updateApplicationData } = useApplication();
  
  return (
    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
      <h4 className="text-funding-dark font-medium mb-2">Bank Account Information (Optional)</h4>
      <p className="text-sm text-funding-gray mb-4">
        Providing bank information can speed up the funding process. This information is secured and encrypted.
      </p>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="bankName" className="block text-lg font-bold text-funding-dark">
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
            <label htmlFor="accountNumber" className="block text-lg font-bold text-funding-dark">
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
            <label htmlFor="routingNumber" className="block text-lg font-bold text-funding-dark">
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
  );
};

export default BankAccountSection;
