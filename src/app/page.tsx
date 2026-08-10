import Link from "next/link";
import Image from "next/image";
import { motion } from "@/components/StaticMotion";
import RoomsSection from "../components/RoomsSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import FeatureSection from "@/components/FeatureSection"
// import TestimonialsSection from "@/components/TestimonialsSection";
import ReviewSection from "@/components/Review";


export default function Home() {

  return (
    <motion.div>
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.webp"
          alt="Nectar Hotels and Suites"
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

      <FeatureSection />

      <RoomsSection />

      <ReviewSection />
      {/* <TestimonialsSection /> */}

      <ContactSection />
    </motion.div>
  );
}
