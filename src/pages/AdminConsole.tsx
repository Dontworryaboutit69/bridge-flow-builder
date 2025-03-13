
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CustomButton from "@/components/ui/CustomButton";
import { toast } from 'sonner';
import AdminApplicationsTable from '@/components/admin/AdminApplicationsTable';
import AdminApplicationDetails from '@/components/admin/AdminApplicationDetails';

const AdminConsole = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [selectedApplicationId, setSelectedApplicationId] = useState<string | null>(null);
  const navigate = useNavigate();

  // Check if admin is logged in
  useEffect(() => {
    const checkAdminLogin = () => {
      const adminToken = localStorage.getItem('admin_token');
      if (adminToken) {
        setIsLoggedIn(true);
      } else {
        // Redirect to admin login if not logged in
        navigate('/admin');
      }
    };
    
    checkAdminLogin();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsLoggedIn(false);
    navigate('/admin');
  };

  const handleApplicationSelect = (applicationId: string) => {
    setSelectedApplicationId(applicationId);
  };

  const handleBackToList = () => {
    setSelectedApplicationId(null);
  };

  // If not logged in, show loading while redirecting
  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-funding-blue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">GrowthPath Admin Console</h1>
          <CustomButton onClick={handleLogout} variant="outline">Logout</CustomButton>
        </div>
        
        {selectedApplicationId ? (
          <AdminApplicationDetails 
            applicationId={selectedApplicationId} 
            onBack={handleBackToList}
          />
        ) : (
          <AdminApplicationsTable onSelectApplication={handleApplicationSelect} />
        )}
      </div>
    </div>
  );
};

export default AdminConsole;
