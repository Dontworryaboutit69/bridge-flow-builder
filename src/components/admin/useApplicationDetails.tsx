
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from 'sonner';
import { ApplicationData } from '@/types/admin';

export const useApplicationDetails = (applicationId: string) => {
  const [application, setApplication] = useState<ApplicationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [generatePdfLoading, setGeneratePdfLoading] = useState<boolean>(false);

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

  useEffect(() => {
    fetchApplicationDetails();
  }, [applicationId]);

  return {
    application,
    loading,
    error,
    fetchApplicationDetails,
    generatePdfLoading,
    setGeneratePdfLoading
  };
};
