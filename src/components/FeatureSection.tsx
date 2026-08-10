"use client"

import Link from "next/link";
import { Wifi, Car, Utensils } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
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
    
  );
}

export default ContactSection