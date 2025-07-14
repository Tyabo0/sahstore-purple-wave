export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: number
          name: string
          description: string | null
          price: number
          stock: number
          image_urls: string[] | null
          created_at: string
        }
        Insert: {
          id?: number
          name: string
          description?: string | null
          price: number
          stock: number
          image_urls?: string[] | null
          created_at?: string
        }
        Update: {
          id?: number
          name?: string
          description?: string | null
          price?: number
          stock?: number
          image_urls?: string[] | null
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: number
          created_at: string
          customer_name: string
          items: Json
          total: number
        }
        Insert: {
          id?: number
          created_at?: string
          customer_name: string
          items: Json
          total: number
        }
        Update: {
          id?: number
          created_at?: string
          customer_name?: string
          items?: Json
          total?: number
        }
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

export type Product = Database['public']['Tables']['products']['Row'];
export type Order = Database['public']['Tables']['orders']['Row'];
