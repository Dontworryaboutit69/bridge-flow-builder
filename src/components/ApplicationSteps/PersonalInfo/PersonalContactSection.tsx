
import { useApplication } from '@/lib/applicationContext';
import { isValidEmail, isValidTextOnly } from '@/lib/validationUtils';
import { useState } from 'react';

const PersonalContactSection = () => {
  const { applicationData, updateApplicationData } = useApplication();
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
  });

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateApplicationData({ firstName: value });
    
    // Validate only if there's text
    if (value && !isValidTextOnly(value)) {
      setErrors(prev => ({ ...prev, firstName: true }));
    } else {
      setErrors(prev => ({ ...prev, firstName: false }));
    }
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateApplicationData({ lastName: value });
    
    // Validate only if there's text
    if (value && !isValidTextOnly(value)) {
      setErrors(prev => ({ ...prev, lastName: true }));
    } else {
      setErrors(prev => ({ ...prev, lastName: false }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateApplicationData({ email: value });
    
    // Validate only if there's text
    if (value && !isValidEmail(value)) {
      setErrors(prev => ({ ...prev, email: true }));
    } else {
      setErrors(prev => ({ ...prev, email: false }));
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label htmlFor="firstName" className="block text-lg font-bold text-funding-dark">
          First Name*
        </label>
        <input
          type="text"
          id="firstName"
          className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30' : 'border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30'} outline-none transition-all`}
          placeholder="Enter first name"
          value={applicationData.firstName}
          onChange={handleFirstNameChange}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid name (letters only)</p>
        )}
      </div>
      
      <div className="space-y-2">
        <label htmlFor="lastName" className="block text-lg font-bold text-funding-dark">
          Last Name*
        </label>
        <input
          type="text"
          id="lastName"
          className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30' : 'border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30'} outline-none transition-all`}
          placeholder="Enter last name"
          value={applicationData.lastName}
          onChange={handleLastNameChange}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid name (letters only)</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-lg font-bold text-funding-dark">
          Email Address*
        </label>
        <input
          type="email"
          id="email"
          className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/30' : 'border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30'} outline-none transition-all`}
          placeholder="Enter email address"
          value={applicationData.email}
          onChange={handleEmailChange}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
        )}
      </div>
      
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-lg font-bold text-funding-dark">
          Phone Number*
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
          placeholder="(XXX) XXX-XXXX"
          value={applicationData.phone}
          onChange={(e) => updateApplicationData({ phone: e.target.value.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3').trim() })}
        />
      </div>
    </div>
  );
};

export default PersonalContactSection;
