
import { Link } from 'react-router-dom';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/0d1efe81-a8fc-4a8c-8ee9-6c8dcc0c4701.png" 
        alt="Growth Path Advisory Logo" 
        className="h-10 mr-2" 
      />
      <span className="font-bold text-xl text-funding-dark">
        Growth Path Advisory
      </span>
    </Link>
  );
};

export default Logo;
