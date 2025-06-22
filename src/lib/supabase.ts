import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://avcucsonuulzqybwtnry.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2Y3Vjc29udXVsenF5Ynd0bnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3ODU0NjIsImV4cCI6MjA1MjM2MTQ2Mn0.so76F0vYh4_5OQtCcSbvBNu4oZrUn7ntHomaS_5AM5s'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type { User } from '@supabase/supabase-js' 