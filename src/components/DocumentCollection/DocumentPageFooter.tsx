
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';

const DocumentPageFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-funding-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo className="mb-4 justify-start" />
            <p className="text-gray-400 mb-4">
              Helping businesses grow with fast, flexible funding solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/GrowthPathAdvisory" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://twitter.com/GrowthPathAdv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/growth-path-advisory" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Funding Options</h3>
            <ul className="space-y-2">
              <li><a href="/#funding-products" className="text-gray-400 hover:text-white">Term Loans</a></li>
              <li><a href="/#funding-products" className="text-gray-400 hover:text-white">Merchant Cash Advances</a></li>
              <li><a href="/#funding-products" className="text-gray-400 hover:text-white">Lines of Credit</a></li>
              <li><a href="/#funding-products" className="text-gray-400 hover:text-white">Equipment Financing</a></li>
              <li><a href="/#funding-products" className="text-gray-400 hover:text-white">Invoice Factoring</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
              <li><a href="/#benefits" className="text-gray-400 hover:text-white">Benefits</a></li>
              <li><a href="/#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
              <li><a href="/#terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="/#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5" />
                <span><a href="tel:+15735333894" className="hover:text-white">1-573-533-3894</a></span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5" />
                <span><a href="mailto:info@growthpathadvisory.com" className="hover:text-white">info@growthpathadvisory.com</a></span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span>Orlando, FL 32810</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Growth Path Advisory. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/#terms" className="hover:text-white">Terms of Service</a>
            <a href="/#privacy" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DocumentPageFooter;
