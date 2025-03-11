
import { useApplication } from '@/lib/applicationContext';
import { useState, useEffect } from 'react';

const BusinessDateSelector = () => {
  const { applicationData, updateApplicationData } = useApplication();
  const [dateValue, setDateValue] = useState('');
  
  // Initialize the date input if there's already a value in applicationData
  useEffect(() => {
    if (applicationData.businessStartDate) {
      // Format date to YYYY-MM-DD for HTML date input
      const date = new Date(applicationData.businessStartDate);
      const formattedDate = date.toISOString().split('T')[0];
      setDateValue(formattedDate);
    }
  }, [applicationData.businessStartDate]);
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setDateValue(newDate);
    
    if (newDate) {
      // Store as ISO string in application data
      const date = new Date(newDate);
      updateApplicationData({ businessStartDate: date.toISOString() });
    } else {
      updateApplicationData({ businessStartDate: '' });
    }
  };
  
  return (
    <div className="space-y-2">
      <label className="block text-lg font-bold text-funding-dark text-center md:text-left md:text-sm md:font-medium">
        Business Start Date*
      </label>
      <input
        type="date"
        value={dateValue}
        onChange={handleDateChange}
        max={new Date().toISOString().split('T')[0]} // Limit to today
        className="w-full px-4 py-3 rounded-lg border text-left border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
      />
    </div>
  );
};

export default BusinessDateSelector;
