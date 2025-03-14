
import { Phone } from "lucide-react";
import ProgressiveForm from "@/components/ProgressiveForm";
import Navbar from "@/components/Navbar";
import { useForm, FormProvider } from "@/lib/formContext";
import { useApplication } from "@/lib/applicationContext";
import { useState, useEffect } from "react";
import AdminButton from "@/components/admin/AdminButton";

const PreQualification = () => {
  return (
    <FormProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <AdminButton />
        
        <main className="flex-grow pt-12 pb-12">
          <ProgressiveForm />
        </main>
        
        <footer className="bg-white py-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <img 
                  src="/lovable-uploads/bc9b5dea-776a-46a3-b886-59da9c741e0f.png" 
                  alt="Growth Path Advisory Logo" 
                  className="h-8" 
                />
              </div>
              <div className="flex items-center text-[#0056db]">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">1-573-533-3894</span>
              </div>
              <div className="text-xs text-[#5e6577] mt-4 md:mt-0">
                © {new Date().getFullYear()} Growth Path Advisory. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </FormProvider>
  );
};

export default PreQualification;
