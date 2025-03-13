
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { toast } from 'sonner';

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
        // Use absolute URL to ensure correct routing in production
        const baseUrl = window.location.origin;
        console.log("Navigating to admin portal at:", `${baseUrl}/admin`);
        window.location.href = `${baseUrl}/admin`;
        toast("Navigating to admin portal");
        return 0;
      }
      
      // On first click, show a subtle hint
      if (newCount === 1) {
        toast("Click 3 times to access admin area", {
          duration: 2000,
        });
      }
      
      return newCount;
    });

    // Reset count after a delay
    setTimeout(() => {
      setClickCount(0);
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-5 right-5 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer opacity-40 hover:opacity-80 transition-opacity shadow-md z-50"
      onClick={handleClick}
      title="Admin Access"
      aria-label="Admin Access"
    >
      <Lock className="w-5 h-5 text-gray-700" />
    </div>
  );
};

export default AdminButton;
