
import { supabase } from "@/integrations/supabase/client";

export type Document = {
  id: string;
  document_type: string;
  document_name: string;
  file_path: string;
  created_at: string;
};

export const fetchDocumentsForApplication = async (applicationId: string): Promise<Document[]> => {
  try {
    // Try to fetch from Supabase
    const { data, error } = await supabase
      .from('GrowthPath Documents Table')
      .select('*')
      .eq('application_id', applicationId);
    
    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
    
    if (data && data.length > 0) {
      // Convert the data to match our Document type
      return data.map(doc => ({
        id: doc.id.toString(),
        document_type: doc.document_type || '',
        document_name: doc.document_name || '',
        file_path: doc.file_path || '',
        created_at: doc.created_at
      }));
    }
    
    return [];
  } catch (err) {
    console.error('Error fetching documents:', err);
    throw err;
  }
};

export const getMockDocuments = (): Document[] => {
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
