
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import CustomButton from './ui/CustomButton';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <nav className="flex ml-10 space-x-8">
            <a href="#how-it-works" className="text-gray-900 hover:text-funding-blue">
              How It Works
            </a>
            <a href="#funding-products" className="text-gray-900 hover:text-funding-blue">
              Funding Options
            </a>
            <a href="#benefits" className="text-gray-900 hover:text-funding-blue">
              Benefits
            </a>
            <a href="#testimonials" className="text-gray-900 hover:text-funding-blue">
              Testimonials
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a href="tel:+1-800-555-0123" className="flex items-center text-funding-blue hover:text-funding-blue/80">
            <Phone className="h-4 w-4 mr-2" />
            (800) 555-0123
          </a>
          <CustomButton 
            variant="primary" 
            size="sm"
            href="#apply-now"
          >
            Schedule a Call
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
