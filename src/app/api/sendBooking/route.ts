import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { formatNaira, hotelContact } from "@/lib/hotelContent";

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

function renderRow(label: string, value: string, emphasize = false) {
  return `
    <tr>
      <td style="padding:10px 0;color:#64748b;font-size:14px;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:10px 0;color:${emphasize ? "#0b1d39" : "#1f2937"};font-size:${emphasize ? "16px" : "14px"};font-weight:${emphasize ? "800" : "600"};text-align:right;vertical-align:top;">
        ${value}
      </td>
    </tr>
  `;
}

export async function POST(req: Request) {
  try {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    const {
      name,
      email,
      phone,
      roomType,
      checkIn,
      checkOut,
      adults,
      children,
      specialRequests,
      nights,
      amount,
    } = await req.json();

    if (!name || !email || !phone || !roomType || !checkIn || !checkOut) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safePhone = escapeHtml(String(phone));
    const safeRoomType = escapeHtml(String(roomType));
    const safeAdults = escapeHtml(String(adults));
    const safeChildren = escapeHtml(String(children));
    const safeSpecialRequests = specialRequests
      ? escapeHtml(String(specialRequests))
      : "";

    const checkInDate = new Date(checkIn).toLocaleDateString("en-NG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const checkOutDate = new Date(checkOut).toLocaleDateString("en-NG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const nightlyRate =
      typeof amount === "number"
        ? amount
        : Number.parseInt(String(amount).replace(/[^0-9]/g, ""), 10) || 0;
    const totalAmount = nightlyRate * nights;
    const formattedRate = formatNaira(nightlyRate);
    const formattedTotal = formatNaira(totalAmount);
    const childLabel = Number(children) === 1 ? "Child" : "Children";
    const adultLabel = Number(adults) === 1 ? "Adult" : "Adults";

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        {
          success: false,
          message: `Email service is not configured yet. Please contact us on WhatsApp or call ${hotelContact.phoneDisplay}.`,
        },
        { status: 500 }
      );
    }

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

    const bookingSummaryTable = `
      <table style="width:100%;border-collapse:collapse;">
        ${renderRow("Room type", safeRoomType)}
        ${renderRow("Check-in", escapeHtml(checkInDate))}
        ${renderRow("Check-out", escapeHtml(checkOutDate))}
        ${renderRow("Duration", `${nights} night${nights > 1 ? "s" : ""}`)}
        ${renderRow("Rate", `${escapeHtml(formattedRate)} / night`)}
        ${renderRow("Guests", `${safeAdults} ${adultLabel}, ${safeChildren} ${childLabel}`)}
        ${renderRow("Estimated total", escapeHtml(formattedTotal), true)}
      </table>
    `;

    const internalHtml = renderEmailShell({
      badge: "New Booking Request",
      title: "A new reservation request just came in",
      subtitle:
        "A guest has submitted a booking request through the Nectar Hotels & Suites website.",
      body: `
        ${renderSection(
          "Guest details",
          `
            <table style="width:100%;border-collapse:collapse;">
              ${renderRow("Guest name", safeName)}
              ${renderRow("Email", `<a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a>`)}
              ${renderRow("Phone", `<a href="tel:${safePhone}" style="color:#2563eb;text-decoration:none;">${safePhone}</a>`)}
            </table>
          `
        )}

        ${renderSection("Booking summary", bookingSummaryTable)}

        ${
          safeSpecialRequests
            ? renderSection(
                "Special requests",
                `<p style="margin:0;color:#334155;font-size:14px;line-height:1.8;white-space:pre-wrap;">${safeSpecialRequests}</p>`
              )
            : ""
        }

        <div style="margin-top:26px;border-radius:20px;background:#0b1d39;padding:18px 20px;color:#e2e8f0;text-align:center;">
          <p style="margin:0;font-size:14px;line-height:1.7;">
            Please review this request and respond to the guest as soon as availability is confirmed.
          </p>
        </div>
      `,
    });

    const guestHtml = renderEmailShell({
      badge: "Booking Received",
      title: "Your booking request has been received",
      subtitle:
        "Thank you for choosing Nectar Hotels & Suites. We have received your request and our team is already reviewing availability for your selected dates.",
      body: `
        <div style="margin-bottom:18px;border-radius:22px;background:linear-gradient(135deg,#ecfdf3 0%,#f0fdf4 100%);padding:22px;border:1px solid #bbf7d0;">
          <p style="margin:0;color:#166534;font-size:14px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
            Reservation update
          </p>
          <p style="margin:10px 0 0;color:#14532d;font-size:16px;line-height:1.8;">
            Hello ${safeName}, we will contact you within 24 hours to confirm availability and guide you through the next step.
          </p>
        </div>

        ${renderSection("Your stay summary", bookingSummaryTable)}

        ${
          safeSpecialRequests
            ? renderSection(
                "Special requests submitted",
                `<p style="margin:0;color:#334155;font-size:14px;line-height:1.8;white-space:pre-wrap;">${safeSpecialRequests}</p>`
              )
            : ""
        }

        ${renderSection(
          "Need to update anything?",
          `
            <p style="margin:0 0 12px;color:#334155;font-size:14px;line-height:1.8;">
              If you want to change details or ask a quick question before confirmation, contact us directly:
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
              <a href="mailto:${hotelContact.reservationsEmail}" style="color:#2563eb;text-decoration:none;">${hotelContact.reservationsEmail}</a>
            </p>
          `
        )}

        <div style="margin-top:26px;border-radius:20px;background:#fff7ed;padding:18px 20px;border:1px solid #fdba74;">
          <p style="margin:0;color:#9a3412;font-size:13px;line-height:1.8;">
            Important: this message confirms that we received your request. It is not the final booking confirmation yet.
          </p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Nectar Hotels & Suites" <${emailUser}>`,
      to: hotelContact.reservationsEmail,
      subject: `New Booking Request - ${roomType} for ${name}`,
      html: internalHtml,
    });

    await transporter.sendMail({
      from: `"Nectar Hotels & Suites" <${emailUser}>`,
      to: email,
      subject: "Booking Request Received - Nectar Hotels & Suites",
      html: guestHtml,
    });

    return NextResponse.json({
      success: true,
      message:
        "Booking request sent successfully! We'll contact you shortly to confirm your reservation.",
    });
  } catch (error) {
    console.error("Booking error:", error);

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
        message: `Failed to send booking request. Please try again or contact us on WhatsApp or call ${hotelContact.phoneDisplay}.`,
      },
      { status: 500 }
    );
  }
}
