import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/database'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
})

export const getSupabase = () => supabase

export const uploadFile = async (file: File, path: string) => {
  const { data, error } = await supabase.storage
    .from('chat-files')
    .upload(path, file)

  if (error) throw error
  return data
}

export const getFileUrl = (path: string) => {
  const { data } = supabase.storage
    .from('chat-files')
    .getPublicUrl(path)
  return data.publicUrl
}

export default supabase
