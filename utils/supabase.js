import {createClient} from "@supabase/supabase-js";


console.log(process.env.NEXT_PUBLIC_SUPABASE_KEY);
console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);

const options = {
    schema: 'public',
    headers: { 'x-my-custom-header': 'my-app-name' },
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    options
);