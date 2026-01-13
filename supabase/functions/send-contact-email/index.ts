// // Follow this setup guide to integrate the Deno language server with your editor:
// // https://deno.land/manual/getting_started/setup_your_environment
// // This enables autocomplete, go to definition, etc.

// // Setup type definitions for built-in Supabase Runtime APIs
// import "jsr:@supabase/functions-js/edge-runtime.d.ts"

// console.log("Hello from Functions!")

// Deno.serve(async (req) => {
//   const { name } = await req.json()
//   const data = {
//     message: `Hello ${name}!`,
//   }

//   return new Response(
//     JSON.stringify(data),
//     { headers: { "Content-Type": "application/json" } },
//   )
// })

// /* To invoke locally:

//   1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
//   2. Make an HTTP request:

//   curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/send-contact-email' \
//     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//     --header 'Content-Type: application/json' \
//     --data '{"name":"Functions"}'

// */







// import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// serve(async (req) => {
//   try {
//     const { name, email, mobile, service, message } = await req.json();

//     const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

//     if (!RESEND_API_KEY) {
//       return new Response(
//         JSON.stringify({ error: "Missing RESEND_API_KEY" }),
//         { status: 500 }
//       );
//     }

//     const res = await fetch("https://api.resend.com/emails", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${RESEND_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         from: "DIGIXEA <contact@digixea.com>",
//         to: ["digixea1@gmail.com"],
//         subject: `New Contact Lead — ${name}`,
//         html: `
//           <div style="font-family: Arial, sans-serif;">
//             <h2>New Contact Form Submission</h2>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Mobile:</strong> ${mobile}</p>
//             <p><strong>Service:</strong> ${service}</p>
//             <p><strong>Message:</strong></p>
//             <p>${message}</p>
//           </div>
//         `,
//       }),
//     });

//     if (!res.ok) {
//       const errorText = await res.text();
//       return new Response(
//         JSON.stringify({ error: errorText }),
//         { status: 500 }
//       );
//     }

//     return new Response(
//       JSON.stringify({ success: true }),
//       { headers: { "Content-Type": "application/json" } }
//     );
//   } catch (err) {
//     return new Response(
//       JSON.stringify({ error: "Invalid request" }),
//       { status: 400 }
//     );
//   }
// });


// import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// serve(async (req) => {
//   try {
//     const { name, email, mobile, service, message } = await req.json();

//     const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

//     if (!RESEND_API_KEY) {
//       return new Response(
//         JSON.stringify({ error: "Missing RESEND_API_KEY" }),
//         { status: 500 }
//       );
//     }

//     const res = await fetch("https://api.resend.com/emails", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${RESEND_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         from: "DIGIXEA <onboarding@resend.dev>",
//         to: ["digixea1@gmail.com"],
//         subject: `New Contact Lead — ${name}`,
//         html: `
//           <div style="font-family: Arial, sans-serif;">
//             <h2>New Contact Form Submission</h2>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Mobile:</strong> ${mobile}</p>
//             <p><strong>Service:</strong> ${service}</p>
//             <p><strong>Message:</strong></p>
//             <p>${message}</p>
//           </div>
//         `,
//       }),
//     });

//     if (!res.ok) {
//       const errorText = await res.text();
//       return new Response(
//         JSON.stringify({ error: errorText }),
//         { status: 500 }
//       );
//     }

//     return new Response(
//       JSON.stringify({ success: true }),
//       { headers: { "Content-Type": "application/json" } }
//     );
//   } catch (err) {
//     return new Response(
//       JSON.stringify({ error: "Invalid request" }),
//       { status: 400 }
//     );
//   }
// });





// import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Headers":
//     "authorization, x-client-info, apikey, content-type",
//   "Access-Control-Allow-Methods": "POST, OPTIONS",
// };

// serve(async (req) => {
//   // 🔹 Handle CORS preflight
//   if (req.method === "OPTIONS") {
//     return new Response("ok", { headers: corsHeaders });
//   }

//   try {
//     const { name, email, mobile, service, message } = await req.json();

//     const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

//     if (!RESEND_API_KEY) {
//       return new Response(
//         JSON.stringify({ error: "Missing RESEND_API_KEY" }),
//         { status: 500, headers: corsHeaders }
//       );
//     }

//     const res = await fetch("https://api.resend.com/emails", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${RESEND_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         from: "DIGIXEA <onboarding@resend.dev>",
//         to: ["digixea1@gmail.com"],
//         subject: `New Contact Lead — ${name}`,
//         html: `
//           <div style="font-family: Arial, sans-serif;">
//             <h2>New Contact Form Submission</h2>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Mobile:</strong> ${mobile}</p>
//             <p><strong>Service:</strong> ${service}</p>
//             <p><strong>Message:</strong></p>
//             <p>${message}</p>
//           </div>
//         `,
//       }),
//     });

//     if (!res.ok) {
//       const errorText = await res.text();
//       return new Response(
//         JSON.stringify({ error: errorText }),
//         { status: 500, headers: corsHeaders }
//       );
//     }

//     return new Response(
//       JSON.stringify({ success: true }),
//       { status: 200, headers: corsHeaders }
//     );
//   } catch (err) {
//     return new Response(
//       JSON.stringify({ error: "Invalid request" }),
//       { status: 400, headers: corsHeaders }
//     );
//   }
// });


import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // ✅ Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, mobile, service, message } = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing RESEND_API_KEY" }),
        { status: 500, headers: corsHeaders }
      );
    }

    // ✅ SINGLE ADMIN EMAIL (SAFE)
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DIGIXEA <onboarding@resend.dev>",
        to: ["digixea1@gmail.com"],
        reply_to: email, // ✅ USER EMAIL HERE
        subject: `New Contact Lead — ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif;">
            <h2>New Contact Submission</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Mobile:</b> ${mobile}</p>
            <p><b>Service:</b> ${service}</p>
            <p><b>Message:</b></p>
            <p>${message}</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return new Response(
        JSON.stringify({ error: "Email failed" }),
        { status: 500, headers: corsHeaders }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Function error:", err);
    return new Response(
      JSON.stringify({ error: "Invalid request" }),
      { status: 400, headers: corsHeaders }
    );
  }
});
