
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-5 md:px-10",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center"
        >
          <div className="font-bold text-xl text-funding-dark">
            Growth Path Advisory
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#how-it-works" 
            className="text-funding-dark/80 hover:text-funding-blue transition-colors duration-200"
          >
            How It Works
          </a>
          <a 
            href="#benefits" 
            className="text-funding-dark/80 hover:text-funding-blue transition-colors duration-200"
          >
            Benefits
          </a>
          <a 
            href="#testimonials" 
            className="text-funding-dark/80 hover:text-funding-blue transition-colors duration-200"
          >
            Testimonials
          </a>
          <a 
            href="#apply-now" 
            className="bg-funding-blue text-white px-6 py-2.5 rounded-full font-medium flex items-center hover:bg-opacity-90 transition-all duration-200 group"
          >
            Apply Now
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-funding-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-40 animate-fade-in">
          <nav className="flex flex-col p-5 space-y-6">
            <a 
              href="#how-it-works" 
              className="text-funding-dark/80 text-lg font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="text-funding-dark/80 text-lg font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              className="text-funding-dark/80 text-lg font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#apply-now" 
              className="bg-funding-blue text-white px-6 py-3 rounded-full font-medium flex items-center justify-center hover:bg-opacity-90 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Now
              <ChevronRight className="ml-1 w-5 h-5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
