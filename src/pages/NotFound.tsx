
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import CustomButton from "@/components/ui/CustomButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // If this is an admin route, try to redirect to the admin login
    if (location.pathname.includes('/admin')) {
      // Give the browser a moment to potentially handle the redirect
      const timer = setTimeout(() => {
        window.location.href = '/admin';
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Check if the error is related to the admin path
  const isAdminRelated = location.pathname.includes('/admin');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page not found</p>
        
        <p className="text-gray-500 mb-6">
          The page you're looking for doesn't exist or you don't have permission to access it.
          {isAdminRelated && (
            <span className="block mt-2 text-blue-500">
              Note: Admin pages require proper authentication and must be accessed via the correct URL.
            </span>
          )}
        </p>

        <div className="flex flex-col space-y-4">
          <Link to="/">
            <CustomButton className="w-full flex items-center justify-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </CustomButton>
          </Link>
          
          {isAdminRelated && (
            <Link to="/admin">
              <CustomButton variant="outline" className="w-full">
                Go to Admin Login
              </CustomButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
