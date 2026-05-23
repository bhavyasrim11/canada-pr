import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({

  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {

  try {

    // GET FORM DATA
    const body = await request.json();

    const {
      name,
      email,
      phone,
    } = body;

    console.log("FORM DATA => ", body);

    // VALIDATION
    if (!name || !email || !phone) {

      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    // ADMIN EMAIL
    const adminMailOptions = {

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: `New Canada PR Lead - ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">

          <h2>New Canada PR Lead</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone}</p>

        </div>
      `,
    };

    // USER EMAIL
    const userMailOptions = {

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
            Our VJC Overseas team will contact you shortly.
          </p>

        </div>
      `,
    };

    // SEND ADMIN MAIL
    const adminResult =
      await transporter.sendMail(adminMailOptions);

    console.log(
      "ADMIN MAIL SENT => ",
      adminResult
    );

    // SEND USER MAIL
    const userResult =
      await transporter.sendMail(userMailOptions);

    console.log(
      "USER MAIL SENT => ",
      userResult
    );

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.log(
      "EMAIL ERROR => ",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error,
      },
      {
        status: 500,
      }
    );
  }
}