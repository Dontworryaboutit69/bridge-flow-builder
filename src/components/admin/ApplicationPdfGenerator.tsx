
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
    
    // Initialize jsPDF
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
    
    // Track current Y position for dynamic positioning
    let yPosition = 50;
    
    // Add personal information section
    doc.setFontSize(16);
    doc.setTextColor(0, 48, 87); 
    doc.text("Personal Information", 14, yPosition);
    yPosition += 5;
    
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
      ["Social Security Number", application.social_security_number ? `***-**-${application.social_security_number.slice(-4)}` : 'N/A'],
      ["Date of Birth", safeValue(application.date_of_birth)]
    ];
    
    // @ts-ignore - Add personal info table
    doc.autoTable({
      startY: yPosition,
      head: [],
      body: personalInfo,
      theme: 'grid',
      styles: { fontSize: 10, cellPadding: 4 },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
      headStyles: { fillColor: [240, 240, 240] },
      didDrawPage: (data: any) => {
        yPosition = data.cursor.y + 10;
      }
    });
    
    // Add business info section
    doc.setFontSize(16);
    doc.setTextColor(0, 48, 87);
    doc.text("Business Information", 14, yPosition);
    yPosition += 5;
    
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
    
    // @ts-ignore - Add business info table
    doc.autoTable({
      startY: yPosition,
      head: [],
      body: businessInfo,
      theme: 'grid',
      styles: { fontSize: 10, cellPadding: 4 },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
      headStyles: { fillColor: [240, 240, 240] },
      didDrawPage: (data: any) => {
        yPosition = data.cursor.y + 10;
      }
    });
    
    // Add financial info section
    doc.setFontSize(16);
    doc.setTextColor(0, 48, 87);
    doc.text("Financial Information", 14, yPosition);
    yPosition += 5;
    
    const financialInfo = [
      ["Bank Name", safeValue(application.bank_name)],
      ["Account Number", application.account_number ? lastFourDigits(application.account_number) : 'N/A'],
      ["Routing Number", application.routing_number ? lastFourDigits(application.routing_number) : 'N/A'],
      ["Monthly Revenue", safeValue(application.monthly_revenue)],
      ["Credit Score", safeValue(application.credit_score)],
      ["Loan Amount", safeValue(application.loan_amount)],
      ["Use of Funds", safeValue(application.use_of_funds)]
    ];
    
    // @ts-ignore - Add financial info table
    doc.autoTable({
      startY: yPosition,
      head: [],
      body: financialInfo,
      theme: 'grid',
      styles: { fontSize: 10, cellPadding: 4 },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
      headStyles: { fillColor: [240, 240, 240] },
      didDrawPage: (data: any) => {
        yPosition = data.cursor.y + 10;
      }
    });
    
    // Add agreement info section
    doc.setFontSize(16);
    doc.setTextColor(0, 48, 87);
    doc.text("Agreement Information", 14, yPosition);
    yPosition += 5;
    
    const agreementInfo = [
      ["Terms Agreed", application.agree_to_terms ? "Yes" : "No"],
      ["Information Correct", application.agree_information_correct ? "Yes" : "No"],
      ["Signature", application.signature ? "Signed" : "Not signed"]
    ];
    
    // @ts-ignore - Add agreement info table
    doc.autoTable({
      startY: yPosition,
      head: [],
      body: agreementInfo,
      theme: 'grid',
      styles: { fontSize: 10, cellPadding: 4 },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 40 } },
      headStyles: { fillColor: [240, 240, 240] },
      didDrawPage: (data: any) => {
        yPosition = data.cursor.y + 15;
      }
    });
    
    // Add footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('This document contains confidential information. For authorized use only.', pageWidth / 2, doc.internal.pageSize.getHeight() - 20, { align: 'center' });
    doc.text(`Generated on ${new Date().toLocaleDateString()}`, pageWidth / 2, doc.internal.pageSize.getHeight() - 15, { align: 'center' });
    
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
