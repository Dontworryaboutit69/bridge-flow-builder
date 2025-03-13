
import React from 'react';
import Logo from './Logo';
import { Phone } from 'lucide-react';
import CustomButton from './ui/CustomButton';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <nav className="flex ml-10 space-x-8">
            <a href="#how-it-works" className="text-gray-900 hover:text-funding-blue font-medium">
              How It Works
            </a>
            <a href="#funding-products" className="text-gray-900 hover:text-funding-blue font-medium">
              Funding Options
            </a>
            <a href="#benefits" className="text-gray-900 hover:text-funding-blue font-medium">
              Benefits
            </a>
            <a href="#testimonials" className="text-gray-900 hover:text-funding-blue font-medium">
              Testimonials
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <a href="tel:+1-800-555-0123" className="flex items-center text-funding-blue hover:text-funding-blue/80">
            <Phone className="h-5 w-5 mr-2" />
            <span className="text-funding-blue font-medium">(800) 555-0123</span>
          </a>
          <CustomButton 
            variant="primary" 
            size="md"
            href="#apply-now"
            className="rounded-full"
          >
            Schedule a Call
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
