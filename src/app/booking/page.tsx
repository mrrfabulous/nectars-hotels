import type { Metadata } from "next";
import BookingClient from "./BookingClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Book Your Stay",
  description:
    "Send a direct booking request for a Standard Room or Presidential Suite at Nectar Hotels & Suites in Bauchi.",
  path: "/booking",
  keywords: [
    "hotel booking Bauchi",
    "book Nectar Hotels and Suites",
    "Presidential Suite booking",
    "Standard Room booking",
  ],
});

export default function Page() {
  return <BookingClient />;
}
