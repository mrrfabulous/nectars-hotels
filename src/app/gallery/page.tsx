import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  FadeInSection,
  StaggerGroup,
  StaggerItem,
} from "@/components/PageReveal";
import { gallerySections } from "@/lib/hotelContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description:
    "Take a visual tour of Nectar Hotels & Suites in Bauchi, from room interiors to guest spaces and the hotel exterior.",
  path: "/gallery",
  keywords: [
    "hotel gallery Bauchi",
    "Nectar Hotels photos",
    "Bauchi hotel rooms photos",
  ],
});

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-white">
        <FadeInSection className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/70">
            Nectar Hotels and Suites
          </p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Gallery</h1>
          <p className="mx-auto max-w-3xl text-xl text-blue-100">
            Explore the rooms, shared spaces, and surroundings that shape the
            Nectar Hotels & Suites experience.
          </p>
        </FadeInSection>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection className="mb-12 flex flex-col gap-4 rounded-[2rem] bg-white p-8 shadow-lg lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-primary">
                A visual tour of the property
              </h2>
              <p className="mt-2 max-w-2xl text-gray-600">
                From the room interiors to the reception, dining area, and
                compound, this page gives guests a clearer feel for what to
                expect before they arrive.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/rooms"
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                View Rooms
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Book Your Stay
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeInSection>

          <div className="space-y-16">
            {gallerySections.map((section) => (
              <FadeInSection key={section.title}>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-primary">
                    {section.title}
                  </h2>
                  <p className="mt-2 max-w-3xl text-gray-600">
                    {section.description}
                  </p>
                </div>

                <StaggerGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {section.images.map((image) => (
                    <StaggerItem
                      key={image.src}
                      className="overflow-hidden rounded-[1.75rem] bg-white shadow-lg"
                    >
                      <figure>
                        <div className="relative h-72">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                        <figcaption className="px-5 py-4 text-sm text-gray-600">
                          {image.alt}
                        </figcaption>
                      </figure>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
