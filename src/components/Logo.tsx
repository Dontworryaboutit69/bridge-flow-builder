import { Link, useLocation } from 'react-router-dom';

const Logo = ({ className = '' }: { className?: string }) => {
  const location = useLocation();
  const isInnerPage = location.pathname === '/application' ||
                      location.pathname === '/pre-qualification' ||
                      location.pathname === '/documents' ||
                      location.pathname === '/thank-you';
  
  if (isInnerPage) {
    return (
      <div className={`flex items-center ${className}`}>
        <img 
          src="/lovable-uploads/bc9b5dea-776a-46a3-b886-59da9c741e0f.png" 
          alt="Growth Path Advisory Logo" 
          className="h-10" 
        />
      </div>
    );
  }
  
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/bc9b5dea-776a-46a3-b886-59da9c741e0f.png" 
        alt="Growth Path Advisory Logo" 
        className="h-10" 
      />
    </Link>
  );
};

export default Logo;
