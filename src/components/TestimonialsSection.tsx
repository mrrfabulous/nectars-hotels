"use client";

import {
  ExternalLink,
  MapPin,
  MessageCircleMore,
  Phone,
  Star,
} from "lucide-react";
import { createWhatsAppLink, hotelContact } from "@/lib/hotelContent";
import { FadeInSection, StaggerGroup, StaggerItem } from "@/components/PageReveal";

const highlightCards = [
  {
    title: "Public guest feedback",
    description:
      "We keep guest feedback open on Google so new visitors can review real experiences before booking.",
    icon: ExternalLink,
  },
  {
    title: "Quick replies matter",
    description:
      "If you have a question before booking, WhatsApp and direct calls remain the fastest way to reach our team.",
    icon: MessageCircleMore,
  },
  {
    title: "Easy to find in Bauchi",
    description:
      "Guests can check our exact location, read reviews, and move from Google straight into a booking or inquiry.",
    icon: MapPin,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInSection className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-accent">
            Guest Reviews
          </p>
          <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
            Trust What Guests See Publicly
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            We are not adding made-up testimonials here. Instead, we point
            visitors directly to our Google review page so they can check real
            guest feedback and book with confidence.
          </p>
        </FadeInSection>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeInSection className="rounded-[2rem] bg-gradient-to-br from-primary via-primary to-sky-900 p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)] md:p-10">
            <div className="mb-6 flex items-center gap-2 text-yellow-300">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>

            <h3 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
              Read our latest Google reviews.
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
              Real public reviews help new guests understand the stay
              experience, the location, and how our team supports visitors from
              inquiry to check-out.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={hotelContact.mapShareUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary transition-transform duration-200 hover:scale-[1.02]"
              >
                Read Reviews on Google
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={hotelContact.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Leave a Review
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                Prefer direct contact?
              </p>
              <div className="mt-3 flex flex-col gap-3 text-sm text-blue-50 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href={`tel:${hotelContact.phoneHref}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-yellow-300" />
                  {hotelContact.phoneDisplay}
                </a>
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MessageCircleMore className="h-4 w-4 text-yellow-300" />
                  {hotelContact.whatsappDisplay}
                </a>
              </div>
            </div> */}
          </FadeInSection>

          <StaggerGroup className="grid gap-6">
            {highlightCards.map((card) => (
              <StaggerItem
                key={card.title}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-accent/10 p-3 text-accent">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {card.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {card.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
