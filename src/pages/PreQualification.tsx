
import Navbar from "@/components/Navbar";
import ProgressiveForm from "@/components/ProgressiveForm";
import { Phone } from "lucide-react";

const PreQualification = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ProgressiveForm />
      </main>
      
      {/* Simple footer with just phone support */}
      <footer className="bg-white py-8 border-t border-funding-light-gray">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/bc9b5dea-776a-46a3-b886-59da9c741e0f.png" 
                alt="Growth Path Advisory Logo" 
                className="h-10" 
              />
            </div>
            <div className="flex items-center text-funding-blue">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-medium">1-573-533-3894</span>
            </div>
            <div className="text-sm text-funding-gray mt-6 md:mt-0">
              © {new Date().getFullYear()} Growth Path Advisory. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PreQualification;
