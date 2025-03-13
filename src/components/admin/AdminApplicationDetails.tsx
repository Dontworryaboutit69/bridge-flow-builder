import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { ChevronLeft } from 'lucide-react';
import CustomButton from "@/components/ui/CustomButton";
import ApplicationDetailSection from './ApplicationDetailSection';
import DocumentsList from './DocumentsList';
import { toast } from 'sonner';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

type AdminApplicationDetailsProps = {
  applicationId: string;
  onBack: () => void;
};

interface ApplicationData {
  [key: string]: any;
  id?: number;
  created_at?: string;
  application_id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  // ... other fields can be added as needed
}

const AdminApplicationDetails: React.FC<AdminApplicationDetailsProps> = ({ applicationId, onBack }) => {
  const [application, setApplication] = useState<ApplicationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [exportingPdf, setExportingPdf] = useState<boolean>(false);

  useEffect(() => {
    fetchApplicationDetails();
  }, [applicationId]);

  const fetchApplicationDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch from Supabase
      const { data, error } = await supabase
        .from('GrowthPath Application')
        .select('*')
        .eq('application_id', applicationId)
        .single();
      
      if (error) {
        console.error('Error fetching application details:', error);
        throw error;
      }
      
      if (data) {
        console.log('Application details:', data);
        setApplication(data as ApplicationData);
      } else {
        // Try to get from localStorage as a fallback
        const savedAppData = localStorage.getItem('current_application_data');
        if (savedAppData) {
          const parsedData = JSON.parse(savedAppData);
          if (parsedData.application_id === applicationId) {
            setApplication(parsedData as ApplicationData);
          } else {
            setError("Application not found.");
          }
        } else {
          setError("Application not found.");
        }
      }
    } catch (err) {
      console.error('Error:', err);
      setError("Failed to load application details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const generatePdf = async () => {
    if (!application) return;
    
    try {
      setExportingPdf(true);
      
      const doc = new jsPDF();
      
      // Add header
      doc.setFontSize(20);
      doc.text("GrowthPath Application Details", 14, 20);
      
      // Add application ID
      doc.setFontSize(12);
      doc.text(`Application ID: ${application.application_id || 'N/A'}`, 14, 30);
      doc.text(`Submission Date: ${new Date(application.submission_date || application.created_at).toLocaleDateString()}`, 14, 37);
      
      // Personal Information
      doc.setFontSize(16);
      doc.text("Personal Information", 14, 47);
      
      // Use autotable for better formatting
      autoTable(doc, {
        startY: 50,
        head: [['Field', 'Value']],
        body: [
          ['Name', `${application.first_name || ''} ${application.last_name || ''}`],
          ['Email', application.email || 'N/A'],
          ['Phone', application.phone || 'N/A'],
          ['Address', `${application.address || ''}, ${application.city || ''}, ${application.state || ''} ${application.zip_code || ''}`],
          ['SSN', application.social_security_number ? '********' : 'N/A'], // Mask sensitive data
          ['Date of Birth', application.date_of_birth || 'N/A']
        ]
      });
      
      // Business Information
      const currentY = (doc as any).lastAutoTable.finalY + 10;
      doc.setFontSize(16);
      doc.text("Business Information", 14, currentY);
      
      autoTable(doc, {
        startY: currentY + 3,
        head: [['Field', 'Value']],
        body: [
          ['Business Name', application.business_name || 'N/A'],
          ['Industry', application.industry || 'N/A'],
          ['Business Type', application.business_type || 'N/A'],
          ['Time in Business', application.time_in_business || 'N/A'],
          ['Employee Count', application.employee_count || 'N/A'],
          ['Business Address', `${application.business_address || ''}, ${application.business_city || ''}, ${application.business_state || ''} ${application.business_zip_code || ''}`],
          ['Website', application.website_url || 'N/A'],
          ['EIN Number', application.ein_number ? '********' : 'N/A'], // Mask sensitive data
          ['Ownership %', application.ownership_percentage || 'N/A']
        ]
      });
      
      // Financial Information
      const financialY = (doc as any).lastAutoTable.finalY + 10;
      doc.setFontSize(16);
      doc.text("Financial Information", 14, financialY);
      
      autoTable(doc, {
        startY: financialY + 3,
        head: [['Field', 'Value']],
        body: [
          ['Bank Name', application.bank_name || 'N/A'],
          ['Account Number', application.account_number ? '********' : 'N/A'], // Mask sensitive data
          ['Routing Number', application.routing_number ? '********' : 'N/A'], // Mask sensitive data
          ['Monthly Revenue', application.monthly_revenue || 'N/A'],
          ['Credit Score', application.credit_score || 'N/A'],
          ['Loan Amount', application.loan_amount || 'N/A'],
          ['Use of Funds', application.use_of_funds || 'N/A']
        ]
      });
      
      // Footer
      const finalY = (doc as any).lastAutoTable.finalY + 15;
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated on ${new Date().toLocaleString()}`, 14, finalY);
      
      // Save the PDF
      doc.save(`GrowthPath-Application-${applicationId}.pdf`);
      toast("PDF exported successfully");
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast("Failed to export PDF");
    } finally {
      setExportingPdf(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <CustomButton onClick={onBack} variant="outline" size="sm" className="mr-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to List
          </CustomButton>
          <h2 className="text-xl font-semibold">Loading application details...</h2>
        </div>
        <div className="bg-gray-100 animate-pulse h-64 rounded-lg"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <CustomButton onClick={onBack} variant="outline" size="sm" className="mr-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to List
          </CustomButton>
          <h2 className="text-xl font-semibold">Application Details</h2>
        </div>
        <div className="bg-red-50 p-6 rounded-lg text-red-600">
          <p>{error}</p>
          <CustomButton onClick={fetchApplicationDetails} className="mt-4">
            Try Again
          </CustomButton>
        </div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <CustomButton onClick={onBack} variant="outline" size="sm" className="mr-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to List
          </CustomButton>
          <h2 className="text-xl font-semibold">Application Details</h2>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-500">No application data found.</p>
        </div>
      </div>
    );
  }

  // Group data for each section
  const personalData = [
    { label: "First Name", value: application.first_name },
    { label: "Last Name", value: application.last_name },
    { label: "Email", value: application.email },
    { label: "Phone", value: application.phone },
    { label: "Address", value: application.address },
    { label: "City", value: application.city },
    { label: "State", value: application.state },
    { label: "ZIP Code", value: application.zip_code },
    { label: "SSN", value: application.social_security_number ? "********" : null },
    { label: "Date of Birth", value: application.date_of_birth }
  ];

  const businessData = [
    { label: "Business Name", value: application.business_name },
    { label: "Business Type", value: application.business_type },
    { label: "Start Date", value: application.business_start_date },
    { label: "Industry", value: application.industry },
    { label: "Time in Business", value: application.time_in_business },
    { label: "Employee Count", value: application.employee_count },
    { label: "Business Address", value: application.business_address },
    { label: "City", value: application.business_city },
    { label: "State", value: application.business_state },
    { label: "ZIP Code", value: application.business_zip_code },
    { label: "Website", value: application.website_url },
    { label: "EIN Number", value: application.ein_number ? "********" : null },
    { label: "Ownership %", value: application.ownership_percentage }
  ];

  const financialData = [
    { label: "Bank Name", value: application.bank_name },
    { label: "Account Number", value: application.account_number ? "********" : null },
    { label: "Routing Number", value: application.routing_number ? "********" : null },
    { label: "Monthly Revenue", value: application.monthly_revenue },
    { label: "Credit Score", value: application.credit_score },
    { label: "Loan Amount", value: application.loan_amount },
    { label: "Use of Funds", value: application.use_of_funds }
  ];

  const agreementData = [
    { label: "Agrees to Terms", value: application.agree_to_terms ? "Yes" : "No" },
    { label: "Information is Correct", value: application.agree_information_correct ? "Yes" : "No" },
    { label: "Signature", value: application.signature }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <CustomButton onClick={onBack} variant="outline" size="sm" className="mr-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to List
          </CustomButton>
          <h2 className="text-xl font-semibold">Application Details</h2>
        </div>
        <CustomButton 
          onClick={generatePdf} 
          disabled={exportingPdf}
          size="sm"
        >
          {exportingPdf ? 'Exporting...' : 'Export as PDF'}
        </CustomButton>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Application ID</h3>
            <p className="mt-1 text-lg font-semibold text-gray-900">{applicationId}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Submission Date</h3>
            <p className="mt-1 text-lg font-semibold text-gray-900">
              {application.submission_date 
                ? new Date(application.submission_date).toLocaleDateString() 
                : new Date(application.created_at).toLocaleDateString()}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Status</h3>
            <div className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Submitted
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <ApplicationDetailSection 
          title="Personal Information" 
          data={personalData} 
        />
        
        <ApplicationDetailSection 
          title="Business Information" 
          data={businessData} 
        />
        
        <ApplicationDetailSection 
          title="Financial Information" 
          data={financialData} 
        />
        
        <ApplicationDetailSection 
          title="Agreement Information" 
          data={agreementData} 
        />
        
        <DocumentsList applicationId={applicationId} />
      </div>
    </div>
  );
};

export default AdminApplicationDetails;
