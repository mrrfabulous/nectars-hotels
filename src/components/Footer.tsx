import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Hotel Info */}
          <div className="col-span-1 md:col-span-3">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="w-26 h-12 relative">
                <Image
                  src="/images/Update Nectar Hotels.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </Link>
            </div>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Experience unparalleled luxury and comfort at Nectar Hotel and
              Suites. Where every moment becomes a cherished memory.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1G4u57Nekw/">
                <Facebook className="h-6 w-6 text-blue-100 hover:text-accent transition-colors cursor-pointer" />{" "}
              </a>
              <a href="https://www.instagram.com/nectarhotelsandsuites?igsh=dWFtbmprb2Q5YW4x&utm_source=ig_contact_invite">
                <Instagram className="h-6 w-6 text-blue-100 hover:text-accent transition-colors cursor-pointer" />{" "}
              </a>
              <a href="https://x.com/nectarhotels?t=bEbzcN57cS0DTRCkqRnTZQ&s=09">
                <Twitter className="h-6 w-6 text-blue-100 hover:text-accent transition-colors cursor-pointer" />{" "}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-blue-100">+234 806 778 7196</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                <span className="text-blue-100 break-all">
                  support@nectarhotelsandsuites.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                <span className="text-blue-100 capitalize leading-relaxed">
                  No.5, Tilde Street, Near Albarka Radio Station, Off Sunday
                  Awoniyi Road, New GRA, Bauchi, Bauchi State
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/rooms"
                  className="text-blue-100 hover:text-accent transition-colors"
                >
                  Rooms & Suites
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-blue-100 hover:text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-blue-100 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/booking"
                  className="text-blue-100 hover:text-accent transition-colors"
                >
                  Book a room
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2025 Nectar Hotel and Suites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
