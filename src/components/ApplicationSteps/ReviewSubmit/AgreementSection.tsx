
import { useApplication } from '@/lib/applicationContext';

const AgreementSection = () => {
  const { applicationData, updateApplicationData } = useApplication();
  
  return (
    <>
      <div className="p-6 bg-yellow-50 border border-yellow-100 rounded-lg">
        <div className="flex items-start space-x-2">
          <div className="flex-shrink-0 pt-0.5">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-medium text-funding-dark mb-1">Important Information</h4>
            <p className="text-xs text-funding-gray mb-3">
              By submitting this application:
            </p>
            <ul className="text-xs text-funding-gray space-y-1 list-disc pl-4">
              <li>You authorize Growth Path Advisory to obtain and verify information about you, including credit reports.</li>
              <li>You understand this is not a guarantee of funding approval.</li>
              <li>You certify all information provided is accurate and complete.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="agreeInformationCorrect"
              type="checkbox"
              className="h-4 w-4 text-funding-blue rounded"
              checked={applicationData.agreeInformationCorrect}
              onChange={(e) => updateApplicationData({ agreeInformationCorrect: e.target.checked })}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="agreeInformationCorrect" className="text-funding-gray">
              I certify that all information provided in this application is correct, accurate, and complete to the best of my knowledge.
            </label>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 text-funding-blue rounded"
              checked={applicationData.agreeToTerms}
              onChange={(e) => updateApplicationData({ agreeToTerms: e.target.checked })}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="text-funding-gray">
              I have reviewed the application and agree to the <a href="#terms" className="text-funding-blue hover:underline">Terms of Service</a> and <a href="#privacy" className="text-funding-blue hover:underline">Privacy Policy</a>. I consent to receive calls and messages regarding my application.
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgreementSection;
