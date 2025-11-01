import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hvdyupbktvtymbxobxmo.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2ZHl1cGJrdHZ0eW1ieG9ieG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5Nzg4NzgsImV4cCI6MjA3NzU1NDg3OH0.6zEfhxFECCoKpxqPNzcmmmpsjulMCD2eM1e8Ywpst1c";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
