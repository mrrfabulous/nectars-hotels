# Nectar Hotels & Suites Website

Marketing and direct-booking website for Nectar Hotels & Suites in Bauchi, Nigeria.

The site is built with Next.js and is designed to help guests:
- explore the hotel and room categories
- view real property photos
- send direct booking requests
- contact the hotel through email, phone, or WhatsApp

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Nodemailer

## Main Features

- Home, About, Rooms, Gallery, Contact, and Booking pages
- Room inventory managed from a shared content file
- Direct booking request flow with email notifications
- Contact form with email delivery
- WhatsApp quick-contact links across the site
- SEO metadata, Open Graph tags, and hotel structured data
- Embedded hotel location map

## Project Structure

- `src/app/` - app router pages and API routes
- `src/components/` - reusable UI sections and shared interface components
- `src/lib/hotelContent.ts` - room data, pricing, contact info, gallery content
- `src/lib/seo.ts` - metadata helpers and structured data
- `public/images/` - hotel images and room galleries

## Environment Variables

Create a `.env` file in the project root.

```env
NEXT_PUBLIC_SITE_URL=https://www.nectarhotelsandsuites.com
EMAIL_USER=you@example.com
EMAIL_PASS=your-email-password
```

### What each variable does

- `NEXT_PUBLIC_SITE_URL` powers canonical URLs, metadata, and share previews
- `EMAIL_USER` is the SMTP username used to send booking and contact emails
- `EMAIL_PASS` is the SMTP password for that mailbox

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Booking and Contact Flow

### Booking

- Guests choose a room, dates, and guest details on `/booking`
- The form posts to `src/app/api/sendBooking/route.ts`
- The hotel receives a booking request email
- The guest receives an acknowledgement email
- The request is not an instant reservation confirmation

### Contact

- Guests submit the contact form on `/contact`
- The form posts to `src/app/api/sendMail/route.ts`
- The hotel receives the inquiry by email
- The guest receives an acknowledgement email

## Content Updates

Most business content can be updated in one place:

- room names
- room prices
- room highlights and features
- contact numbers
- WhatsApp number
- address
- gallery sections

Edit:

`src/lib/hotelContent.ts`

## Deployment Notes

This project can be deployed to Vercel or any Node-compatible host that supports Next.js.

Before deploying:

1. Set the production environment variables.
2. Make sure the SMTP mailbox is active and allowed to send mail.
3. Confirm `NEXT_PUBLIC_SITE_URL` matches the real live domain.
4. Run `npm run build` locally at least once.
5. Test one booking submission and one contact submission in production.

### Recommended post-deploy checks

- Home, Rooms, Gallery, Contact, and Booking pages load correctly
- Presidential Suite and Executive Room pricing display correctly
- WhatsApp links open the correct number
- Booking success screen appears after submission
- Booking and contact emails are actually delivered
- SEO preview image and metadata resolve correctly on the live domain

## Notes

- Room and gallery content currently use local image assets from `public/images`
- SMTP email delivery is required for the booking and contact forms to work fully
- The booking form collects requests for manual follow-up by hotel staff
