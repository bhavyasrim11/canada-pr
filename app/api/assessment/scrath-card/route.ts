import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
    // Receive sourceUrl from the frontend
    const { name, phone, email, prize, sourceUrl } = await request.json();

    // 1. Send to ADMIN
    await transporter.sendMail({
      from: `"VJC Scratch Win" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_USER,
      subject: `🎉 Winner Alert: ${name}`,
      text: `
        NEW SCRATCH CARD LEAD
        ---------------------
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Prize Won: ${prize}
        
        EXACT PAGE URL: ${sourceUrl || 'Not captured'}
        
        Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
      html: `
        <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #d32f2f;">New Scratch Card Winner!</h2>
          <table border="0" cellpadding="8">
            <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
            <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
            <tr><td><strong>Prize:</strong></td><td style="color: #d32f2f; font-weight: bold;">${prize}</td></tr>
            <tr><td><strong>Exact Page:</strong></td><td><a href="${sourceUrl}">${sourceUrl}</a></td></tr>
          </table>
        </div>
      `
    });

    // 2. Send to USER
    await transporter.sendMail({
      from: `"VJC Overseas" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: `Congratulations ${name}! You won: ${prize} 🍁`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; border: 2px solid #d32f2f; border-radius: 20px; overflow: hidden;">
          <div style="background: #d32f2f; padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0;">YOU WON!</h1>
          </div>
          <div style="padding: 30px; text-align: center;">
            <p>Hi ${name}, you successfully scratched and won:</p>
            <h2 style="color: #d32f2f;">${prize}</h2>
            <p>Our experts will contact you on <b>${phone}</b> shortly.</p>
            <br/>
            <a href="https://wa.me/919160449000?text=Hi, I won ${prize}!" style="background: #25D366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Claim on WhatsApp</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Mail system error:', err);
    return NextResponse.json({ error: 'Failed to send mails' }, { status: 500 });
  }
}