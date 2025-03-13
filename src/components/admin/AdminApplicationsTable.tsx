
import React from 'react';
import CustomButton from "@/components/ui/CustomButton";
import { Loader2 } from 'lucide-react';
import { useApplications } from '@/hooks/useApplications';
import ApplicationsTable from './ApplicationsTable';
import ApplicationsEmptyState from './ApplicationsEmptyState';

type AdminApplicationsTableProps = {
  onSelectApplication: (applicationId: string) => void;
};

const AdminApplicationsTable: React.FC<AdminApplicationsTableProps> = ({ onSelectApplication }) => {
  const { applications, loading, error, fetchApplications } = useApplications();

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
        <CustomButton onClick={fetchApplications} size="sm" variant="outline">
          Refresh
        </CustomButton>
      </div>
      <ApplicationsTable 
        applications={applications} 
        onSelectApplication={onSelectApplication} 
      />
    </div>
  );
};

export default AdminApplicationsTable;
