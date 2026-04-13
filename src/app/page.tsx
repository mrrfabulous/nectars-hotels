import Link from "next/link";
import Image from "next/image";
import { Wifi, Car, Utensils } from "lucide-react";
import { motion } from "@/components/StaticMotion";
import RoomsSection from "../components/RoomsSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
// import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  const features = [
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Free Wi-Fi",
      description: "Stay connected anytime",
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Valet Parking",
      description: "Secure, easy parking",
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Fine Dining",
      description: "Delicious meals daily",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Exceptional Service",
      description: "24/7 Staff Support",
    },
  ];

  return (
    <motion.div>
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.webp"
          alt="Reception area at Nectar Hotels and Suites"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div className="relative z-10 max-w-4xl px-4 text-center text-white">
          <motion.h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Experience Comfort and
            <span className="block text-accent">Convenience</span>
          </motion.h1>
          <motion.p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
            Affordable stays for business, leisure and relaxation.
          </motion.p>
          <motion.div className="flex flex-col justify-center gap-4 sm:flex-row">
            <motion.div>
              <Link
                href="/booking"
                className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-primary/80"
              >
                Book Your Stay
              </Link>
            </motion.div>
            <motion.div>
              <Link
                href="/rooms"
                className="inline-block rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-900"
              >
                Explore Rooms
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <AboutSection />

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-16 text-center">
            <motion.h2 className="mb-4 text-4xl font-bold text-primary">
              Why Choose Nectar Hotels and Suites
            </motion.h2>
            <motion.p className="mx-auto max-w-2xl text-xl text-accent">
              Discover the perfect blend of hospitality, comfort, and
              personalized service
            </motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                className="group rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <motion.div className="mb-4 flex justify-center text-amber-600">
                  {feature.icon}
                </motion.div>
                <motion.h3 className="mb-3 text-xl font-semibold text-accent">
                  {feature.title}
                </motion.h3>
                <motion.p className="text-gray-600">{feature.description}</motion.p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-12 text-center">
            <p className="mb-6 text-gray-600">
              Ready to experience comfort and convenience?
            </p>
            <Link
              href="/rooms"
              className="inline-flex items-center rounded-full bg-primary px-8 py-3 font-semibold text-secondary shadow-lg transition-all duration-200 hover:scale-105 hover:bg-primary/90"
            >
              Book Now
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <RoomsSection />

      {/* <TestimonialsSection /> */}

      <ContactSection />
    </motion.div>
  );
}
