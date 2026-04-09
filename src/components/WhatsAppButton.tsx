import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { createWhatsAppLink } from "@/lib/hotelContent";

export default function WhatsAppButton() {
  return (
    <Link
      href={createWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Nectar Hotels and Suites on WhatsApp"
      className="fixed bottom-6 right-6 z-[90] inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,211,102,0.38)] transition-transform duration-200 hover:scale-105"
    >
      <MessageCircleMore className="h-5 w-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </Link>
  );
}
