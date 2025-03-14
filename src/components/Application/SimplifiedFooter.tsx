
import { Phone } from 'lucide-react';

const SimplifiedFooter = () => {
  return (
    <footer className="bg-funding-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/bc9b5dea-776a-46a3-b886-59da9c741e0f.png" 
              alt="Growth Path Advisory Logo" 
              className="h-8" 
            />
          </div>
          
          <div>
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:+15735333894" className="text-white hover:text-gray-300">1-573-533-3894</a>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Growth Path Advisory. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimplifiedFooter;
