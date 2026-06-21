export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          display_name: string | null
          avatar_url: string | null
          bio: string | null
          status: string | null
          online_status: 'online' | 'idle' | 'dnd' | 'offline'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          display_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          status?: string | null
          online_status?: 'online' | 'idle' | 'dnd' | 'offline'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          display_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          status?: string | null
          online_status?: 'online' | 'idle' | 'dnd' | 'offline'
          created_at?: string
          updated_at?: string
        }
      }
      groups: {
        Row: {
          id: string
          name: string
          description: string | null
          avatar_url: string | null
          group_id: string
          invite_code: string
          privacy: 'public' | 'private'
          max_members: number
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          avatar_url?: string | null
          group_id: string
          invite_code: string
          privacy?: 'public' | 'private'
          max_members?: number
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          avatar_url?: string | null
          group_id?: string
          invite_code?: string
          privacy?: 'public' | 'private'
          max_members?: number
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
      group_members: {
        Row: {
          id: string
          group_id: string
          user_id: string
          role: 'admin' | 'moderator' | 'member'
          joined_at: string
        }
        Insert: {
          id?: string
          group_id: string
          user_id: string
          role?: 'admin' | 'moderator' | 'member'
          joined_at?: string
        }
        Update: {
          id?: string
          group_id?: string
          user_id?: string
          role?: 'admin' | 'moderator' | 'member'
          joined_at?: string
        }
      }
      channels: {
        Row: {
          id: string
          group_id: string
          name: string
          type: 'text' | 'announcement' | 'media'
          position: number
          created_at: string
        }
        Insert: {
          id?: string
          group_id: string
          name: string
          type?: 'text' | 'announcement' | 'media'
          position?: number
          created_at?: string
        }
        Update: {
          id?: string
          group_id?: string
          name?: string
          type?: 'text' | 'announcement' | 'media'
          position?: number
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          channel_id: string
          user_id: string
          content: string
          type: 'text' | 'image' | 'file'
          file_url: string | null
          file_name: string | null
          file_size: number | null
          reply_to: string | null
          edited: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          channel_id: string
          user_id: string
          content: string
          type?: 'text' | 'image' | 'file'
          file_url?: string | null
          file_name?: string | null
          file_size?: number | null
          reply_to?: string | null
          edited?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          channel_id?: string
          user_id?: string
          content?: string
          type?: 'text' | 'image' | 'file'
          file_url?: string | null
          file_name?: string | null
          file_size?: number | null
          reply_to?: string | null
          edited?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      message_reactions: {
        Row: {
          id: string
          message_id: string
          user_id: string
          emoji: string
          created_at: string
        }
        Insert: {
          id?: string
          message_id: string
          user_id: string
          emoji: string
          created_at?: string
        }
        Update: {
          id?: string
          message_id?: string
          user_id?: string
          emoji?: string
          created_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          type: string
          content: string
          read: boolean
          created_at: string
          data: Json
        }
        Insert: {
          id?: string
          user_id: string
          type: string
          content: string
          read?: boolean
          created_at?: string
          data?: Json
        }
        Update: {
          id?: string
          user_id?: string
          type?: string
          content?: string
          read?: boolean
          created_at?: string
          data?: Json
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
