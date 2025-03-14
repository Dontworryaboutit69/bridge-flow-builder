
import React from 'react';
import CustomButton from "@/components/ui/CustomButton";
import { ChevronRight } from 'lucide-react';
import { Application } from '@/hooks/useApplications';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ApplicationsTableProps = {
  applications: Application[];
  onSelectApplication: (applicationId: string) => void;
};

const ApplicationsTable: React.FC<ApplicationsTableProps> = ({ 
  applications, 
  onSelectApplication 
}) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleViewDetails = (applicationId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Viewing details for application: ${applicationId}`);
    onSelectApplication(applicationId);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Applicant</TableHead>
              <TableHead>Business Name</TableHead>
              <TableHead>Loan Amount</TableHead>
              <TableHead>Submission Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id} className="hover:bg-gray-50">
                <TableCell className="py-4">
                  <div className="flex items-center">
                    <div>
                      <div className="font-medium text-gray-900">
                        {app.first_name} {app.last_name}
                      </div>
                      <div className="text-sm text-gray-500">{app.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{app.business_name || 'N/A'}</TableCell>
                <TableCell>{app.loan_amount || 'N/A'}</TableCell>
                <TableCell>
                  {formatDate(app.submission_date || app.created_at)}
                </TableCell>
                <TableCell className="text-right">
                  <CustomButton
                    size="sm"
                    variant="ghost"
                    onClick={(e) => handleViewDetails(app.application_id, e)}
                    className="text-funding-blue hover:text-funding-blue-dark inline-flex items-center"
                  >
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </CustomButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ApplicationsTable;
