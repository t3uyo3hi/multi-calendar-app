console.log("Supabase URL:", process.env.REACT_APP_SUPABASE_URL);
console.log("Supabase API Key:", process.env.REACT_APP_SUPABASE_API_KEY);

import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY;

const supabaseUrl = "https://zjltynhccwzqlsxlpncq.supabase.co"; // ここに直接URLを記述
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqbHR5bmhjY3d6cWxzeGxwbmNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwOTk0NTMsImV4cCI6MjAzMzY3NTQ1M30.mHCfuzhzZ8DLgQKSSxkLhDP--GSslEcfwpqtvLBOzQE"; // ここに直接キーを記述

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and API Key must be defined");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
