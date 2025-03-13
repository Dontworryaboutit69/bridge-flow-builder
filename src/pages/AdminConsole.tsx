
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
      }
    };
    
    checkAdminLogin();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // For demo purposes, we'll use a simple admin check
      // In production, you should use proper authentication
      if (email === 'admin@example.com' && password === 'admin123') {
        localStorage.setItem('admin_token', 'demo_admin_token');
        setIsLoggedIn(true);
        toast("Admin login successful");
      } else {
        toast("Invalid credentials");
      }
    } catch (error) {
      console.error('Login error:', error);
      toast("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsLoggedIn(false);
    setSelectedApplicationId(null);
  };

  const handleApplicationSelect = (applicationId: string) => {
    setSelectedApplicationId(applicationId);
  };

  const handleBackToList = () => {
    setSelectedApplicationId(null);
  };

  // If not logged in, show the login form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <CustomButton
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </CustomButton>
              </div>
            </form>
            
            <div className="mt-6">
              <div className="text-sm text-center">
                <span className="text-gray-500">Default credentials:</span>
                <p>Email: admin@example.com</p>
                <p>Password: admin123</p>
              </div>
            </div>
          </div>
        </div>
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
