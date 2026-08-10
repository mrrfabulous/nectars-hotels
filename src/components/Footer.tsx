import {
  Facebook,
  Instagram,
  MessageCircleMore,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createWhatsAppLink, hotelContact } from "@/lib/hotelContent";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.35V2h-3.12v13.18a2.6 2.6 0 1 1-2.6-2.6c.31 0 .61.05.89.15V9.56a5.76 5.76 0 1 0 4.83 5.69V8.57a7.9 7.9 0 0 0 4.77 1.6V7.11c-.34 0-.68-.14-1-.42Z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-6">
          <div className="col-span-1 md:col-span-3">
            <div className="mb-4 flex items-center space-x-2">
              <Link
                  href="/"
                  className="relative block h-10 w-32 flex-shrink-0 sm:h-12 sm:w-40 lg:h-14 lg:w-48"
                >
                  <Image
                    src="/images/nectar-logo-tight.webp"
                    alt="Nectar Hotels and Suites logo"
                    width={950}
                    height={394}
                    className="h-full w-auto object-contain object-left"
                  />
              </Link>
            </div>
            <p className="mb-4 leading-relaxed text-blue-100">
              Experience unparalleled luxury and comfort at Nectar Hotel and
              Suites. Where every moment becomes a cherished memory.
            </p>
            {/* <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={createWhatsAppLink(
                  "Hello Nectar Hotels & Suites, I would like to make an inquiry."
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5c]"
              >
                <MessageCircleMore className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${hotelContact.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call Front Desk
              </a>
            </div> */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1G4u57Nekw/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Nectar Hotels and Suites on Facebook"
              >
                <Facebook className="h-6 w-6 cursor-pointer text-blue-100 transition-colors hover:text-accent" />
              </a>
              <a
                href="https://www.instagram.com/nectarhotelsandsuites?igsh=dWFtbmprb2Q5YW4x&utm_source=ig_contact_invite"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Nectar Hotels and Suites on Instagram"
              >
                <Instagram className="h-6 w-6 cursor-pointer text-blue-100 transition-colors hover:text-accent" />
              </a>
              <a
                href="https://www.tiktok.com/@nectarhotelsandsuites"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Nectar Hotels and Suites on TikTok"
              >
                <TikTokIcon className="h-6 w-6 cursor-pointer text-blue-100 transition-colors hover:text-accent" />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-blue-100">{hotelContact.phoneDisplay}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircleMore className="h-4 w-4 text-accent" />
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-100 transition-colors hover:text-white"
                >
                  {hotelContact.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="break-all text-blue-100">
                  {hotelContact.email}
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="capitalize leading-relaxed text-blue-100">
                  {hotelContact.addressLines.join(", ")}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/rooms"
                  className="text-blue-100 transition-colors hover:text-accent"
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-100 transition-colors hover:text-accent"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-blue-100 transition-colors hover:text-accent"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-100 transition-colors hover:text-accent"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-blue-100 transition-colors hover:text-accent"
                >
                  Book a room
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-100">
            &copy; {currentYear} Nectar Hotel and Suites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
