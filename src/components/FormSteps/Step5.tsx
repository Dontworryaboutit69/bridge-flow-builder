
import { useForm } from '@/lib/formContext';
import Button from '../ui/Button';
import { ArrowLeft, Check } from 'lucide-react';

const Step5 = () => {
  const { 
    formData, 
    updateFormData, 
    prevStep, 
    isStepValid, 
    submitForm, 
    isSubmitting,
    submitSuccess 
  } = useForm();
  
  return (
    <div className="w-full max-w-xl mx-auto animate-fade-in">
      {!submitSuccess ? (
        <>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
              Last Step: Contact Details
            </h2>
            <p className="text-funding-gray">
              We'll use these to send your funding options
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-funding-dark">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => updateFormData({ email: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-funding-dark">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-xl border border-funding-light-gray focus:border-funding-blue focus:ring-1 focus:ring-funding-blue/30 outline-none transition-all"
                placeholder="(XXX) XXX-XXXX"
                value={formData.phone}
                onChange={(e) => updateFormData({ phone: e.target.value.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3').trim() })}
              />
              <p className="text-xs text-funding-gray mt-1">
                Standard rates apply. We'll never spam you.
              </p>
            </div>
            
            <div className="glass-card p-5 border border-funding-blue/20">
              <h4 className="font-medium text-funding-dark mb-2">Pre-Qualification Summary</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-funding-gray">Funding Amount:</span>
                  <span className="font-medium text-funding-dark">{formData.loanAmount}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-funding-gray">Business:</span>
                  <span className="font-medium text-funding-dark">{formData.businessName}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-funding-gray">Monthly Revenue:</span>
                  <span className="font-medium text-funding-dark">{formData.monthlyRevenue}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-funding-gray">Time in Business:</span>
                  <span className="font-medium text-funding-dark">{formData.timeInBusiness}</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  checked
                  className="h-4 w-4 text-funding-blue rounded"
                  readOnly
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-funding-gray">
                  By submitting, I agree to the <a href="#" className="text-funding-blue hover:underline">Terms of Service</a> and <a href="#" className="text-funding-blue hover:underline">Privacy Policy</a>. I consent to receive calls and SMS messages.
                </label>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex justify-between">
            <Button 
              variant="outline" 
              onClick={prevStep}
              className="group"
              disabled={isSubmitting}
            >
              <ArrowLeft className="mr-1 w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back
            </Button>
            <Button 
              onClick={submitForm}
              disabled={!isStepValid() || isSubmitting}
              className="group"
              isLoading={isSubmitting}
            >
              Submit Application
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center p-8 animate-fade-in">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-4">
            Application Submitted!
          </h2>
          <p className="text-funding-gray mb-8 max-w-md mx-auto">
            Thank you for your application. One of our funding advisors will contact you shortly to discuss your options.
          </p>
          <div className="glass-card p-6 max-w-md mx-auto">
            <h4 className="font-medium text-lg text-funding-dark mb-4">What happens next?</h4>
            <ol className="space-y-4 text-left">
              <li className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-sm mr-3 mt-0.5">
                  1
                </div>
                <span className="text-funding-dark">
                  Our team reviews your application (usually within 1 hour)
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-sm mr-3 mt-0.5">
                  2
                </div>
                <span className="text-funding-dark">
                  A funding advisor contacts you to discuss options
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-sm mr-3 mt-0.5">
                  3
                </div>
                <span className="text-funding-dark">
                  Complete final paperwork and receive funding in as little as 24 hours
                </span>
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step5;
