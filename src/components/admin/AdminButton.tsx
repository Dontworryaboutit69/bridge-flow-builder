
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock } from 'lucide-react';

const AdminButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only show on non-admin pages
    setIsVisible(!location.pathname.includes('/admin'));
  }, [location]);

  // Counter for clicking and activating
  const [clickCount, setClickCount] = useState<number>(0);

  const handleClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      // If clicked 3 times in succession, navigate to admin
      if (newCount >= 3) {
        navigate('/admin');
        return 0;
      }
      return newCount;
    });

    // Reset count after a delay
    setTimeout(() => {
      setClickCount(0);
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-5 right-5 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer opacity-30 hover:opacity-70 transition-opacity"
      onClick={handleClick}
      title="Admin Access"
    >
      <Lock className="w-4 h-4 text-gray-600" />
    </div>
  );
};

export default AdminButton;
