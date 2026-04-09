"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { Wifi, Car, MessageCircleMore, Phone, Utensils } from "lucide-react";
import { Wifi, Car, Utensils } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import RoomsSection from "../components/RoomsSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import HomeLoader from "@/components/HomeLoader";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import { createWhatsAppLink, hotelContact } from "@/lib/hotelContent";

const heroImage = "/images/hero.jpeg";
const minimumLoaderTimeMs = 700;
const maximumLoaderTimeMs = 2200;

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const image = new window.Image();
    image.src = src;
    image.onload = () => resolve();
    image.onerror = () => resolve();
  });

export default function Home() {
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const timers = new Set<number>();

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const timer = window.setTimeout(() => {
          timers.delete(timer);
          resolve();
        }, ms);

        timers.add(timer);
      });

    const readyPage = async () => {
      await Promise.all([
        Promise.race([preloadImage(heroImage), wait(maximumLoaderTimeMs)]),
        wait(minimumLoaderTimeMs),
      ]);

      if (isMounted) {
        setIsPageReady(true);
      }
    };

    void readyPage();

    return () => {
      isMounted = false;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

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
    <>
      <AnimatePresence>{!isPageReady && <HomeLoader />}</AnimatePresence>

      {isPageReady && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* hero */}
          <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
            <Image
              src="/images/hero.jpeg"
              alt="Reception area at Nectar Hotels and Suites"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10 max-w-4xl px-4 text-center text-white"
            >
              <motion.h1
                className="mb-6 text-5xl font-bold md:text-7xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience Comfort and
                <span className="block text-accent">Convenience</span>
              </motion.h1>
              <motion.p
                className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Affordable stays for business, leisure and relaxation.
              </motion.p>
              <motion.div
                className="flex flex-col justify-center gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/booking"
                    className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-primary/80"
                  >
                    Book Your Stay
                  </Link>
                </motion.div>
                {/* <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={createWhatsAppLink(
                      "Hello Nectar Hotels & Suites, I would like to ask about room availability."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#20bd5c]"
                  >
                    <MessageCircleMore className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </motion.div> */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/rooms"
                    className="inline-block rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-900"
                  >
                    Explore Rooms
                  </Link>
                </motion.div>
              </motion.div>

              {/* <motion.div
                className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-white/90 sm:flex-row sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <a
                  href={`tel:${hotelContact.phoneHref}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 transition-colors hover:bg-white/15"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  <span>Call {hotelContact.phoneDisplay}</span>
                </a>
                <span className="hidden text-white/45 sm:inline">|</span>
                <p className="text-white/80">
                  Fastest reply: WhatsApp and direct phone support
                </p>
              </motion.div> */}
            </motion.div>
          </section>

          <AboutSection />

          {/* Why Choose Us Section */}
          <section className="py-20 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Section Head */}
              <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.h2
                  className="mb-4 text-4xl font-bold text-primary"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Why Choose Nectar Hotels and Suites
                </motion.h2>
                <motion.p
                  className="mx-auto max-w-2xl text-xl text-accent"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Discover the perfect blend of hospitality, comfort, and
                  personalized service
                </motion.p>
              </motion.div>

              {/* features Grid */}
              <motion.div
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group transform rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 60,
                        scale: 0.8,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        },
                      },
                    }}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="mb-4 flex justify-center text-amber-600"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.1 + 0.5,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {feature.icon}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="mb-3 text-xl font-semibold text-accent"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + 0.7,
                      }}
                    >
                      {feature.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + 0.9,
                      }}
                    >
                      {feature.description}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Call to Action */}
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
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

          {/* Rooms Section */}
          <RoomsSection />

          {/* <TestimonialsSection /> */}

          {/* Contact Section */}
          <ContactSection />
        </motion.div>
      )}
    </>
  );
}
