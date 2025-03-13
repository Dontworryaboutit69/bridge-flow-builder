
import React from 'react';
import CustomButton from "@/components/ui/CustomButton";

type ApplicationsEmptyStateProps = {
  error: string | null;
  onRetry: () => void;
};

const ApplicationsEmptyState: React.FC<ApplicationsEmptyStateProps> = ({ 
  error, 
  onRetry 
}) => {
  if (error) {
    return (
      <div className="text-center p-6 bg-red-50 rounded-lg">
        <p className="text-red-600">{error}</p>
        <CustomButton onClick={onRetry} className="mt-4">
          Try Again
        </CustomButton>
      </div>
    );
  }

  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg">
      <p className="text-gray-600">No applications found.</p>
    </div>
  );
};

export default ApplicationsEmptyState;
