import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
  type: "contact" | "registration";
  investmentType?: string;
  country?: string;
  phone?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactEmailRequest = await req.json();
    console.log("Received email request:", data);

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    let emailContent: string;
    let emailSubject: string;

    if (data.type === "registration") {
      emailSubject = `New Member Registration: ${data.name}`;
      emailContent = `
        <h2>New Member Registration</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Country:</strong> ${data.country || "N/A"}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Investment Type:</strong> ${data.investmentType || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
    } else {
      emailSubject = `Contact Form: ${data.subject}`;
      emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
    }

    // Send notification to admin
    const adminEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Al Saladin Al Muscat <onboarding@resend.dev>",
        to: ["info@alsadinmuscatinvest.com"],
        subject: emailSubject,
        html: emailContent,
      }),
    });

    const adminEmailData = await adminEmailRes.json();
    console.log("Admin email response:", adminEmailData);

    // Send confirmation to user
    const userEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Al Saladin Al Muscat <onboarding@resend.dev>",
        to: [data.email],
        subject: "Thank you for contacting Al Saladin Al Muscat Investment Company",
        html: `
          <h1>Thank you for reaching out, ${data.name}!</h1>
          <p>We have received your ${data.type === "registration" ? "membership registration" : "message"} and will get back to you as soon as possible.</p>
          <p>Our team typically responds within 24-48 business hours.</p>
          <br>
          <p>Best regards,</p>
          <p><strong>Al Saladin Al Muscat Investment Company</strong></p>
          <p>Flt. 505 5th Floor Office Al Saladin Tower</p>
          <p>Dohat Al Adab St., AL Khuwair, Muscat, Oman</p>
          <p>Tel: +968-750-7406-1</p>
          <p>Website: www.alsadinmuscatinvest.com</p>
        `,
      }),
    });

    const userEmailData = await userEmailRes.json();
    console.log("User confirmation email response:", userEmailData);

    return new Response(
      JSON.stringify({ success: true, adminEmail: adminEmailData, userEmail: userEmailData }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
