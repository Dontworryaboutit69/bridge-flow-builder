
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from 'sonner';

export type Application = {
  id: number;
  created_at: string;
  application_id: string;
  first_name: string;
  last_name: string;
  email: string;
  business_name: string;
  loan_amount: string;
  submission_date: string;
};

export const useApplications = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      
      // Fetch applications from Supabase
      const { data, error } = await supabase
        .from('GrowthPath Application')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      setApplications(data || []);
      console.log('Fetched applications:', data);
    } catch (err) {
      console.error('Error fetching applications:', err);
      setError('Failed to load applications. Please try again.');
      toast("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return {
    applications,
    loading,
    error,
    fetchApplications
  };
};
