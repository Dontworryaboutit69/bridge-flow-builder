
import React, { useState } from 'react';
import DocumentsLayout from '@/components/DocumentCollection/DocumentsLayout';
import DocumentPageFooter from '@/components/DocumentCollection/DocumentPageFooter';
import { Document } from '@/types/documents';
import Navbar from '@/components/Navbar';

const DocumentCollection = () => {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 'bank-statements',
      name: 'Last 3 Bank Statements',
      description: 'Most recent 3 months of business bank statements',
      uploaded: false,
      required: true,
    },
    {
      id: 'photo-id',
      name: 'Photo ID',
      description: 'Driver\'s license, passport, or government-issued photo ID',
      uploaded: false,
      required: true,
    },
    {
      id: 'business-license',
      name: 'Business License',
      description: 'Valid business license or registration',
      uploaded: false,
      required: false,
    },
    {
      id: 'tax-returns',
      name: 'Business Tax Returns',
      description: 'Most recent business tax return (if available)',
      uploaded: false,
      required: false,
    },
    {
      id: 'profit-loss',
      name: 'Profit & Loss Statement',
      description: 'Year-to-date profit and loss statement',
      uploaded: false,
      required: false,
    },
  ]);

  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const schedulingLink = "https://api.leadconnectorhq.com/widget/bookings/soniab";

  const handleUpload = (id: string) => {
    // Simulate file upload
    setUploadingId(id);
    setTimeout(() => {
      setDocuments(docs => docs.map(doc => 
        doc.id === id ? { ...doc, uploaded: true } : doc
      ));
      setUploadingId(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-8 md:pb-16 bg-funding-light-gray/30 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-soft-peach/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-soft-blue/20 rounded-full blur-3xl"></div>
          <div className="dot-pattern"></div>
        </div>
        
        <DocumentsLayout 
          documents={documents}
          uploadingId={uploadingId}
          handleUpload={handleUpload}
          schedulingLink={schedulingLink}
        />
      </main>
      
      <DocumentPageFooter />
    </div>
  );
};

export default DocumentCollection;
