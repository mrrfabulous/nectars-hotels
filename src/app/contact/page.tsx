import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Nectar Hotels & Suites in Bauchi by form, phone, email, or WhatsApp for booking support and guest inquiries.",
  path: "/contact",
  keywords: [
    "contact Nectar Hotels and Suites",
    "hotel contact Bauchi",
    "WhatsApp hotel Bauchi",
  ],
});

export default function Page() {
  return <ContactSection />;
}
