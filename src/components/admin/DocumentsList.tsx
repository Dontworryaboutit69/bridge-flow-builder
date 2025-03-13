
import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { FileIcon, FileText, Loader2 } from 'lucide-react';

type DocumentsListProps = {
  applicationId: string;
};

type Document = {
  id: string | number;
  document_type: string;
  document_name: string;
  file_path: string;
  created_at: string;
  file_size?: number;
  file_type?: string;
};

const DocumentsList: React.FC<DocumentsListProps> = ({ applicationId }) => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Get documents from localStorage as a fallback
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setLoading(true);
        
        // Try to fetch from Supabase first
        const { data, error } = await supabase
          .from('GrowthPath Documents Table')
          .select('*')
          .eq('application_id', applicationId);
        
        if (error) {
          console.error('Supabase error:', error);
          // Fall back to localStorage
          fallbackToLocalStorage();
          return;
        }
        
        if (data && data.length > 0) {
          console.log('Documents found in Supabase:', data);
          setDocuments(data);
        } else {
          console.log('No documents found in Supabase, checking localStorage');
          fallbackToLocalStorage();
        }
      } catch (err) {
        console.error('Error fetching documents:', err);
        fallbackToLocalStorage();
      } finally {
        setLoading(false);
      }
    };
    
    const fallbackToLocalStorage = () => {
      // Use local storage as a fallback for document data
      try {
        const savedDocuments = localStorage.getItem(`documents_${applicationId}`);
        if (savedDocuments) {
          const parsedDocs = JSON.parse(savedDocuments);
          console.log('Documents from localStorage:', parsedDocs);
          setDocuments(parsedDocs);
        } else {
          console.log('No documents found in localStorage, using mock data');
          // If we need to simulate documents for demo purposes
          const mockDocuments = getMockDocuments();
          setDocuments(mockDocuments);
        }
      } catch (err) {
        console.error('Error getting documents from localStorage:', err);
        setError('Failed to load documents.');
      }
    };
    
    fetchDocuments();
  }, [applicationId]);

  const getMockDocuments = () => {
    // This provides some mock documents for demo purposes
    return [
      {
        id: 'doc_1',
        document_type: 'bank-statements',
        document_name: 'Bank Statement - January 2023',
        file_path: '/mock-path/bank-statement-jan.pdf',
        created_at: new Date().toISOString()
      },
      {
        id: 'doc_2',
        document_type: 'bank-statements',
        document_name: 'Bank Statement - February 2023',
        file_path: '/mock-path/bank-statement-feb.pdf',
        created_at: new Date().toISOString()
      },
      {
        id: 'doc_3',
        document_type: 'bank-statements',
        document_name: 'Bank Statement - March 2023',
        file_path: '/mock-path/bank-statement-mar.pdf',
        created_at: new Date().toISOString()
      },
      {
        id: 'doc_4',
        document_type: 'photo-id',
        document_name: 'Drivers License',
        file_path: '/mock-path/id.jpg',
        created_at: new Date().toISOString()
      },
      {
        id: 'doc_5',
        document_type: 'voided-check',
        document_name: 'Voided Check',
        file_path: '/mock-path/check.jpg',
        created_at: new Date().toISOString()
      }
    ];
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatDocumentType = (type: string) => {
    if (!type) return 'Unknown';
    
    // Convert kebab-case to title case
    return type.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (loading) {
    return (
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Documents</h4>
        <div className="flex justify-center items-center h-32">
          <Loader2 className="h-8 w-8 animate-spin text-funding-blue" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Documents</h4>
        <div className="bg-red-50 p-4 rounded-md">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  if (documents.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Documents</h4>
        <div className="text-center p-6 bg-white rounded-md shadow-sm">
          <p className="text-gray-500">No documents found for this application.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h4 className="text-lg font-medium text-gray-900 mb-4">Documents</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white rounded-md p-4 shadow-sm flex items-start">
            <div className="bg-funding-blue/10 p-2 rounded-md mr-4">
              <FileText className="h-6 w-6 text-funding-blue" />
            </div>
            <div className="flex-1">
              <h5 className="text-sm font-medium text-gray-900">{doc.document_name}</h5>
              <p className="text-xs text-gray-500 mt-1">
                Type: {formatDocumentType(doc.document_type)}
              </p>
              <p className="text-xs text-gray-500">
                Uploaded: {formatDate(doc.created_at)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsList;
