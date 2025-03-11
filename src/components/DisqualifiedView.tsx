
import { ExternalLink } from 'lucide-react';
import CustomButton from './ui/CustomButton';

const DisqualifiedView = () => {
  const handleRedirect = () => {
    window.location.href = "https://bankbreezy.com/funding/?refcode=BB306164&partner-id=BB&agent-name=Sonia%20Barriera&agent-email=sibkk2012@gmail.com";
  };

  return (
    <div className="text-center p-8 animate-fade-in">
      <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-4">
        Great News!
      </h2>
      <p className="text-funding-gray mb-8 max-w-md mx-auto">
        Even though you don't qualify for funding through Growth Path Advisory, our partner program works with newer businesses or businesses doing under $15,000 in average monthly revenue.
      </p>
      
      <div className="glass-card p-6 max-w-md mx-auto mb-8 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
        <h4 className="font-medium text-lg text-funding-dark mb-4">Why we're redirecting you:</h4>
        <ul className="space-y-4 text-left">
          <li className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-0.5">
              <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-funding-dark">
              Growth Path Advisory specializes in businesses with $15k+ monthly revenue
            </span>
          </li>
          <li className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-0.5">
              <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-funding-dark">
              Our trusted partners at BankBreezy offer solutions specifically for growing businesses
            </span>
          </li>
          <li className="flex items-start">
            <div className="bg-amber-100 p-1 rounded-full mr-3 mt-0.5">
              <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-funding-dark">
              You'll get access to resources designed for your current business stage
            </span>
          </li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <CustomButton 
          onClick={handleRedirect}
          size="lg"
          className="group"
        >
          Continue to BankBreezy
          <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </CustomButton>
        
        <p className="text-sm text-funding-gray">
          Feel free to contact us directly at <a href="tel:15735333894" className="text-funding-blue hover:underline">1-573-533-3894</a> if you have any questions.
        </p>
      </div>
    </div>
  );
};

export default DisqualifiedView;
