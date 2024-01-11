// import { createClient } from "@supabase/supabase-js";
// export const supabaseUrl = "https://njxehzoewvfolptocyzf.supabase.co";
// const supabaseKey =
//   " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qeGVoem9ld3Zmb2xwdG9jeXpmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDM5MzI3MSwiZXhwIjoyMDE5OTY5MjcxfQ.YwT30mWXIxveM0cp0Uv6EAT4KJHL07sy9V4he4E0IyA";
// const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://njxehzoewvfolptocyzf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qeGVoem9ld3Zmb2xwdG9jeXpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzOTMyNzEsImV4cCI6MjAxOTk2OTI3MX0.bWLtOQogkicWUWu8FD3PwYtyZ-jL9Pwj0JOvx1B-OCg";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
