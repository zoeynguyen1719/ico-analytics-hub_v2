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
      basic_signups: {
        Row: {
          created_at: string
          email: string
          id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      ICO: {
        Row: {
          "ATH ROI": number | null
          created_at: string
          description: string | null
          distributed_percentage: number | null
          hard_cap: string | null
          "ICO date": string | null
          id: number
          kyc_required: boolean | null
          Platform: string | null
          Price: number | null
          "Project Name": string | null
          restricted_countries: string[] | null
          roadmap: Json | null
          ROI: number | null
          "Sale Price": number | null
          slug: string | null
          social_links: Json | null
          team_members: Json | null
          token_metrics: Json | null
          token_price: string | null
          token_supply: number | null
          token_type: string | null
          website_url: string | null
          whitepaper_url: string | null
        }
        Insert: {
          "ATH ROI"?: number | null
          created_at?: string
          description?: string | null
          distributed_percentage?: number | null
          hard_cap?: string | null
          "ICO date"?: string | null
          id?: number
          kyc_required?: boolean | null
          Platform?: string | null
          Price?: number | null
          "Project Name"?: string | null
          restricted_countries?: string[] | null
          roadmap?: Json | null
          ROI?: number | null
          "Sale Price"?: number | null
          slug?: string | null
          social_links?: Json | null
          team_members?: Json | null
          token_metrics?: Json | null
          token_price?: string | null
          token_supply?: number | null
          token_type?: string | null
          website_url?: string | null
          whitepaper_url?: string | null
        }
        Update: {
          "ATH ROI"?: number | null
          created_at?: string
          description?: string | null
          distributed_percentage?: number | null
          hard_cap?: string | null
          "ICO date"?: string | null
          id?: number
          kyc_required?: boolean | null
          Platform?: string | null
          Price?: number | null
          "Project Name"?: string | null
          restricted_countries?: string[] | null
          roadmap?: Json | null
          ROI?: number | null
          "Sale Price"?: number | null
          slug?: string | null
          social_links?: Json | null
          team_members?: Json | null
          token_metrics?: Json | null
          token_price?: string | null
          token_supply?: number | null
          token_type?: string | null
          website_url?: string | null
          whitepaper_url?: string | null
        }
        Relationships: []
      }
      research_reports: {
        Row: {
          category: string
          created_at: string
          description: string
          document_name: string
          document_url: string | null
          icon: string
          id: string
          pdf_url: string | null
          thumbnail_url: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          category: string
          created_at?: string
          description: string
          document_name: string
          document_url?: string | null
          icon: string
          id?: string
          pdf_url?: string | null
          thumbnail_url?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          document_name?: string
          document_url?: string | null
          icon?: string
          id?: string
          pdf_url?: string | null
          thumbnail_url?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: []
      }
      subscription_history: {
        Row: {
          changed_at: string | null
          id: string
          metadata: Json | null
          new_status: Database["public"]["Enums"]["subscription_status"] | null
          new_tier: Database["public"]["Enums"]["subscription_tier"] | null
          old_status: Database["public"]["Enums"]["subscription_status"] | null
          old_tier: Database["public"]["Enums"]["subscription_tier"] | null
          reason: string | null
          user_id: string | null
        }
        Insert: {
          changed_at?: string | null
          id?: string
          metadata?: Json | null
          new_status?: Database["public"]["Enums"]["subscription_status"] | null
          new_tier?: Database["public"]["Enums"]["subscription_tier"] | null
          old_status?: Database["public"]["Enums"]["subscription_status"] | null
          old_tier?: Database["public"]["Enums"]["subscription_tier"] | null
          reason?: string | null
          user_id?: string | null
        }
        Update: {
          changed_at?: string | null
          id?: string
          metadata?: Json | null
          new_status?: Database["public"]["Enums"]["subscription_status"] | null
          new_tier?: Database["public"]["Enums"]["subscription_tier"] | null
          old_status?: Database["public"]["Enums"]["subscription_status"] | null
          old_tier?: Database["public"]["Enums"]["subscription_tier"] | null
          reason?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          created_at: string
          current_period_end: string | null
          id: string
          status: Database["public"]["Enums"]["subscription_status"] | null
          stripe_subscription_id: string | null
          tier: Database["public"]["Enums"]["subscription_tier"]
          updated_at: string
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          created_at?: string
          current_period_end?: string | null
          id?: string
          status?: Database["public"]["Enums"]["subscription_status"] | null
          stripe_subscription_id?: string | null
          tier: Database["public"]["Enums"]["subscription_tier"]
          updated_at?: string
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          created_at?: string
          current_period_end?: string | null
          id?: string
          status?: Database["public"]["Enums"]["subscription_status"] | null
          stripe_subscription_id?: string | null
          tier?: Database["public"]["Enums"]["subscription_tier"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      website_visits: {
        Row: {
          created_at: string
          id: string
          is_authenticated: boolean | null
          page_visited: string
          user_id: string | null
          visit_duration: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_authenticated?: boolean | null
          page_visited: string
          user_id?: string | null
          visit_duration?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          is_authenticated?: boolean | null
          page_visited?: string
          user_id?: string | null
          visit_duration?: number | null
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
      subscription_status: "active" | "cancelled" | "past_due"
      subscription_tier: "basic" | "premium" | "advanced"
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
