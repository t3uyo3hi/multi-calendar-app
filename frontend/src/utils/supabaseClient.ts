console.log("Supabase URL:", process.env.REACT_APP_SUPABASE_URL);
console.log("Supabase API Key:", process.env.REACT_APP_SUPABASE_API_KEY);

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and API Key must be defined");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
