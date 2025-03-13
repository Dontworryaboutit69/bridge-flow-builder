
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <nav className="hidden md:flex ml-10 space-x-8">
            <Link to="/" className="text-gray-900 hover:text-funding-blue">
              Home
            </Link>
            <Link to="/admin" className="text-gray-900 hover:text-funding-blue">
              Admin Console
            </Link>
          </nav>
        </div>
        {/* Add a right-side section for potential user controls later */}
        <div className="flex items-center">
          {/* Placeholder for future elements like login/user profile */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
