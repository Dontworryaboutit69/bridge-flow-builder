
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CustomButton from "@/components/ui/CustomButton";
import { toast } from 'sonner';

const AdminLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Direct access without password
      localStorage.setItem('admin_token', 'demo_admin_token');
      toast("Admin access granted");
      navigate('/admin/console');
    } catch (error) {
      console.error('Login error:', error);
      toast("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Admin Access
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <p className="text-center text-gray-500 mb-4">
                Click the button below to access the admin console.
              </p>
            </div>

            <div>
              <CustomButton
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Accessing...' : 'Access Admin Console'}
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
