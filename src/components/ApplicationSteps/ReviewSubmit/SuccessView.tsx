
import { Check } from 'lucide-react';

const SuccessView = () => {
  return (
    <div className="text-center p-8 animate-fade-in">
      <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
        <Check className="w-10 h-10 text-green-600" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-4">
        Application Submitted Successfully!
      </h2>
      <p className="text-funding-gray mb-8 max-w-lg mx-auto">
        Thank you for submitting your application to Growth Path Advisory. Redirecting you to the next steps...
      </p>
    </div>
  );
};

export default SuccessView;
