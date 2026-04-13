import Image from "next/image";
import Link from "next/link";
import { motion } from "@/components/StaticMotion";
import { ArrowRight } from "lucide-react";
import { formatNaira, homepageRoomPreview } from "@/lib/hotelContent";

const RoomsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-5xl font-bold text-primary md:text-6xl"
          >
            Our Rooms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-xl font-medium text-accent"
          >
            Choose between our two room categories, each designed for comfort,
            privacy, and a restful stay in Bauchi.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {homepageRoomPreview.map((room, index) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
            >
              <div className="relative h-80">
                <Image
                  src={room.featuredImage}
                  alt={room.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="mb-2 text-sm uppercase tracking-[0.25em] text-white/75">
                    From {formatNaira(room.pricePerNight)} per night
                  </p>
                  <h3 className="text-3xl font-bold">{room.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-5 text-base leading-relaxed text-gray-600">
                  {room.shortDescription}
                </p>

                <ul className="mb-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
                  {room.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/rooms"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                  >
                    Explore This Room
                  </Link>
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row"
        >
          <Link
            href="/rooms"
            className="inline-flex items-center rounded-lg bg-primary px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent"
          >
            View All Room Details
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center rounded-lg border border-primary px-8 py-4 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            Browse Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;
