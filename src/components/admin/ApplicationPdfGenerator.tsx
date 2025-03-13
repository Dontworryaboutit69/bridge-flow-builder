
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { toast } from 'sonner';
import { formatDate } from '@/lib/documentUtils';

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

export const generateApplicationPDF = async (application: ApplicationData): Promise<void> => {
  try {
    // Initialize jsPDF
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Add header with logo and title
    doc.setFontSize(22);
    doc.setTextColor(0, 48, 87); // Dark blue color
    doc.text("GrowthPath Application", pageWidth / 2, 20, { align: 'center' });
    
    // Add application metadata
    doc.setFontSize(12);
    doc.setTextColor(70, 70, 70);
    doc.text(`Application ID: ${application.application_id}`, pageWidth / 2, 30, { align: 'center' });
    doc.text(`Submission Date: ${formatDate(application.submission_date)}`, pageWidth / 2, 38, { align: 'center' });
    
    // Add divider
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 42, pageWidth - 20, 42);
    
    // Add applicant info
    doc.setFontSize(16);
    doc.setTextColor(0, 48, 87); // Dark blue for section headers
    doc.text("Personal Information", 14, 50);
    
    const personalInfo = [
      ["Full Name", `${application.first_name} ${application.last_name}`],
      ["Email", application.email],
      ["Phone", application.phone],
      ["Address", `${application.address || ''}, ${application.city || ''}, ${application.state || ''} ${application.zip_code || ''}`],
      ["SSN", application.social_security_number ? `***-**-${application.social_security_number.slice(-4)}` : 'N/A'],
      ["Date of Birth", application.date_of_birth || 'N/A']
    ];
    
    // @ts-ignore - jspdf-autotable type definitions
    doc.autoTable({
      startY: 55,
      head: [],
      body: personalInfo,
      theme: 'grid',
      styles: { fontSize: 10, cellPadding: 4 },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
      headStyles: { fillColor: [240, 240, 240] }
    });
    
    // Add business info
    doc.setFontSize(16);
    doc.setTextColor(0, 48, 87);
    // @ts-ignore
    doc.text("Business Information", 14, doc.lastAutoTable.finalY + 15);
    
    const businessInfo = [
      ["Business Name", application.business_name || 'N/A'],
      ["Business Type", application.business_type || 'N/A'],
      ["Industry", application.industry || 'N/A'],
      ["Time in Business", application.time_in_business || 'N/A'],
      ["Employees", application.employee_count || 'N/A'],
      ["Business Address", [
        application.business_address, 
        application.business_city, 
        application.business_state, 
        application.business_zip_code
      ].filter(Boolean).join(', ') || 'N/A'],
      ["Website", application.website_url || 'N/A'],
      ["EIN", application.ein_number || 'N/A'],
      ["Ownership %", application.ownership_percentage || 'N/A']
    ];
    
    // @ts-ignore
    doc.autoTable({
      // @ts-ignore
      startY: doc.lastAutoTable.finalY + 20,
      head: [],
      body: businessInfo,
      theme: 'grid',
      styles: { fontSize: 10, cellPadding: 4 },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
      headStyles: { fillColor: [240, 240, 240] }
    });
    
    // Add financial info
    doc.setFontSize(16);
    doc.setTextColor(0, 48, 87);
    // @ts-ignore
    doc.text("Financial Information", 14, doc.lastAutoTable.finalY + 15);
    
    const financialInfo = [
      ["Bank Name", application.bank_name || 'N/A'],
      ["Account Number", application.account_number ? `****${application.account_number.slice(-4)}` : 'N/A'],
      ["Routing Number", application.routing_number ? `****${application.routing_number.slice(-4)}` : 'N/A'],
      ["Monthly Revenue", application.monthly_revenue || 'N/A'],
      ["Credit Score", application.credit_score || 'N/A'],
      ["Loan Amount", application.loan_amount || 'N/A'],
      ["Use of Funds", application.use_of_funds || 'N/A']
    ];
    
    // @ts-ignore
    doc.autoTable({
      // @ts-ignore
      startY: doc.lastAutoTable.finalY + 20,
      head: [],
      body: financialInfo,
      theme: 'grid',
      styles: { fontSize: 10, cellPadding: 4 },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
      headStyles: { fillColor: [240, 240, 240] }
    });
    
    // Add agreement info
    doc.setFontSize(16);
    doc.setTextColor(0, 48, 87);
    // @ts-ignore
    doc.text("Agreement Information", 14, doc.lastAutoTable.finalY + 15);
    
    const agreementInfo = [
      ["Terms Agreed", application.agree_to_terms ? "Yes" : "No"],
      ["Information Correct", application.agree_information_correct ? "Yes" : "No"],
      ["Signature", application.signature ? "Signed" : "Not signed"]
    ];
    
    // @ts-ignore
    doc.autoTable({
      // @ts-ignore
      startY: doc.lastAutoTable.finalY + 20,
      head: [],
      body: agreementInfo,
      theme: 'grid',
      styles: { fontSize: 10, cellPadding: 4 },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
      headStyles: { fillColor: [240, 240, 240] }
    });
    
    // Add footer
    // @ts-ignore
    const finalY = doc.lastAutoTable.finalY + 20;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('This document contains confidential information. For authorized use only.', pageWidth / 2, finalY, { align: 'center' });
    doc.text(`Generated on ${new Date().toLocaleDateString()}`, pageWidth / 2, finalY + 7, { align: 'center' });
    
    // Save the PDF
    doc.save(`GrowthPath_Application_${application.application_id}.pdf`);
    
    toast.success("PDF generated successfully!");
    return Promise.resolve();
  } catch (err) {
    console.error('Error generating PDF:', err);
    toast.error("Failed to generate PDF. Please try again.");
    return Promise.reject(err);
  }
};
