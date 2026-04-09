import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { formatNaira, hotelContact } from "@/lib/hotelContent";

const logoUrl =
  "https://www.nectarhotelsandsuites.com/images/Update%20Nectar%20Hotels.png";

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

    await transporter.sendMail({
      from: `"Nectar Hotels & Suites" <${emailUser}>`,
      to: hotelContact.reservationsEmail,
      subject: `New Booking Request - ${roomType} for ${name}`,
      html: `
        <div style="font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">
          <div style="background:linear-gradient(135deg,#1e3a8a 0%,#3b82f6 100%);padding:30px;text-align:center;">
            <img
              src="${logoUrl}"
              alt="Nectar Hotels & Suites"
              style="width:100%;max-width:180px;height:auto;margin-bottom:10px;"
            />
            <h1 style="color:#ffffff;margin:0;font-size:28px;font-weight:bold;">
              New Booking Request
            </h1>
            <p style="color:#e0f2fe;margin:10px 0 0 0;font-size:16px;">
              Nectar Hotels & Suites
            </p>
          </div>

          <div style="padding:30px;">
            <div style="background:#f8fafc;border-left:4px solid #3b82f6;padding:20px;margin-bottom:25px;">
              <h2 style="color:#1e3a8a;margin:0 0 15px 0;font-size:20px;">Guest Information</h2>
              <p style="margin:8px 0;color:#374151;"><strong>Name:</strong> ${name}</p>
              <p style="margin:8px 0;color:#374151;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#3b82f6;">${email}</a></p>
              <p style="margin:8px 0;color:#374151;"><strong>Phone:</strong> <a href="tel:${phone}" style="color:#3b82f6;">${phone}</a></p>
            </div>

            <div style="background:#f0f9ff;border-left:4px solid #0ea5e9;padding:20px;margin-bottom:25px;">
              <h2 style="color:#0c4a6e;margin:0 0 15px 0;font-size:20px;">Booking Details</h2>
              <p style="margin:8px 0;color:#374151;"><strong>Room Type:</strong> ${roomType}</p>
              <p style="margin:8px 0;color:#374151;"><strong>Check-in:</strong> ${checkInDate}</p>
              <p style="margin:8px 0;color:#374151;"><strong>Check-out:</strong> ${checkOutDate}</p>
              <p style="margin:8px 0;color:#374151;"><strong>Duration:</strong> ${nights} night${
        nights > 1 ? "s" : ""
      }</p>
              <p style="margin:8px 0;color:#374151;"><strong>Rate:</strong> ${formattedRate} per night</p>
              <p style="margin:8px 0;color:#374151;font-size:18px;"><strong>Total Amount:</strong> <span style="color:#059669;font-weight:bold;">${formattedTotal}</span></p>
            </div>

            <div style="background:#f0fdf4;border-left:4px solid #22c55e;padding:20px;margin-bottom:25px;">
              <h2 style="color:#166534;margin:0 0 15px 0;font-size:20px;">Guest Count</h2>
              <p style="margin:8px 0;color:#374151;"><strong>Adults:</strong> ${adults}</p>
              <p style="margin:8px 0;color:#374151;"><strong>Children:</strong> ${children}</p>
            </div>

            ${
              specialRequests
                ? `
              <div style="background:#fefce8;border-left:4px solid #eab308;padding:20px;margin-bottom:25px;">
                <h2 style="color:#a16207;margin:0 0 15px 0;font-size:20px;">Special Requests</h2>
                <p style="margin:0;color:#374151;line-height:1.6;">${specialRequests}</p>
              </div>
            `
                : ""
            }

            <div style="background:#f3f4f6;border-radius:8px;padding:20px;text-align:center;margin-top:30px;">
              <p style="margin:0;color:#6b7280;font-size:14px;">
                Please review and confirm this booking request as soon as possible.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Nectar Hotels & Suites" <${emailUser}>`,
      to: email,
      subject: "Booking Request Received - Nectar Hotels & Suites",
      html: `
        <div style="font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">
          <div style="background:linear-gradient(135deg,#1e3a8a 0%,#3b82f6 100%);padding:30px;text-align:center;">
            <img
              src="${logoUrl}"
              alt="Nectar Hotels & Suites"
              style="width:100%;max-width:180px;height:auto;margin-bottom:10px;"
            />
            <h1 style="color:#ffffff;margin:0;font-size:28px;font-weight:bold;">
              Nectar Hotels & Suites
            </h1>
            <p style="color:#e0f2fe;margin:10px 0 0 0;font-size:16px;">
              Thank you for choosing us
            </p>
          </div>

          <div style="padding:30px;">
            <h2 style="color:#1e3a8a;margin:0 0 20px 0;font-size:24px;">
              Dear ${name},
            </h2>

            <p style="font-size:16px;line-height:1.6;color:#374151;margin-bottom:20px;">
              Thank you for your interest in staying with us. We have received your booking request and are currently reviewing it for availability.
            </p>

            <div style="background:#f0f9ff;border-left:4px solid #3b82f6;padding:20px;margin:25px 0;">
              <p style="margin:0;color:#1e40af;font-weight:bold;font-size:16px;">
                Our team will contact you within 24 hours to confirm your reservation.
              </p>
            </div>

            <div style="background:#f8fafc;border-radius:8px;padding:25px;margin:25px 0;">
              <h3 style="color:#1e3a8a;margin:0 0 15px 0;font-size:20px;">Booking Summary</h3>
              <div style="border-bottom:1px solid #e5e7eb;padding-bottom:15px;margin-bottom:15px;">
                <p style="margin:5px 0;color:#374151;"><strong>Room Type:</strong> ${roomType}</p>
                <p style="margin:5px 0;color:#374151;"><strong>Check-in:</strong> ${checkInDate}</p>
                <p style="margin:5px 0;color:#374151;"><strong>Check-out:</strong> ${checkOutDate}</p>
                <p style="margin:5px 0;color:#374151;"><strong>Duration:</strong> ${nights} night${
        nights > 1 ? "s" : ""
      }</p>
              </div>
              <p style="margin:5px 0;color:#374151;"><strong>Guests:</strong> ${adults} ${adultLabel}, ${children} ${childLabel}</p>
              <p style="margin:15px 0 0 0;color:#059669;font-weight:bold;font-size:18px;">
                Total Amount: ${formattedTotal}
              </p>
            </div>

            <div style="background:#fef3c7;border-left:4px solid #f59e0b;padding:20px;margin:25px 0;">
              <h3 style="color:#92400e;margin:0 0 15px 0;font-size:18px;">Need to make changes?</h3>
              <p style="color:#374151;margin-bottom:15px;">
                If you need to modify your booking or have any questions, please contact us:
              </p>
              <div style="color:#374151;">
                <p style="margin:8px 0;"><strong>Phone:</strong> <a href="tel:${hotelContact.phoneHref}" style="color:#3b82f6;">${hotelContact.phoneDisplay}</a></p>
                <p style="margin:8px 0;"><strong>Email:</strong> <a href="mailto:${hotelContact.reservationsEmail}" style="color:#3b82f6;">${hotelContact.reservationsEmail}</a></p>
              </div>
            </div>

            <div style="background:#fee2e2;border-left:4px solid #ef4444;padding:20px;margin:30px 0;border-radius:4px;">
              <p style="margin:0;color:#7f1d1d;font-style:italic;font-size:14px;">
                Important: This is not a booking confirmation. You will receive a separate message once your booking is confirmed and payment instructions are available.
              </p>
            </div>

            <div style="text-align:center;margin-top:30px;">
              <p style="color:#6b7280;font-size:14px;margin:0;">
                Thank you for choosing Nectar Hotels & Suites<br>
                We look forward to hosting you.
              </p>
            </div>
          </div>
        </div>
      `,
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
        message:
          `Failed to send booking request. Please try again or contact us on WhatsApp or call ${hotelContact.phoneDisplay}.`,
      },
      { status: 500 }
    );
  }
}
