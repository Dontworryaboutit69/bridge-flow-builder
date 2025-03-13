
import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import CustomButton from "@/components/ui/CustomButton";
import { toast } from 'sonner';
import { ArrowLeft, DownloadIcon, Loader2, FileIcon } from 'lucide-react';
import ApplicationDetailSection from './ApplicationDetailSection';
import DocumentsList from './DocumentsList';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

type AdminApplicationDetailsProps = {
  applicationId: string;
  onBack: () => void;
};

type ApplicationData = {
  // Personal Information
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  social_security_number: string;
  date_of_birth: string;
  
  // Business Information
  business_name: string;
  business_type: string;
  business_start_date: string;
  industry: string;
  time_in_business: string;
  employee_count: string;
  business_address: string;
  business_city: string;
  business_state: string;
  business_zip_code: string;
  website_url: string;
  ein_number: string;
  ownership_percentage: string;
  
  // Financial Information
  bank_name: string;
  account_number: string;
  routing_number: string;
  monthly_revenue: string;
  credit_score: string;
  loan_amount: string;
  use_of_funds: string;
  
  // Agreement Information
  agree_to_terms: boolean;
  agree_information_correct: boolean;
  signature: string;
  
  // Additional info
  application_id: string;
  submission_date: string;
};

const AdminApplicationDetails: React.FC<AdminApplicationDetailsProps> = ({ applicationId, onBack }) => {
  const [application, setApplication] = useState<ApplicationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [generatePdfLoading, setGeneratePdfLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchApplicationDetails();
  }, [applicationId]);

  const fetchApplicationDetails = async () => {
    try {
      setLoading(true);
      
      // Fetch application details from Supabase
      const { data, error } = await supabase
        .from('GrowthPath Application')
        .select('*')
        .eq('application_id', applicationId)
        .single();
      
      if (error) {
        throw error;
      }
      
      setApplication(data as ApplicationData);
      console.log('Fetched application details:', data);
    } catch (err) {
      console.error('Error fetching application details:', err);
      setError('Failed to load application details. Please try again.');
      toast("Failed to load application details");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const generatePDF = async () => {
    if (!application) return;
    
    setGeneratePdfLoading(true);
    
    try {
      // Initialize jsPDF
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      
      // Add header
      doc.setFontSize(20);
      doc.setTextColor(40, 40, 40);
      doc.text("GrowthPath Application", pageWidth / 2, 20, { align: 'center' });
      
      doc.setFontSize(12);
      doc.text(`Application ID: ${application.application_id}`, pageWidth / 2, 30, { align: 'center' });
      doc.text(`Submission Date: ${formatDate(application.submission_date)}`, pageWidth / 2, 38, { align: 'center' });
      
      // Add applicant info
      doc.setFontSize(16);
      doc.text("Personal Information", 14, 50);
      
      const personalInfo = [
        ["Full Name", `${application.first_name} ${application.last_name}`],
        ["Email", application.email],
        ["Phone", application.phone],
        ["Address", `${application.address}, ${application.city}, ${application.state} ${application.zip_code}`],
        ["SSN", `***-**-${application.social_security_number?.slice(-4) || '****'}`],
        ["Date of Birth", application.date_of_birth]
      ];
      
      // @ts-ignore
      doc.autoTable({
        startY: 55,
        head: [],
        body: personalInfo,
        theme: 'grid',
        styles: { fontSize: 10 },
        columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } }
      });
      
      // Add business info
      doc.setFontSize(16);
      // @ts-ignore
      doc.text("Business Information", 14, doc.lastAutoTable.finalY + 15);
      
      const businessInfo = [
        ["Business Name", application.business_name],
        ["Business Type", application.business_type],
        ["Industry", application.industry],
        ["Time in Business", application.time_in_business],
        ["Employees", application.employee_count],
        ["Business Address", `${application.business_address}, ${application.business_city}, ${application.business_state} ${application.business_zip_code}`],
        ["Website", application.website_url],
        ["EIN", application.ein_number],
        ["Ownership %", application.ownership_percentage]
      ];
      
      // @ts-ignore
      doc.autoTable({
        // @ts-ignore
        startY: doc.lastAutoTable.finalY + 20,
        head: [],
        body: businessInfo,
        theme: 'grid',
        styles: { fontSize: 10 },
        columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } }
      });
      
      // Add financial info
      doc.setFontSize(16);
      // @ts-ignore
      doc.text("Financial Information", 14, doc.lastAutoTable.finalY + 15);
      
      const financialInfo = [
        ["Bank Name", application.bank_name],
        ["Monthly Revenue", application.monthly_revenue],
        ["Credit Score", application.credit_score],
        ["Loan Amount", application.loan_amount],
        ["Use of Funds", application.use_of_funds]
      ];
      
      // @ts-ignore
      doc.autoTable({
        // @ts-ignore
        startY: doc.lastAutoTable.finalY + 20,
        head: [],
        body: financialInfo,
        theme: 'grid',
        styles: { fontSize: 10 },
        columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } }
      });
      
      // Add footer
      // @ts-ignore
      const finalY = doc.lastAutoTable.finalY + 20;
      doc.setFontSize(10);
      doc.text('This document contains confidential information. For authorized use only.', pageWidth / 2, finalY, { align: 'center' });
      
      // Save the PDF
      doc.save(`GrowthPath_Application_${applicationId}.pdf`);
      
      toast("PDF generated successfully!");
    } catch (err) {
      console.error('Error generating PDF:', err);
      toast("Failed to generate PDF");
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
            <ArrowLeft className="mr-2 h-4 w-4" />
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
      <div className="flex justify-between items-center">
        <CustomButton onClick={onBack} variant="outline" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Applications
        </CustomButton>
        
        <CustomButton 
          onClick={generatePDF} 
          disabled={generatePdfLoading}
          className="flex items-center"
        >
          {generatePdfLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <DownloadIcon className="mr-2 h-4 w-4" />
          )}
          {generatePdfLoading ? 'Generating PDF...' : 'Download as PDF'}
        </CustomButton>
      </div>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center border-b border-gray-200">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Application Details
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Application ID: {application.application_id}
            </p>
          </div>
          <div className="text-sm text-gray-500">
            <p>Submitted on: {formatDate(application.submission_date)}</p>
          </div>
        </div>
        
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
                { label: "SSN", value: `***-**-${application.social_security_number?.slice(-4) || '****'}` },
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
                { label: "Account Number", value: `****${application.account_number?.slice(-4) || '****'}` },
                { label: "Routing Number", value: `****${application.routing_number?.slice(-4) || '****'}` },
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
    </div>
  );
};

export default AdminApplicationDetails;
