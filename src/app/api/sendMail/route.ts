import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { hotelContact } from "@/lib/hotelContent";

const logoUrl =
  "https://www.nectarhotelsandsuites.com/images/Update%20Nectar%20Hotels.png";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderEmailShell({
  badge,
  title,
  subtitle,
  body,
}: {
  badge: string;
  title: string;
  subtitle: string;
  body: string;
}) {
  return `
    <div style="margin:0;background:#eef5ff;padding:32px 12px;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;color:#1f2937;">
      <div style="max-width:680px;margin:0 auto;">
        <div style="overflow:hidden;border-radius:28px;background:#ffffff;box-shadow:0 24px 60px rgba(15,23,42,0.12);">
          <div style="background:linear-gradient(135deg,#0b1d39 0%,#1d4ed8 60%,#38bdf8 100%);padding:32px 28px 42px;text-align:center;">
            <div style="display:inline-block;border-radius:999px;background:rgba(255,255,255,0.16);padding:8px 14px;color:#dbeafe;font-size:11px;font-weight:700;letter-spacing:0.24em;text-transform:uppercase;">
              ${badge}
            </div>
            <div style="margin-top:18px;">
              <img
                src="${logoUrl}"
                alt="Nectar Hotels & Suites"
                style="width:100%;max-width:190px;height:auto;"
              />
            </div>
            <h1 style="margin:22px 0 10px;color:#ffffff;font-size:30px;line-height:1.2;font-weight:800;">
              ${title}
            </h1>
            <p style="margin:0 auto;max-width:520px;color:#dbeafe;font-size:15px;line-height:1.7;">
              ${subtitle}
            </p>
          </div>

          <div style="padding:28px;">
            ${body}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSection(title: string, content: string) {
  return `
    <div style="margin-bottom:18px;border:1px solid #dbe7ff;border-radius:22px;background:#f8fbff;padding:22px;">
      <h2 style="margin:0 0 14px;color:#0b1d39;font-size:18px;font-weight:800;">
        ${title}
      </h2>
      ${content}
    </div>
  `;
}

function renderRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;color:#64748b;font-size:14px;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:10px 0;color:#1f2937;font-size:14px;font-weight:600;text-align:right;vertical-align:top;">
        ${value}
      </td>
    </tr>
  `;
}

export async function POST(req: Request) {
  try {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        {
          success: false,
          message: `Email service is not configured yet. Please contact us on WhatsApp or call ${hotelContact.phoneDisplay}.`,
        },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeMessage = escapeHtml(String(message));

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      connectionTimeout: 10000,
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();

    const internalHtml = renderEmailShell({
      badge: "New Contact Message",
      title: "A new guest inquiry has arrived",
      subtitle:
        "A website visitor has sent a message through the Nectar Hotels & Suites contact form.",
      body: `
        ${renderSection(
          "Contact details",
          `
            <table style="width:100%;border-collapse:collapse;">
              ${renderRow("Guest name", safeName)}
              ${renderRow("Email", `<a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a>`)}
            </table>
          `
        )}

        ${renderSection(
          "Message",
          `<p style="margin:0;color:#334155;font-size:14px;line-height:1.9;white-space:pre-wrap;">${safeMessage}</p>`
        )}

        <div style="margin-top:26px;border-radius:20px;background:#0b1d39;padding:18px 20px;color:#e2e8f0;text-align:center;">
          <p style="margin:0;font-size:14px;line-height:1.7;">
            Please respond to this inquiry as soon as possible.
          </p>
        </div>
      `,
    });

    const guestHtml = renderEmailShell({
      badge: "Message Received",
      title: "Your message has been received",
      subtitle:
        "Thank you for contacting Nectar Hotels & Suites. Our team has received your message and will review it shortly.",
      body: `
        <div style="margin-bottom:18px;border-radius:22px;background:linear-gradient(135deg,#ecfdf3 0%,#f0fdf4 100%);padding:22px;border:1px solid #bbf7d0;">
          <p style="margin:0;color:#166534;font-size:14px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
            Support update
          </p>
          <p style="margin:10px 0 0;color:#14532d;font-size:16px;line-height:1.8;">
            Hello ${safeName}, we typically respond within 24 hours during business hours.
          </p>
        </div>

        ${renderSection(
          "Your message summary",
          `<p style="margin:0;color:#334155;font-size:14px;line-height:1.9;white-space:pre-wrap;">${safeMessage}</p>`
        )}

        ${renderSection(
          "Need urgent assistance?",
          `
            <p style="margin:0 0 12px;color:#334155;font-size:14px;line-height:1.8;">
              If your question is urgent, you can reach us directly:
            </p>
            <p style="margin:0 0 8px;color:#1f2937;font-size:14px;">
              <strong>Phone:</strong>
              <a href="tel:${hotelContact.phoneHref}" style="color:#2563eb;text-decoration:none;">${hotelContact.phoneDisplay}</a>
            </p>
            <p style="margin:0 0 8px;color:#1f2937;font-size:14px;">
              <strong>WhatsApp:</strong>
              <a href="https://wa.me/${hotelContact.whatsappNumber}" style="color:#2563eb;text-decoration:none;">${hotelContact.whatsappDisplay}</a>
            </p>
            <p style="margin:0;color:#1f2937;font-size:14px;">
              <strong>Email:</strong>
              <a href="mailto:${hotelContact.email}" style="color:#2563eb;text-decoration:none;">${hotelContact.email}</a>
            </p>
          `
        )}
      `,
    });

    await transporter.sendMail({
      from: `"Nectar Hotels & Suites" <${emailUser}>`,
      to: hotelContact.email,
      subject: `New Contact Message from ${name}`,
      html: internalHtml,
    });

    await transporter.sendMail({
      from: `"Nectar Hotels & Suites" <${emailUser}>`,
      to: email,
      subject: "Message Received - Nectar Hotels & Suites",
      html: guestHtml,
    });

    return NextResponse.json({
      success: true,
      message:
        "Message sent successfully! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof Error && error.message.includes("Invalid login")) {
      return NextResponse.json(
        {
          success: false,
          message: `Email configuration error. Please reach us on WhatsApp or call ${hotelContact.phoneDisplay}.`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: `Failed to send message. Please try again or contact us on WhatsApp or call ${hotelContact.phoneDisplay}.`,
      },
      { status: 500 }
    );
  }
}
