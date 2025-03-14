
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

  const handleClick = () => {
    // Direct navigation to admin page on single click
    navigate('/admin');
    toast("Navigating to admin portal");
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
