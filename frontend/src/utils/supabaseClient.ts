import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/supabase";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and API Key must be defined");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
