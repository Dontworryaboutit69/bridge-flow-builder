
import React from 'react';
import Logo from './Logo';
import { Phone, CalendarClock } from 'lucide-react';
import CustomButton from './ui/CustomButton';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <nav className="hidden md:flex ml-16 space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-funding-blue font-medium">
              How It Works
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-funding-blue font-medium">
              Benefits
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-funding-blue font-medium">
              Testimonials
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <a href="tel:+1-573-533-3894" className="hidden md:flex items-center text-funding-blue hover:text-funding-blue/80">
            <Phone className="h-5 w-5 mr-2" />
            <span className="text-funding-blue font-medium">1-573-533-3894</span>
          </a>
          <CustomButton 
            variant="primary" 
            size="md"
            href="#apply-now"
            className="rounded-full px-6"
          >
            <span>Schedule Now</span>
            <CalendarClock className="h-5 w-5 ml-1" />
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
