
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SimplifiedFooter from '@/components/Application/SimplifiedFooter';
import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

const CrmApplication = () => {
  useEffect(() => {
    // Redirect users to the external CRM application
    window.location.href = "https://mca.growthpathadvisory.com/application-page-7972-6296";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 md:pt-40 pb-8 md:pb-16 bg-funding-light-gray/30 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-soft-peach/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-soft-blue/20 rounded-full blur-3xl"></div>
          <div className="dot-pattern"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
              Business Funding Application
            </h1>
            <p className="text-funding-gray max-w-2xl mx-auto">
              You're being redirected to our application form...
            </p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <Card className="p-8 text-center">
              <h2 className="text-xl font-bold mb-4">Redirecting to Application</h2>
              <p className="text-funding-gray mb-6">
                If you're not automatically redirected, please click the button below:
              </p>
              <CustomButton 
                onClick={() => window.location.href = "https://mca.growthpathadvisory.com/application-page-7972-6296"}
                className="group mx-auto"
              >
                Go to Application 
                <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </CustomButton>
            </Card>
          </div>
        </div>
      </main>
      
      <SimplifiedFooter />
    </div>
  );
};

export default CrmApplication;
