import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {

  try {

    const body = await request.json();

    const {
      name,
      email,
      phone,
      age,
      education,
      experience,
      english,
      message,
    } = body;

    console.log("FORM DATA => ", body);

    const headers = request.headers;

    const referer =
      headers.get("referer") || "Direct visit";

    const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ADMIN MAIL
    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: `New Canada PR Lead - ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">

          <h2>New Canada PR Lead</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Age:</strong> ${age || "N/A"}</p>

          <p><strong>Education:</strong> ${education || "N/A"}</p>

          <p><strong>Experience:</strong> ${experience || "N/A"}</p>

          <p><strong>English:</strong> ${english || "N/A"}</p>

          <p><strong>Message:</strong> ${message || "N/A"}</p>

          <p><strong>Source:</strong> ${referer}</p>

        </div>
      `,
    });

    // AUTO REPLY MAIL
    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: email,

      subject: "Thank You For Contacting VJC Overseas",

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">

          <h2>Hello ${name},</h2>

          <p>
            Thank you for submitting your Canada PR assessment.
          </p>

          <p>
            Our team will contact you shortly.
          </p>

          <p>
            VJC Overseas Team
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (err) {

    console.log("FULL ERROR => ", err);

    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}