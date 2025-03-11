
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SuccessHeader from '@/components/ThankYou/SuccessHeader';
import ApplicationReference from '@/components/ThankYou/ApplicationReference';
import NextStepsSection from '@/components/ThankYou/NextStepsSection';
import StatusAlert from '@/components/ThankYou/StatusAlert';
import Footer from '@/components/sections/Footer';

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

  // Generate a random application ID for display purposes
  const applicationId = `GPA-${Math.floor(Math.random() * 90000) + 10000}`;
  const currentDate = new Date().toLocaleDateString();

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
            <SuccessHeader documentsSubmitted={documentsSubmitted} />
            
            <div className="max-w-xl mx-auto">
              <ApplicationReference 
                applicationId={applicationId} 
                submissionDate={currentDate} 
              />
              
              <NextStepsSection 
                documentsSubmitted={documentsSubmitted} 
                onSchedule={handleScheduleAppointment} 
              />
              
              <StatusAlert documentsSubmitted={documentsSubmitted} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
