import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter with working Hostinger config
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 10000,
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Send email to hotel support
    await transporter.sendMail({
      from: `"Nectar Hotels & Suites" <${process.env.EMAIL_USER}>`,
      to: "support@nectarhotelsandsuites.com",
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
              New Contact Message
            </h1>
            <p style="color: #e0f2fe; margin: 10px 0 0 0; font-size: 16px;">
              Nectar Hotels & Suites Website
            </p>
          </div>

          <div style="padding: 30px;">
            <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; margin-bottom: 25px;">
              <h2 style="color: #1e3a8a; margin: 0 0 15px 0; font-size: 20px;">👤 Contact Details</h2>
              <p style="margin: 8px 0; color: #374151;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0; color: #374151;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
            </div>

            <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 20px; margin-bottom: 25px;">
              <h2 style="color: #0c4a6e; margin: 0 0 15px 0; font-size: 20px;">💬 Message</h2>
              <div style="background: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="background: #f3f4f6; border-radius: 8px; padding: 20px; text-align: center; margin-top: 30px;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                ⏰ Please respond to this inquiry as soon as possible.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: `"Nectar Hotels & Suites" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ Message Received - Nectar Hotels & Suites`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
              Nectar Hotels & Suites
            </h1>
            <p style="color: #e0f2fe; margin: 10px 0 0 0; font-size: 16px;">
              Thank you for contacting us!
            </p>
          </div>

          <div style="padding: 30px;">
            <h2 style="color: #1e3a8a; margin: 0 0 20px 0; font-size: 24px;">
              Dear ${name},
            </h2>

            <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
              Thank you for reaching out to us! We have received your message and our team will review it carefully.
            </p>

            <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 25px 0;">
              <p style="margin: 0; color: #1e40af; font-weight: bold; font-size: 16px;">
                ⏰ We typically respond to inquiries within 24 hours during business hours.
              </p>
            </div>

            <div style="background: #f8fafc; border-radius: 8px; padding: 25px; margin: 25px 0;">
              <h3 style="color: #1e3a8a; margin: 0 0 15px 0; font-size: 20px;"> Your Message Summary</h3>
              <div style="background: #ffffff; padding: 15px; border-radius: 5px; border: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${message}</p>
              </div>
            </div>

            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 25px 0;">
              <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px;">📞 Need Immediate Assistance?</h3>
              <p style="color: #374151; margin-bottom: 15px;">
                If your inquiry is urgent, you can reach us directly:
              </p>
              <div style="color: #374151;">
                <p style="margin: 8px 0;"> <strong>Phone:</strong> <a href="tel:+2348067787196" style="color: #3b82f6;">+234 806 778 7196</a></p>
                <p style="margin: 8px 0;"> <strong>Email:</strong> <a href="mailto:support@nectarhotelsandsuites.com" style="color: #3b82f6;">support@nectarhotelsandsuites.com</a></p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Thank you for your interest in Nectar Hotels & Suites<br>
                We look forward to assisting you!
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message:
        "Message sent successfully! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Email configuration error. Please contact support directly.",
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to send message. Please try again or contact us directly at +234 806 778 7196.",
      },
      { status: 500 }
    );
  }
}
