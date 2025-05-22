import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://ylukmyvdrlidtekthzst.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsdWtteXZkcmxpZHRla3RoenN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTc0NDMsImV4cCI6MjA2MzQ5MzQ0M30.pSbWByzSywkskZO8I8nl0acFttovyTkxC3kRRs56fWQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
