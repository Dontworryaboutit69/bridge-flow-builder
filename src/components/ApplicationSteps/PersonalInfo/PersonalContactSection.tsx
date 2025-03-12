
import { useApplication } from '@/lib/applicationContext';

const PersonalContactSection = () => {
  const { applicationData, updateApplicationData } = useApplication();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label htmlFor="firstName" className="block text-lg font-bold text-funding-dark">
          First Name*
        </label>
        <input
          type="text"
          id="firstName"
          className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
          placeholder="Enter first name"
          value={applicationData.firstName}
          onChange={(e) => updateApplicationData({ firstName: e.target.value })}
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="lastName" className="block text-lg font-bold text-funding-dark">
          Last Name*
        </label>
        <input
          type="text"
          id="lastName"
          className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
          placeholder="Enter last name"
          value={applicationData.lastName}
          onChange={(e) => updateApplicationData({ lastName: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-lg font-bold text-funding-dark">
          Email Address*
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-lg border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
          placeholder="Enter email address"
          value={applicationData.email}
          onChange={(e) => updateApplicationData({ email: e.target.value })}
        />
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
