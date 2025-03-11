
import { useApplication } from '@/lib/applicationContext';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CreditScoreRange } from '@/types/documents';
import { useState } from 'react';

const PersonalIdentitySection = () => {
  const { applicationData, updateApplicationData } = useApplication();
  const [ssnMasked, setSsnMasked] = useState(true);

  const creditScoreRanges: CreditScoreRange[] = [
    'Below 600',
    '600-649',
    '650-699',
    '700-749',
    '750 or above'
  ];

  const formatSSN = (value: string) => {
    const numbersOnly = value.replace(/[^\d]/g, '');
    if (numbersOnly.length <= 3) {
      return numbersOnly;
    } else if (numbersOnly.length <= 5) {
      return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3)}`;
    } else {
      return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3, 5)}-${numbersOnly.slice(5, 9)}`;
    }
  };

  const toggleSSNVisibility = () => {
    setSsnMasked(!ssnMasked);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-funding-dark">
            Date of Birth*
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={`w-full px-4 py-3 rounded-lg border text-left border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all ${
                  !applicationData.dateOfBirth && 'text-funding-gray'
                }`}
              >
                {applicationData.dateOfBirth ? 
                  format(new Date(applicationData.dateOfBirth), 'PPP') : 
                  'Select date'}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={applicationData.dateOfBirth ? new Date(applicationData.dateOfBirth) : undefined}
                onSelect={(date) => updateApplicationData({ dateOfBirth: date?.toISOString() })}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-funding-dark">
            Credit Score Range*
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
            value={applicationData.creditScore}
            onChange={(e) => updateApplicationData({ creditScore: e.target.value as CreditScoreRange })}
          >
            <option value="">Select Credit Score Range</option>
            {creditScoreRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="socialSecurityNumber" className="block text-sm font-medium text-funding-dark">
            Social Security Number*
          </label>
          <div className="relative">
            <input
              type={ssnMasked ? "password" : "text"}
              id="socialSecurityNumber"
              className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
              placeholder="XXX-XX-XXXX"
              value={applicationData.socialSecurityNumber}
              onChange={(e) => updateApplicationData({ socialSecurityNumber: formatSSN(e.target.value) })}
              maxLength={11}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-funding-gray text-sm hover:text-funding-dark transition-colors"
              onClick={toggleSSNVisibility}
            >
              {ssnMasked ? "Show" : "Hide"}
            </button>
          </div>
          <p className="text-xs text-funding-gray">Your SSN is securely encrypted and never stored in plaintext.</p>
        </div>
      </div>
    </>
  );
};

export default PersonalIdentitySection;
