import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    // NEW: Handle FormData instead of JSON
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const number = formData.get('number') as string;
    const experience = formData.get('experience') as string;
    const resumeFile = formData.get('resume') as File | null;

    // Validate required fields
    if (!name || !email || !number || !experience) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://canada.vjcoverseas.com';

    // NEW: Prepare resume attachment if file exists
    let resumeAttachment = null;
    if (resumeFile) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      resumeAttachment = {
        filename: resumeFile.name,
        content: buffer,
      };
    }

    // Admin Email Template
    const adminMailOptions = {
      from: process.env.EMAIL_FROM || '"VJC Overseas" <vjcmarketingads@gmail.com>',
      to: process.env.EMAIL_USER || 'vjcmarketingads@gmail.com',
      subject: `🟥 New Canada PR Form Submission - ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; font-size: 24px; margin-bottom: 16px;">New Canada PR Lead</h2>
          <div style="background: #f8fafc; padding: 24px; border-radius: 12px; margin-bottom: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: 600; color: #475569;">Name:</td><td style="padding: 8px 0; color: #1e293b;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600; color: #475569;">Email:</td><td style="padding: 8px 0; color: #1e293b;">${email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600; color: #475569;">Phone:</td><td style="padding: 8px 0; color: #1e293b;">${number}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600; color: #475569;">Experience:</td><td style="padding: 8px 0; color: #1e293b;">${experience} years</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600; color: #475569;">Resume:</td><td style="padding: 8px 0; color: #1e293b;">${resumeFile ? '✅ Attached' : '❌ Not provided'}</td></tr>
            </table>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}<br/>
            Source: Canada PR Form
          </p>
        </div>
      `,
      // NEW: Add attachment if resume exists
      ...(resumeAttachment && { attachments: [resumeAttachment] }),
    };

    // User Confirmation Email Template
    const userMailOptions = {
      from: process.env.EMAIL_FROM || '"VJC Overseas" <vjcmarketingads@gmail.com>',
      to: email,
      subject: '✅ Thank You for Your Canada Immigration Assessment - VJC Overseas',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px;">
          <div style="background: white; border-radius: 20px; padding: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 32px;">
              <h1 style="color: #dc2626; font-size: 28px; margin: 0; font-weight: 700;">Thank You ${name}!</h1>
              <p style="color: #64748b; font-size: 16px; margin: 8px 0 0 0;">Your Canada Immigration Assessment is processing</p>
            </div>
            
            <div style="background: #fef7f7; padding: 24px; border-radius: 12px; border-left: 4px solid #dc2626; margin-bottom: 24px;">
              <h3 style="color: #dc2626; margin: 0 0 12px 0; font-size: 18px;">📋 What Happens Next?</h3>
              <ul style="color: #475569; font-size: 14px; margin: 0; padding-left: 20px;">
                <li>Our Canada Immigration Expert will review your profile within 24 hours</li>
                <li>You'll receive a personalized assessment report</li>
                <li>Free 30-min consultation call scheduled</li>
              </ul>
            </div>

            <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 24px;">
              <p style="margin: 0 0 12px 0; color: #475569;"><strong>Your Details:</strong></p>
              <p style="margin: 0 0 4px 0; color: #1e293b;">📧 ${email}</p>
              <p style="margin: 0 0 4px 0; color: #1e293b;">📱 ${number}</p>
              <p style="margin: 0; color: #1e293b;">💼 ${experience} years experience</p>
            </div>

            <div style="text-align: center;">
              <p style="color: #64748b; font-size: 14px; margin-bottom: 24px;">
                Have questions? Reply to this email or call us anytime.
              </p>
              <p style="color: #1e293b; font-size: 12px; margin: 0;">
                <strong>VJC Overseas</strong> | India's Trusted Immigration Partner
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Email submission error:', error);
    return NextResponse.json(
      { error: 'Failed to send emails. Please try again later.' }, 
      { status: 500 }
    );
  }
}