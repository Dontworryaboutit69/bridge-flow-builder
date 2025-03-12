import { useForm } from '@/lib/formContext';
import CustomButton from '../ui/CustomButton';
import { ArrowLeft, Check, CalendarClock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Step5 = () => {
  const {
    formData,
    prevStep,
    isStepValid,
    submitForm,
    isSubmitting,
    submitSuccess,
    isDisqualified
  } = useForm();
  const schedulingLink = "https://api.leadconnectorhq.com/widget/bookings/soniab";
  const handleScheduleAppointment = () => {
    window.location.href = schedulingLink;
  };
  return <div className="w-full max-w-xl mx-auto animate-fade-in">
      {!submitSuccess && !isDisqualified ? <>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
              Review Your Information
            </h2>
            <p className="text-funding-gray">
              Please verify your details before checking your pre-qualification status
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-5 border border-funding-blue/20">
              <h4 className="font-medium text-funding-dark mb-2 text-center">Pre-Qualification Summary</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between items-baseline">
                  <span className="text-funding-gray">Funding Amount:</span>
                  <span className="font-medium text-funding-dark text-right">{formData.loanAmount}</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-funding-gray">Business:</span>
                  <span className="font-medium text-funding-dark text-right">{formData.businessName}</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-funding-gray">Industry:</span>
                  <span className="font-medium text-funding-dark text-right">{formData.industry}</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-funding-gray">Needed By:</span>
                  <span className="font-medium text-funding-dark text-right">{formData.capitalTimeframe}</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-funding-gray">Monthly Revenue:</span>
                  <span className="font-medium text-funding-dark text-right">{formData.monthlyRevenue}</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-funding-gray">Time in Business:</span>
                  <span className="font-medium text-funding-dark text-right">{formData.timeInBusiness}</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-funding-gray">Name:</span>
                  <span className="font-medium text-funding-dark text-right">{formData.firstName} {formData.lastName}</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-funding-gray">Email:</span>
                  <span className="font-medium text-funding-dark text-right break-all">{formData.email}</span>
                </li>
                <li className="flex justify-between items-baseline">
                  <span className="text-funding-gray">Phone:</span>
                  <span className="font-medium text-funding-dark text-right">{formData.phone}</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="terms" type="checkbox" checked className="h-4 w-4 text-funding-blue rounded" readOnly />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-funding-gray">
                  By submitting, I agree to the <a href="#terms" className="text-funding-blue hover:underline">Terms of Service</a> and <a href="#privacy" className="text-funding-blue hover:underline">Privacy Policy</a>. I consent to receive calls and SMS messages.
                </label>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex justify-between gap-4">
            <CustomButton variant="outline" onClick={prevStep} className="group" disabled={isSubmitting}>
              <ArrowLeft className="mr-1 w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back
            </CustomButton>
            <CustomButton onClick={submitForm} disabled={!isStepValid() || isSubmitting} className="group" isLoading={isSubmitting}>
              Check Pre-Qualification
            </CustomButton>
          </div>
        </> : submitSuccess && !isDisqualified ? <div className="text-center p-8 animate-fade-in">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-4">
            Congratulations! You Pre-Qualify
          </h2>
          <p className="text-funding-gray mb-8 max-w-lg mx-auto">
            Great news! Based on your information, you pre-qualify for business funding with Growth Path Advisory. The next step is to complete your full funding application.
          </p>
          
          <div className="glass-card p-5 w-full mx-auto mb-10 bg-gradient-to-br from-funding-blue/5 to-funding-light-blue/10">
            <h4 className="font-medium text-lg text-funding-dark mb-6">Next Steps</h4>
            <ol className="space-y-5 text-left">
              <li className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-sm mr-4">
                  1
                </div>
                <div>
                  <h5 className="font-medium text-funding-dark mb-1">Complete Full Application</h5>
                  <p className="text-sm text-funding-gray">Submit your detailed business funding application.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-sm mr-4">
                  2
                </div>
                <div>
                  <h5 className="font-medium text-funding-dark mb-1">Document Collection</h5>
                  <p className="text-sm text-funding-gray">Provide necessary documentation to verify your information.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-sm mr-4">
                  3
                </div>
                <div>
                  <h5 className="font-medium text-funding-dark mb-1">Final Review & Funding</h5>
                  <p className="text-sm text-funding-gray">Get approved and receive your funds quickly.</p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="max-w-md mx-auto">
            <Link to="/application">
              <CustomButton size="lg" className="w-full">
                Start Full Application
              </CustomButton>
            </Link>
          </div>
        </div> : null /* If isDisqualified is true, nothing is rendered here as it's handled by DisqualifiedView */}
    </div>;
};

export default Step5;
