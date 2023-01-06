export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Todos: {
        Row: {
          description: string
          created_at: string
          is_done: boolean | null
          id_todo: string
          id_user: string
        }
        Insert: {
          description: string
          created_at?: string
          is_done?: boolean | null
          id_todo?: string
          id_user: string
        }
        Update: {
          description?: string
          created_at?: string
          is_done?: boolean | null
          id_todo?: string
          id_user?: string
        }
      }
      Users: {
        Row: {
          created_at: string
          username: string
          hashed_password: string
          id_user: string
        }
        Insert: {
          created_at?: string
          username: string
          hashed_password: string
          id_user?: string
        }
        Update: {
          created_at?: string
          username?: string
          hashed_password?: string
          id_user?: string
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
  }
}
