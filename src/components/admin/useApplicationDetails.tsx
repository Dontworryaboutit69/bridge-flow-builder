
import { useState, useEffect, useCallback } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from 'sonner';
import { ApplicationData } from '@/types/admin';

export const useApplicationDetails = (applicationId: string) => {
  const [application, setApplication] = useState<ApplicationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [generatePdfLoading, setGeneratePdfLoading] = useState<boolean>(false);

  const fetchApplicationDetails = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log(`Fetching details for application ID: ${applicationId}`);
      
      // Fetch application details from Supabase
      let query = supabase
        .from('GrowthPath Application')
        .select('*');
      
      // If applicationId is numeric, try to fetch by id first
      if (applicationId && !isNaN(Number(applicationId))) {
        // Try to fetch by both id column and application_id
        const { data: dataById, error: errorById } = await query
          .eq('id', Number(applicationId))
          .single();
          
        if (!errorById && dataById) {
          setApplication(dataById as ApplicationData);
          console.log('Fetched application details by ID:', dataById);
          setLoading(false);
          return;
        }
      }
      
      // Fetch by application_id string
      const { data, error } = await query
        .eq('application_id', applicationId)
        .maybeSingle();
      
      if (error) {
        throw error;
      }
      
      if (!data) {
        throw new Error(`No application found with ID: ${applicationId}`);
      }
      
      setApplication(data as ApplicationData);
      console.log('Fetched application details:', data);
    } catch (err: any) {
      console.error('Error fetching application details:', err);
      setError(err.message || 'Failed to load application details. Please try again.');
      toast("Failed to load application details");
    } finally {
      setLoading(false);
    }
  }, [applicationId]);

  useEffect(() => {
    if (applicationId) {
      fetchApplicationDetails();
    }
  }, [applicationId, fetchApplicationDetails]);

  return {
    application,
    loading,
    error,
    fetchApplicationDetails,
    generatePdfLoading,
    setGeneratePdfLoading
  };
};
