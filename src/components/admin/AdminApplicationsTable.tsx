
import React, { useEffect } from 'react';
import CustomButton from "@/components/ui/CustomButton";
import { Loader2 } from 'lucide-react';
import { useApplications } from '@/hooks/useApplications';
import ApplicationsTable from './ApplicationsTable';
import ApplicationsEmptyState from './ApplicationsEmptyState';
import { toast } from 'sonner';

type AdminApplicationsTableProps = {
  onSelectApplication: (applicationId: string) => void;
};

const AdminApplicationsTable: React.FC<AdminApplicationsTableProps> = ({ onSelectApplication }) => {
  const { applications, loading, error, fetchApplications } = useApplications();

  useEffect(() => {
    // Initial fetch
    fetchApplications();
  }, []);

  const handleRefresh = async () => {
    try {
      await fetchApplications();
      toast("Applications refreshed successfully");
    } catch (error) {
      console.error("Error refreshing applications:", error);
      toast("Failed to refresh applications");
    }
  };

  const handleSelectApplication = (applicationId: string) => {
    console.log(`Selected application with ID: ${applicationId}`);
    onSelectApplication(applicationId);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-funding-blue" />
      </div>
    );
  }

  if (error || applications.length === 0) {
    return <ApplicationsEmptyState error={error} onRetry={fetchApplications} />;
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h2 className="text-xl font-medium text-gray-900">Applications</h2>
        <CustomButton onClick={handleRefresh} size="sm" variant="outline">
          Refresh
        </CustomButton>
      </div>
      <ApplicationsTable 
        applications={applications} 
        onSelectApplication={handleSelectApplication} 
      />
    </div>
  );
};

export default AdminApplicationsTable;
