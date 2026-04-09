"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/rooms", label: "Rooms & Suites" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary/90 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="w-26 h-12 relative">
            <Image
              src="/images/Update Nectar Hotels.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-800 transition-colors duration-200 hover:text-accent ${
                  pathname === item.path
                    ? "text-accent underline"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-accent/80 transition-colors duration-200"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-neutral" />
            ) : (
              <Menu className="h-6 w-6 text-neutral" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-accent/80 ${
                    pathname === item.path ? "text-accent/80" : "text-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/booking"
                onClick={() => setIsMenuOpen(false)}
                className="bg-accent/80 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-600 transition-colors duration-200 text-center"
              >
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
