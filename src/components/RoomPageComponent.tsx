"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BedDouble } from "lucide-react";
import { formatNaira, roomTypes } from "@/lib/hotelContent";

const RoomPageComponent = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {roomTypes.map((room, index) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true, margin: "-80px" }}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-xl"
            >
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="bg-white p-5">
                  <div className="relative mb-4 h-[340px] overflow-hidden rounded-[1.5rem] md:h-[420px]">
                    <Image
                      src={room.featuredImage}
                      alt={room.name}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {room.gallery.map((image, imageIndex) => (
                      <div
                        key={`${room.id}-${image}`}
                        className="relative h-40 overflow-hidden rounded-2xl"
                      >
                        <Image
                          src={image}
                          alt={`${room.name} view ${imageIndex + 1}`}
                          fill
                          sizes="(min-width: 640px) 25vw, 100vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 md:p-10">
                  <div className="mb-4 inline-flex w-fit items-center rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                    <BedDouble className="mr-2 h-4 w-4" />
                    {room.idealFor}
                  </div>

                  <h2 className="mb-3 text-4xl font-bold text-primary">
                    {room.name}
                  </h2>
                  <p className="mb-4 text-lg text-accent">{room.tagline}</p>
                  <p className="mb-6 max-w-xl text-base leading-relaxed text-gray-600">
                    {room.longDescription}
                  </p>

                  <div className="mb-6 rounded-2xl bg-primary p-5 text-white">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                      Room Rate
                    </p>
                    <p className="mt-2 text-3xl font-bold">
                      {formatNaira(room.pricePerNight)}
                      <span className="ml-2 text-base font-medium text-white/70">
                        / night
                      </span>
                    </p>
                  </div>

                  <div className="mb-8 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
                    {room.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/booking"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                    >
                      Book {room.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/gallery"
                      className="inline-flex items-center justify-center rounded-full border border-primary px-7 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      View Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomPageComponent;
