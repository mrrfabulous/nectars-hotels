"use client";

import { ExternalLink, Star } from "lucide-react";
import { hotelContact } from "@/lib/hotelContent";
import { FadeInSection } from "@/components/PageReveal";

function GoogleGIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.7-.4-4z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.5 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l6-6C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 45c5.5 0 10.4-1.9 14.2-5.1l-6.6-5.4C29.6 36.4 27 37 24 37c-5.3 0-9.7-3.1-11.4-7.5l-6.5 5C9.6 40.6 16.3 45 24 45z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.6l6.6 5.4C41.6 36.5 45 30.9 45 24c0-1.4-.1-2.7-.4-3.5z"
      />
    </svg>
  );
}

export default function ReviewSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="mb-6 flex justify-center gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-6 w-6 fill-current" />
            ))}
          </div>

          <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
            Loved your stay?
          </h2>

          <p className="mx-auto mb-9 max-w-xl text-lg text-gray-600">
            Tell us about it on Google. Your review helps other travelers
            choose Nectar with confidence, and helps our team keep improving.
          </p>

          <a
            href={hotelContact.googleReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-primary shadow-sm ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-accent/40"
          >
            <GoogleGIcon />
            Leave us a review on Google
            <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-accent" />
          </a>
        </FadeInSection>
      </div>
    </section>
  );
}