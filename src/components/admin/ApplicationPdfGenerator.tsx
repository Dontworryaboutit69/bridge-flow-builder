
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { toast } from 'sonner';
import { formatDate } from '@/lib/documentUtils';
import { ApplicationData } from '@/types/admin';

// Helper function to safely access nested properties
const safeValue = (value: any, defaultValue = 'N/A') => {
  if (value === null || value === undefined || value === '') {
    return defaultValue;
  }
  return String(value);
};

// Helper to safely get the last 4 digits of a sensitive number
const lastFourDigits = (value: string | null | undefined) => {
  if (!value) return 'N/A';
  if (value.length < 4) return '****';
  return `****${value.slice(-4)}`;
};

export const generateApplicationPDF = async (application: ApplicationData): Promise<void> => {
  try {
    if (!application) {
      toast.error("Cannot generate PDF: No application data");
      return Promise.reject(new Error("No application data"));
    }

    console.log('Generating PDF for application ID:', application.application_id);
    
    // Initialize jsPDF with more explicit typing
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Add header with logo and title
    doc.setFontSize(22);
    doc.setTextColor(0, 48, 87); // Dark blue color
    doc.text("GrowthPath Application", pageWidth / 2, 20, { align: 'center' });
    
    // Add application metadata
    doc.setFontSize(12);
    doc.setTextColor(70, 70, 70);
    doc.text(`Application ID: ${safeValue(application.application_id)}`, pageWidth / 2, 30, { align: 'center' });
    doc.text(`Submission Date: ${application.submission_date ? formatDate(application.submission_date) : 'N/A'}`, pageWidth / 2, 38, { align: 'center' });
    
    // Add divider
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 42, pageWidth - 20, 42);
    
    // Add applicant info
    doc.setFontSize(16);
    doc.setTextColor(0, 48, 87); // Dark blue for section headers
    doc.text("Personal Information", 14, 50);
    
    const personalInfo = [
      ["Full Name", `${safeValue(application.first_name, '')} ${safeValue(application.last_name, '')}`],
      ["Email", safeValue(application.email)],
      ["Phone", safeValue(application.phone)],
      ["Address", [
        safeValue(application.address, ''),
        safeValue(application.city, ''),
        safeValue(application.state, ''),
        safeValue(application.zip_code, '')
      ].filter(Boolean).join(', ') || 'N/A'],
      ["SSN", application.social_security_number ? `***-**-${application.social_security_number.slice(-4)}` : 'N/A'],
      ["Date of Birth", safeValue(application.date_of_birth)]
    ];
    
    try {
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
    } catch (tableErr) {
      console.error('Error creating personal info table:', tableErr);
    }
    
    // Add business info
    doc.setFontSize(16);
    doc.setTextColor(0, 48, 87);
    
    const currentY = doc.lastAutoTable?.finalY + 15 || 120;
    doc.text("Business Information", 14, currentY);
    
    const businessInfo = [
      ["Business Name", safeValue(application.business_name)],
      ["Business Type", safeValue(application.business_type)],
      ["Industry", safeValue(application.industry)],
      ["Time in Business", safeValue(application.time_in_business)],
      ["Employees", safeValue(application.employee_count)],
      ["Business Address", [
        safeValue(application.business_address, ''), 
        safeValue(application.business_city, ''), 
        safeValue(application.business_state, ''), 
        safeValue(application.business_zip_code, '')
      ].filter(Boolean).join(', ') || 'N/A'],
      ["Website", safeValue(application.website_url)],
      ["EIN", safeValue(application.ein_number)],
      ["Ownership %", safeValue(application.ownership_percentage)]
    ];
    
    try {
      // @ts-ignore
      doc.autoTable({
        // @ts-ignore
        startY: currentY + 5,
        head: [],
        body: businessInfo,
        theme: 'grid',
        styles: { fontSize: 10, cellPadding: 4 },
        columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
        headStyles: { fillColor: [240, 240, 240] }
      });
    } catch (tableErr) {
      console.error('Error creating business info table:', tableErr);
    }
    
    // Add financial info
    doc.setFontSize(16);
    doc.setTextColor(0, 48, 87);
    
    const financialY = doc.lastAutoTable?.finalY + 15 || 180;
    doc.text("Financial Information", 14, financialY);
    
    const financialInfo = [
      ["Bank Name", safeValue(application.bank_name)],
      ["Account Number", application.account_number ? lastFourDigits(application.account_number) : 'N/A'],
      ["Routing Number", application.routing_number ? lastFourDigits(application.routing_number) : 'N/A'],
      ["Monthly Revenue", safeValue(application.monthly_revenue)],
      ["Credit Score", safeValue(application.credit_score)],
      ["Loan Amount", safeValue(application.loan_amount)],
      ["Use of Funds", safeValue(application.use_of_funds)]
    ];
    
    try {
      // @ts-ignore
      doc.autoTable({
        startY: financialY + 5,
        head: [],
        body: financialInfo,
        theme: 'grid',
        styles: { fontSize: 10, cellPadding: 4 },
        columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
        headStyles: { fillColor: [240, 240, 240] }
      });
    } catch (tableErr) {
      console.error('Error creating financial info table:', tableErr);
    }
    
    // Add agreement info
    doc.setFontSize(16);
    doc.setTextColor(0, 48, 87);
    
    const agreementY = doc.lastAutoTable?.finalY + 15 || 240;
    doc.text("Agreement Information", 14, agreementY);
    
    const agreementInfo = [
      ["Terms Agreed", application.agree_to_terms ? "Yes" : "No"],
      ["Information Correct", application.agree_information_correct ? "Yes" : "No"],
      ["Signature", application.signature ? "Signed" : "Not signed"]
    ];
    
    try {
      // @ts-ignore
      doc.autoTable({
        startY: agreementY + 5,
        head: [],
        body: agreementInfo,
        theme: 'grid',
        styles: { fontSize: 10, cellPadding: 4 },
        columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
        headStyles: { fillColor: [240, 240, 240] }
      });
    } catch (tableErr) {
      console.error('Error creating agreement info table:', tableErr);
    }
    
    // Add footer
    const finalY = doc.lastAutoTable?.finalY + 20 || 270;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('This document contains confidential information. For authorized use only.', pageWidth / 2, finalY, { align: 'center' });
    doc.text(`Generated on ${new Date().toLocaleDateString()}`, pageWidth / 2, finalY + 7, { align: 'center' });
    
    // Save the PDF with a safe filename
    const safeFilename = `GrowthPath_Application_${safeValue(application.application_id, 'download').replace(/[^a-z0-9]/gi, '_')}.pdf`;
    
    console.log('Saving PDF with filename:', safeFilename);
    doc.save(safeFilename);
    
    toast.success("PDF generated successfully!");
    return Promise.resolve();
  } catch (err) {
    console.error('Error generating PDF:', err);
    toast.error("Failed to generate PDF. Please try again.");
    return Promise.reject(err);
  }
};
