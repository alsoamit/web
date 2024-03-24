import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, message, name, company, phone } = body;

  if (!email || !name) {
    return NextResponse.json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_AUTH_USER,
      pass: process.env.EMAIL_AUTH_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_AUTH_USER,
    to: process.env.EMAIL_FORWARD_TO,
    subject: `New Outreach!`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nCompany: ${company}\nPhone: ${phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
