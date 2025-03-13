
import { useApplication } from '@/lib/applicationContext';
import { Input } from '../../ui/input';

const DigitalSignatureSection = () => {
  const { applicationData, updateApplicationData } = useApplication();
  
  return (
    <div className="glass-card p-6 md:p-8 bg-white border-t-4 border-funding-blue">
      <h3 className="text-lg font-medium text-funding-dark mb-4 flex items-center">
        <div className="w-6 h-6 rounded-full bg-funding-blue/10 text-funding-blue flex items-center justify-center mr-2">
          <span className="text-sm font-medium">4</span>
        </div>
        Digital Signature
      </h3>
      
      <div className="space-y-4">
        <p className="text-sm text-funding-gray">
          By typing your full name below, you are electronically signing this application.
        </p>
        
        <div className="space-y-2">
          <label htmlFor="signature" className="block text-sm font-medium text-funding-dark">
            Full Name (as signature)
          </label>
          <Input
            id="signature"
            type="text"
            placeholder="Type your full legal name"
            value={applicationData.signature}
            onChange={(e) => updateApplicationData({ signature: e.target.value })}
            className="w-full border border-funding-light-gray focus:border-funding-blue"
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalSignatureSection;
