
import React, { useState, useEffect } from 'react';
import { ApplicationProvider } from '@/lib/applicationContext';
import Navbar from '@/components/Navbar';
import { FormProvider } from '@/lib/formContext';
import ApplicationWrapper from '@/components/Application/ApplicationWrapper';
import SimplifiedFooter from '@/components/Application/SimplifiedFooter';
import AdminControls from '@/components/Application/AdminControls';
import { useSearchParams } from 'react-router-dom';

const Application = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsAdmin(params.get('admin') === 'true');
  }, []);
  
  return (
    <FormProvider>
      <ApplicationProvider initialStep={searchParams.get('step')}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          
          <main className="flex-grow pt-32 md:pt-40 pb-8 md:pb-16 bg-funding-light-gray/30 relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-soft-peach/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-soft-blue/20 rounded-full blur-3xl"></div>
              <div className="dot-pattern"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
              <AdminControls isAdmin={isAdmin} />
              
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
                  Business Funding Application
                </h1>
                <p className="text-funding-gray max-w-2xl mx-auto">
                  Complete this application to finalize your funding request with Growth Path Advisory.
                </p>
              </div>
              
              <ApplicationWrapper />
            </div>
          </main>
          
          <SimplifiedFooter />
        </div>
      </ApplicationProvider>
    </FormProvider>
  );
};

export default Application;
