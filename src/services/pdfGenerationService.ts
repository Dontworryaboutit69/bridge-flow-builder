
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { toast } from 'sonner';
import { formatDate } from '@/lib/documentUtils';
import { ApplicationData } from '@/types/admin';
import {
  safeValue,
  createSafeFilename,
  generatePersonalInfoData,
  generateBusinessInfoData,
  generateFinancialInfoData,
  generateAgreementInfoData,
  addSectionHeader,
  addDataTable
} from '@/utils/pdfUtils';

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
    
    // Add header with title
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
    yPosition = addSectionHeader(doc, "Personal Information", yPosition);
    const personalInfo = generatePersonalInfoData(application);
    yPosition = addDataTable(doc, personalInfo, yPosition);
    
    // Add business info section
    yPosition = addSectionHeader(doc, "Business Information", yPosition);
    const businessInfo = generateBusinessInfoData(application);
    yPosition = addDataTable(doc, businessInfo, yPosition);
    
    // Add financial info section
    yPosition = addSectionHeader(doc, "Financial Information", yPosition);
    const financialInfo = generateFinancialInfoData(application);
    yPosition = addDataTable(doc, financialInfo, yPosition);
    
    // Add agreement info section
    yPosition = addSectionHeader(doc, "Agreement Information", yPosition);
    const agreementInfo = generateAgreementInfoData(application);
    yPosition = addDataTable(doc, agreementInfo, yPosition);
    
    // Add footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('This document contains confidential information. For authorized use only.', 
      pageWidth / 2, doc.internal.pageSize.getHeight() - 20, { align: 'center' });
    doc.text(`Generated on ${new Date().toLocaleDateString()}`, 
      pageWidth / 2, doc.internal.pageSize.getHeight() - 15, { align: 'center' });
    
    // Save the PDF with a safe filename
    const safeFilename = createSafeFilename(application.application_id);
    
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
