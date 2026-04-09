"use client";

import { ExternalLink, Star } from "lucide-react";
// import { ExternalLink, MessageCircleMore, Star } from "lucide-react";
// import { createWhatsAppLink, hotelContact } from "@/lib/hotelContent";
import { hotelContact } from "@/lib/hotelContent";

export default function BookingReviewStrip() {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-lg">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2 text-yellow-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <h3 className="text-2xl font-bold text-primary">
            Check Our 5-Star Reviews on Google!
          </h3>
          <p className="mt-2 text-gray-600">
            We take pride in providing exceptional service and unforgettable experiences for our guests. Don&apos;t just take our word for it, see what our satisfied customers have to say about their stays at Nectar Hotels and Suites. Your perfect getaway awaits!
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <a
            href={hotelContact.mapShareUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Read Google Reviews
            <ExternalLink className="h-4 w-4" />
          </a>
          {/* <a
            href={createWhatsAppLink(
              "Hello Nectar Hotels & Suites, I want to ask a question before completing my booking request."
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#20bd5c]"
          >
            <MessageCircleMore className="h-4 w-4" />
            Chat on WhatsApp
          </a> */}
        </div>
      </div>
    </div>
  );
}
