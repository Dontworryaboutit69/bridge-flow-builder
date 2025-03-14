
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="bg-funding-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo className="w-40 mb-4" />
            <p className="text-gray-400 mb-4">
              Providing fast, flexible funding solutions for businesses nationwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-3">Funding</h4>
            <ul className="space-y-2">
              <li><a href="#funding-products" className="text-gray-400 hover:text-white transition-colors">Term Loans</a></li>
              <li><a href="#funding-products" className="text-gray-400 hover:text-white transition-colors">Merchant Cash Advances</a></li>
              <li><a href="#funding-products" className="text-gray-400 hover:text-white transition-colors">Equipment Financing</a></li>
              <li><a href="#funding-products" className="text-gray-400 hover:text-white transition-colors">Lines of Credit</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-3">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 text-funding-blue" />
                <a href="tel:15735333894" className="text-gray-400 hover:text-white transition-colors">1-573-533-3894</a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 text-funding-blue" />
                <a href="mailto:support@growthpathadvisory.com" className="text-gray-400 hover:text-white transition-colors">support@growthpathadvisory.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-funding-blue" />
                <span className="text-gray-400">Orlando, FL 32810</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center sm:text-left text-gray-500 text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Growth Path Advisory. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
