
import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import DocumentCard from './DocumentCard';
import { Document, fetchDocumentsForApplication, getMockDocuments } from '@/lib/documentService';
import { toast } from 'sonner';

type DocumentsListProps = {
  applicationId: string;
};

const DocumentsList: React.FC<DocumentsListProps> = ({ applicationId }) => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDocuments = async () => {
      if (!applicationId) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        console.log(`Loading documents for application ID: ${applicationId}`);
        
        try {
          // Try to fetch from Supabase
          const docs = await fetchDocumentsForApplication(applicationId);
          if (docs && docs.length > 0) {
            setDocuments(docs);
            return;
          }
        } catch (err) {
          console.error('Error fetching from Supabase:', err);
          // Continue to fallback options
        }
        
        // Fallback to localStorage
        try {
          const savedDocuments = localStorage.getItem(`documents_${applicationId}`);
          if (savedDocuments) {
            const parsedDocs = JSON.parse(savedDocuments);
            setDocuments(parsedDocs);
            return;
          }
        } catch (err) {
          console.error('Error getting documents from localStorage:', err);
        }
        
        // Last resort - use mock data
        console.log('Using mock documents data');
        const mockDocuments = getMockDocuments();
        setDocuments(mockDocuments);
        
      } catch (err: any) {
        console.error('Error loading documents:', err);
        setError(err.message || 'Failed to load documents.');
        toast("Error loading documents");
      } finally {
        setLoading(false);
      }
    };
    
    loadDocuments();
  }, [applicationId]);

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
          <DocumentCard key={doc.id} document={doc} />
        ))}
      </div>
    </div>
  );
};

export default DocumentsList;
