"use client";

import Room from "@/components/RoomPageComponent";

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Rooms and Suites
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore the beauty and comfort of our rooms and suites.
          </p>
        </div>
      </section>

      <section>
        <Room />
      </section>
    </div>
  );
}
