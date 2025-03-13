
import React from 'react';
import { Loader2 } from 'lucide-react';
import CustomButton from "@/components/ui/CustomButton";
import ApplicationDetailSection from './ApplicationDetailSection';
import DocumentsList from './DocumentsList';
import { generateApplicationPDF } from './ApplicationPdfGenerator';
import ApplicationActionsBar from './ApplicationActionsBar';
import ApplicationDetailsHeader from './ApplicationDetailsHeader';
import { useApplicationDetails } from './useApplicationDetails';

type AdminApplicationDetailsProps = {
  applicationId: string;
  onBack: () => void;
};

const AdminApplicationDetails: React.FC<AdminApplicationDetailsProps> = ({ applicationId, onBack }) => {
  const {
    application,
    loading,
    error,
    fetchApplicationDetails,
    generatePdfLoading,
    setGeneratePdfLoading
  } = useApplicationDetails(applicationId);

  const handleGeneratePdf = async () => {
    if (!application) return;
    
    setGeneratePdfLoading(true);
    
    try {
      await generateApplicationPDF(application);
    } finally {
      setGeneratePdfLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-funding-blue" />
      </div>
    );
  }

  if (error || !application) {
    return (
      <div className="text-center p-6 bg-red-50 rounded-lg">
        <p className="text-red-600">{error || "Application not found"}</p>
        <div className="mt-4 flex space-x-4 justify-center">
          <CustomButton onClick={onBack} variant="outline">
            <Loader2 className="mr-2 h-4 w-4" />
            Back to Applications
          </CustomButton>
          <CustomButton onClick={fetchApplicationDetails}>
            Try Again
          </CustomButton>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ApplicationActionsBar 
        onBack={onBack}
        onGeneratePdf={handleGeneratePdf}
        isGeneratingPdf={generatePdfLoading}
      />
      
      <ApplicationDetailsHeader 
        applicationId={application.application_id}
        submissionDate={application.submission_date}
        onBack={onBack}
        onGeneratePdf={handleGeneratePdf}
        isGeneratingPdf={generatePdfLoading}
      />
      
      <div className="px-4 pb-5">
        <div className="grid grid-cols-1 gap-6 mt-6">
          <ApplicationDetailSection 
            title="Personal Information"
            data={[
              { label: "First Name", value: application.first_name },
              { label: "Last Name", value: application.last_name },
              { label: "Email", value: application.email },
              { label: "Phone", value: application.phone },
              { label: "Address", value: application.address },
              { label: "City", value: application.city },
              { label: "State", value: application.state },
              { label: "Zip Code", value: application.zip_code },
              { label: "SSN", value: application.social_security_number ? `***-**-${application.social_security_number.slice(-4)}` : 'N/A' },
              { label: "Date of Birth", value: application.date_of_birth }
            ]}
          />
          
          <ApplicationDetailSection 
            title="Business Information"
            data={[
              { label: "Business Name", value: application.business_name },
              { label: "Business Type", value: application.business_type },
              { label: "Start Date", value: application.business_start_date },
              { label: "Industry", value: application.industry },
              { label: "Time in Business", value: application.time_in_business },
              { label: "Employee Count", value: application.employee_count },
              { label: "Business Address", value: application.business_address },
              { label: "Business City", value: application.business_city },
              { label: "Business State", value: application.business_state },
              { label: "Business Zip", value: application.business_zip_code },
              { label: "Website", value: application.website_url },
              { label: "EIN Number", value: application.ein_number },
              { label: "Ownership %", value: application.ownership_percentage }
            ]}
          />
          
          <ApplicationDetailSection 
            title="Financial Information"
            data={[
              { label: "Bank Name", value: application.bank_name },
              { label: "Account Number", value: application.account_number ? `****${application.account_number.slice(-4)}` : 'N/A' },
              { label: "Routing Number", value: application.routing_number ? `****${application.routing_number.slice(-4)}` : 'N/A' },
              { label: "Monthly Revenue", value: application.monthly_revenue },
              { label: "Credit Score", value: application.credit_score },
              { label: "Loan Amount", value: application.loan_amount },
              { label: "Use of Funds", value: application.use_of_funds }
            ]}
          />
          
          <DocumentsList applicationId={applicationId} />
        </div>
      </div>
    </div>
  );
};

export default AdminApplicationDetails;
