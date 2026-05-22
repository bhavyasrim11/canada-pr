import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    // 1. EXTRACT sourceUrl FROM REQUEST
    const { name, phone, email, prize, sourceUrl } = await request.json();

    const cleanMail = `vjc_spin:${email.toLowerCase().trim()}`;
    const cleanPhone = `vjc_spin:${phone.replace(/\D/g, "")}`;
    
    // 2. SAVE TO REDIS (Including the Source URL for tracking)
    try {
      const dataToSave = {
        prize: prize,
        url: sourceUrl || "Direct/Unknown",
        timestamp: new Date().toISOString()
      };
      // We store as a stringified object so you can see all info in Redis
      await redis.set(cleanMail, JSON.stringify(dataToSave));
      await redis.set(cleanPhone, JSON.stringify(dataToSave));
    } catch (redisErr) {
      console.error("❌ Redis Write Error:", redisErr);
    }

    // 3. SEND ADMIN EMAIL (Now with Tracking Info)
    await transporter.sendMail({
      from: `"VJC Website" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_USER,
      subject: `🎉 Winner Alert: ${name} won ${prize}`,
      text: `Winner Details:
----------------------
Name: ${name}
Phone: ${phone}
Email: ${email}
Prize: ${prize}
Page URL: ${sourceUrl || "Not tracked"}
Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
    });

    // 4. SEND USER EMAIL
    await transporter.sendMail({
      from: `"VJC Overseas" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: `Congratulations ${name}! You won the ${prize}! 🎁`,
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; border: 2px solid #fbbf24; border-radius: 15px;">
          <h2 style="color: #fbbf24;">YOU WON!</h2>
          <p>Hi ${name}, you won a <strong>${prize}</strong>!</p>
          <p>Our team will contact you on ${phone} shortly.</p>
          <br/>
          <a href="https://wa.me/919160449000" style="background: #25D366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Claim on WhatsApp</a>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Final API Error:', err);
    return NextResponse.json({ error: 'Process failed' }, { status: 500 });
  }
}