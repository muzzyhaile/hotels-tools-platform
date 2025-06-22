import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://avcucsonuulzqybwtnry.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2Y3Vjc29udXVsenF5Ynd0bnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3NTQ0NzUsImV4cCI6MjA1MTMzMDQ3NX0.T4W47gKPMDMx0C0GKO7GmTMK8IaXbFuE6FYaDJF4HgE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type { User } from '@supabase/supabase-js' 