export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      "GrowthPath Application": {
        Row: {
          account_number: string | null
          address: string | null
          agree_information_correct: boolean | null
          agree_to_terms: boolean | null
          application_id: string | null
          bank_name: string | null
          business_address: string | null
          business_city: string | null
          business_name: string | null
          business_start_date: string | null
          business_state: string | null
          business_type: string | null
          business_zip_code: string | null
          city: string | null
          created_at: string
          credit_score: string | null
          date_of_birth: string | null
          ein_number: string | null
          email: string | null
          employee_count: string | null
          first_name: string | null
          form_type: string | null
          id: number
          industry: string | null
          last_name: string | null
          loan_amount: string | null
          monthly_revenue: string | null
          ownership_percentage: string | null
          phone: string | null
          routing_number: string | null
          signature: string | null
          social_security_number: string | null
          source_url: string | null
          state: string | null
          status: string | null
          submission_date: string | null
          time_in_business: string | null
          updated_at: string | null
          use_of_funds: string | null
          webhook_url: string | null
          website_url: string | null
          zip_code: string | null
        }
        Insert: {
          account_number?: string | null
          address?: string | null
          agree_information_correct?: boolean | null
          agree_to_terms?: boolean | null
          application_id?: string | null
          bank_name?: string | null
          business_address?: string | null
          business_city?: string | null
          business_name?: string | null
          business_start_date?: string | null
          business_state?: string | null
          business_type?: string | null
          business_zip_code?: string | null
          city?: string | null
          created_at?: string
          credit_score?: string | null
          date_of_birth?: string | null
          ein_number?: string | null
          email?: string | null
          employee_count?: string | null
          first_name?: string | null
          form_type?: string | null
          id?: number
          industry?: string | null
          last_name?: string | null
          loan_amount?: string | null
          monthly_revenue?: string | null
          ownership_percentage?: string | null
          phone?: string | null
          routing_number?: string | null
          signature?: string | null
          social_security_number?: string | null
          source_url?: string | null
          state?: string | null
          status?: string | null
          submission_date?: string | null
          time_in_business?: string | null
          updated_at?: string | null
          use_of_funds?: string | null
          webhook_url?: string | null
          website_url?: string | null
          zip_code?: string | null
        }
        Update: {
          account_number?: string | null
          address?: string | null
          agree_information_correct?: boolean | null
          agree_to_terms?: boolean | null
          application_id?: string | null
          bank_name?: string | null
          business_address?: string | null
          business_city?: string | null
          business_name?: string | null
          business_start_date?: string | null
          business_state?: string | null
          business_type?: string | null
          business_zip_code?: string | null
          city?: string | null
          created_at?: string
          credit_score?: string | null
          date_of_birth?: string | null
          ein_number?: string | null
          email?: string | null
          employee_count?: string | null
          first_name?: string | null
          form_type?: string | null
          id?: number
          industry?: string | null
          last_name?: string | null
          loan_amount?: string | null
          monthly_revenue?: string | null
          ownership_percentage?: string | null
          phone?: string | null
          routing_number?: string | null
          signature?: string | null
          social_security_number?: string | null
          source_url?: string | null
          state?: string | null
          status?: string | null
          submission_date?: string | null
          time_in_business?: string | null
          updated_at?: string | null
          use_of_funds?: string | null
          webhook_url?: string | null
          website_url?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      "GrowthPath Documents Table": {
        Row: {
          application_id: string | null
          created_at: string
          document_name: string | null
          document_type: string | null
          file_path: string | null
          file_size: number | null
          file_type: string | null
          id: number
        }
        Insert: {
          application_id?: string | null
          created_at?: string
          document_name?: string | null
          document_type?: string | null
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          id?: number
        }
        Update: {
          application_id?: string | null
          created_at?: string
          document_name?: string | null
          document_type?: string | null
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
