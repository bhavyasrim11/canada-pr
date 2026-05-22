import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, email, phone, age, education, 
      experience, english, message 
    } = body;

    const headers = request.headers;
    const referer = headers.get("referer") || "Direct visit";

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || 587),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1) EMAIL TO ADMIN (You)
    await transporter.sendMail({
      from: `"VJC Overseas" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_USER,
      subject: ` NEW Canada PR Lead - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; border: 1px solid #ddd; padding: 20px;">
          <h2 style="color: #b30000;">New Canada PR Assessment Lead</h2>
          <hr>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
         
          <hr>
          <h3>Assessment Details:</h3>
          <ul>
            <li><strong>Age:</strong> ${age}</li>
            <li><strong>Education:</strong> ${education}</li>
            <li><strong>Work Experience:</strong> ${experience}</li>
            <li><strong>English Proficiency:</strong> ${english}</li>
          </ul>
          <p><strong>Message:</strong> ${message || 'N/A'}</p>
          <p><strong>Source:</strong> <a href="${referer}">${referer}</a></p>
          <div style="background: #f8d7da; padding: 15px; border-left: 5px solid #b30000; margin-top: 20px;">
            <p><strong>Action Required:</strong> Contact this lead within 4 hours for highest conversion.</p>
          </div>
        </div>
      `,
    });

    // 2) AUTO-REPLY TO THE CLIENT
    await transporter.sendMail({
      from: `"VJC Overseas" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: `✅ Your Canada PR Assessment - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #b30000;">Hello ${name},</h2>
          <p>Thank you for choosing VJC Overseas for your Canada PR assessment.</p>
          <p>Our experts are currently reviewing your profile based on the details provided (Education: ${education}, Experience: ${experience}).</p>
          
          <div style="background: #e7f3ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>What happens next?</strong></p>
            <p>One of our senior consultants  will call you shortly to provide your estimated CRS score and eligibility report.</p>
          </div>

          <p>If you have urgent questions, feel free to call us:</p>
          <p style="font-size: 20px; color: #b30000;"><strong>+91 91604 49000</strong></p>

          <p style="font-size: 12px; color: #777; margin-top: 30px;">
            Best Regards,<br>
            VJC Overseas Team<br>
            <a href="https://vjcoverseas.com">vjcoverseas.com</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}