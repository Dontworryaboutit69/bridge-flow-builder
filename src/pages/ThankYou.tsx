
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import CustomButton from '@/components/ui/CustomButton';
import { CheckCircle, ArrowRight, FileText, CalendarClock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const ThankYou = () => {
  const location = useLocation();
  const schedulingLink = "https://api.leadconnectorhq.com/widget/bookings/soniab";
  const [documentsSubmitted, setDocumentsSubmitted] = useState(false);
  
  useEffect(() => {
    // Check if documents were just submitted
    const searchParams = new URLSearchParams(location.search);
    const docsSubmitted = searchParams.get('docs_submitted') === 'true';
    setDocumentsSubmitted(docsSubmitted);
  }, [location]);
  
  const handleScheduleAppointment = () => {
    window.location.href = schedulingLink;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-36 pb-8 md:pb-16 bg-funding-light-gray/30 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-soft-peach/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-soft-blue/20 rounded-full blur-3xl"></div>
          <div className="dot-pattern"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-5 md:px-10 relative">
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
              {documentsSubmitted ? "Documents Submitted Successfully!" : "Application Submitted Successfully!"}
            </h1>
            
            <p className="text-funding-gray mb-8 max-w-2xl mx-auto">
              {documentsSubmitted 
                ? "Thank you for submitting your documents to Growth Path Advisory. Your documents have been received and are being reviewed by our team."
                : "Thank you for submitting your funding application to Growth Path Advisory. We're excited to help your business grow. Your application has been received and is being processed."}
            </p>
            
            <div className="max-w-xl mx-auto">
              <div className="bg-funding-blue/5 rounded-xl p-6 border border-funding-blue/10 mb-8">
                <h2 className="text-xl font-bold text-funding-dark mb-4">Application Reference</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">
                  <div>
                    <p className="text-sm text-funding-gray">Application ID</p>
                    <p className="font-medium text-funding-dark">GPA-{Math.floor(Math.random() * 90000) + 10000}</p>
                  </div>
                  <div>
                    <p className="text-sm text-funding-gray">Submission Date</p>
                    <p className="font-medium text-funding-dark">{new Date().toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-funding-gray">Funding Amount</p>
                    <p className="font-medium text-funding-dark">$50,000 - $100,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-funding-gray">Status</p>
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      <span className="font-medium text-funding-dark">
                        {documentsSubmitted 
                          ? "Documents Under Review" 
                          : "Pending Document Verification"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-funding-dark mb-4">Next Steps</h3>
              
              <div className="space-y-6 mb-10">
                {!documentsSubmitted ? (
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-xl mr-5">
                      1
                    </div>
                    <div className="text-left pt-1">
                      <h4 className="font-medium text-lg text-funding-dark mb-1">Document Collection</h4>
                      <p className="text-funding-gray mb-3">
                        We need a few documents to verify your business information and process your application quickly.
                      </p>
                      <Link to="/documents">
                        <CustomButton 
                          className="group"
                        >
                          <FileText className="mr-2 w-5 h-5" />
                          Upload Documents Now
                          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </CustomButton>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 mr-5">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div className="text-left pt-1">
                      <h4 className="font-medium text-lg text-funding-dark mb-1">Document Collection</h4>
                      <p className="text-funding-gray">
                        Your documents have been successfully submitted and are being reviewed by our team.
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-xl mr-5">
                    {documentsSubmitted ? '1' : '2'}
                  </div>
                  <div className="text-left pt-1">
                    <h4 className="font-medium text-lg text-funding-dark mb-1">Application Review</h4>
                    <p className="text-funding-gray mb-3">
                      A funding specialist will review your {documentsSubmitted ? 'documents' : 'application and documents'} within 24-48 hours.
                    </p>
                    <CustomButton 
                      variant="outline"
                      onClick={handleScheduleAppointment}
                      className="group"
                    >
                      <CalendarClock className="mr-2 w-5 h-5" />
                      Schedule a Consultation
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </CustomButton>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-funding-blue/10 text-funding-blue font-medium text-xl mr-5">
                    {documentsSubmitted ? '2' : '3'}
                  </div>
                  <div className="text-left pt-1">
                    <h4 className="font-medium text-lg text-funding-dark mb-1">Funding Decision</h4>
                    <p className="text-funding-gray">
                      You'll receive a funding decision and available options. Upon approval, funds can be deposited as quickly as 24 hours.
                    </p>
                  </div>
                </div>
              </div>
              
              {documentsSubmitted ? (
                <div className="bg-green-50 border border-green-100 rounded-lg p-5 text-left">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">Documents Received</h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>
                          Your documents have been successfully submitted. A funding specialist will reach out to you within 24 hours to discuss next steps. You may also schedule a consultation using the button above.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-5 text-left">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Important</h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>
                          Please upload your documents as soon as possible to avoid delays in processing your application. A funding specialist will contact you within 24 hours at the phone number you provided.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-funding-dark text-white py-12">
        {/* Same footer as in Application.tsx */}
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Footer content */}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Growth Path Advisory. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/#terms" className="hover:text-white">Terms of Service</a>
              <a href="/#privacy" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;
