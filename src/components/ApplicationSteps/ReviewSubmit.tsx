
import { useApplication } from '@/lib/applicationContext';
import CustomButton from '../ui/CustomButton';
import { ArrowLeft, Check, CalendarClock } from 'lucide-react';
import { useEffect } from 'react';

const ReviewSubmit = () => {
  const { 
    applicationData, 
    updateApplicationData, 
    prevStep, 
    isStepValid, 
    submitApplication, 
    isSubmitting,
    submitSuccess 
  } = useApplication();
  
  // Handle scheduling an appointment
  const handleScheduleAppointment = () => {
    window.location.href = 'https://calendly.com/growthpathadvisory/30min';
  };
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [submitSuccess]);
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      {!submitSuccess ? (
        <>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-3">
              Review & Submit Your Application
            </h2>
            <p className="text-funding-gray">
              Please review your information before submitting
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6 md:p-8 bg-white">
              <h3 className="text-lg font-medium text-funding-dark mb-4 flex items-center">
                <div className="w-6 h-6 rounded-full bg-funding-blue/10 text-funding-blue flex items-center justify-center mr-2">
                  <span className="text-sm font-medium">1</span>
                </div>
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-funding-gray">Full Name:</span>
                  <span className="font-medium text-funding-dark">{applicationData.firstName} {applicationData.lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Email:</span>
                  <span className="font-medium text-funding-dark">{applicationData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Phone:</span>
                  <span className="font-medium text-funding-dark">{applicationData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Address:</span>
                  <span className="font-medium text-funding-dark">{applicationData.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">City:</span>
                  <span className="font-medium text-funding-dark">{applicationData.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">State/ZIP:</span>
                  <span className="font-medium text-funding-dark">{applicationData.state}, {applicationData.zipCode}</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8 bg-white">
              <h3 className="text-lg font-medium text-funding-dark mb-4 flex items-center">
                <div className="w-6 h-6 rounded-full bg-funding-blue/10 text-funding-blue flex items-center justify-center mr-2">
                  <span className="text-sm font-medium">2</span>
                </div>
                Business Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-funding-gray">Business Name:</span>
                  <span className="font-medium text-funding-dark">{applicationData.businessName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Business Type:</span>
                  <span className="font-medium text-funding-dark">{applicationData.businessType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Industry:</span>
                  <span className="font-medium text-funding-dark">{applicationData.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Time in Business:</span>
                  <span className="font-medium text-funding-dark">{applicationData.timeInBusiness}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Employees:</span>
                  <span className="font-medium text-funding-dark">{applicationData.employeeCount || 'Not specified'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Website:</span>
                  <span className="font-medium text-funding-dark">{applicationData.websiteUrl || 'Not specified'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Business Address:</span>
                  <span className="font-medium text-funding-dark">{applicationData.businessAddress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Business Location:</span>
                  <span className="font-medium text-funding-dark">{applicationData.businessCity}, {applicationData.businessState} {applicationData.businessZipCode}</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8 bg-white">
              <h3 className="text-lg font-medium text-funding-dark mb-4 flex items-center">
                <div className="w-6 h-6 rounded-full bg-funding-blue/10 text-funding-blue flex items-center justify-center mr-2">
                  <span className="text-sm font-medium">3</span>
                </div>
                Financial Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-funding-gray">Monthly Revenue:</span>
                  <span className="font-medium text-funding-dark">{applicationData.monthlyRevenue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Credit Score:</span>
                  <span className="font-medium text-funding-dark">{applicationData.creditScore}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Funding Amount:</span>
                  <span className="font-medium text-funding-dark">{applicationData.loanAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Use of Funds:</span>
                  <span className="font-medium text-funding-dark">{applicationData.useOfFunds}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Bank Name:</span>
                  <span className="font-medium text-funding-dark">{applicationData.bankName || 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-funding-gray">Bank Account:</span>
                  <span className="font-medium text-funding-dark">
                    {applicationData.accountNumber ? 
                      '•••• ' + applicationData.accountNumber.slice(-4) 
                      : 'Not provided'}
                  </span>
                </div>
              </div>
            </div>
            
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
          
          <div className="mt-10 flex justify-between">
            <CustomButton 
              variant="outline" 
              onClick={prevStep}
              className="group"
              disabled={isSubmitting}
            >
              <ArrowLeft className="mr-1 w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back
            </CustomButton>
            <CustomButton 
              onClick={submitApplication}
              disabled={!isStepValid() || isSubmitting}
              className="group"
              isLoading={isSubmitting}
            >
              Submit Application
            </CustomButton>
          </div>
        </>
      ) : (
        <div className="text-center p-8 animate-fade-in">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-4">
            Application Submitted Successfully!
          </h2>
          <p className="text-funding-gray mb-8 max-w-lg mx-auto">
            Thank you for submitting your application to Growth Path Advisory. One of our funding specialists will review your information and contact you shortly.
          </p>
          
          <div className="glass-card p-8 max-w-lg mx-auto mb-10 bg-gradient-to-br from-funding-blue/5 to-funding-light-blue/10">
            <h4 className="font-medium text-lg text-funding-dark mb-6">What Happens Next?</h4>
            <ol className="space-y-5 text-left">
              <li className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-sm mr-4">
                  1
                </div>
                <div>
                  <h5 className="font-medium text-funding-dark mb-1">Application Review</h5>
                  <p className="text-sm text-funding-gray">Your application will be reviewed by our team within 24 hours.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-sm mr-4">
                  2
                </div>
                <div>
                  <h5 className="font-medium text-funding-dark mb-1">Funding Consultation</h5>
                  <p className="text-sm text-funding-gray">A funding specialist will contact you to discuss your options and requirements.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-sm mr-4">
                  3
                </div>
                <div>
                  <h5 className="font-medium text-funding-dark mb-1">Final Approval & Funding</h5>
                  <p className="text-sm text-funding-gray">Upon approval, you'll receive your funds in as little as 24 hours.</p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="max-w-md mx-auto">
            <p className="font-medium text-funding-dark mb-4">Want to speak with a funding advisor right away?</p>
            <CustomButton 
              onClick={handleScheduleAppointment}
              size="lg"
              className="w-full"
            >
              <CalendarClock className="mr-2 w-5 h-5" />
              Schedule a Call Now
            </CustomButton>
            
            <p className="mt-6 text-sm text-funding-gray">
              Or call us directly at <a href="tel:+15735333894" className="text-funding-blue font-medium">1-573-533-3894</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewSubmit;
