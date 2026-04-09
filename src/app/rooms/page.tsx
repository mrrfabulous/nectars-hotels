import type { Metadata } from "next";
import { FadeInSection } from "@/components/PageReveal";
import Room from "@/components/RoomPageComponent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Rooms and Suites",
  description:
    "Explore the Presidential Suite and Standard Room at Nectar Hotels & Suites in Bauchi, with room features, rates, and booking access.",
  path: "/rooms",
  keywords: [
    "rooms in Bauchi",
    "Presidential Suite Bauchi",
    "Standard Room Bauchi",
    "Nectar Hotels rooms",
  ],
});

export default function Page() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-white py-20">
        <FadeInSection className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Rooms & Suites
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Nectar Hotels & Suites offers two room categories: the Presidential
            Suite and the Standard Room, each designed for comfort and a
            restful stay.
          </p>
        </FadeInSection>
      </section>

      <section>
        <Room />
      </section>
    </div>
  );
}
