import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <nav className="hidden md:flex ml-10 space-x-8">
            <a href="/" className="text-gray-900 hover:text-funding-blue">
              Home
            </a>
            <a href="/admin" className="text-gray-900 hover:text-funding-blue">
              Admin Console
            </a>
          </nav>
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;
