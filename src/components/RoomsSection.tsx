import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const RoomsSection = () => {
  const rooms = [
    {
      id: 1,
      title: "Presidential Suite",
      description: "Luxury accommodations with premium amenities",
      image: "/images/room 1.jpeg",
      features: ["King Size Bed", "City View", "Premium Amenities"],
      price: "₦ 50,599",
      size: "large",
    },
    {
      id: 2,
      title: "Dinning",
      description:
        "Comfortable and resturant with local and international cuisines",
      image: "/images/dinning.jpeg",
      features: ["Queen Bed", "Modern Furnishing", "Free WiFi"],
      price: "₦ 29,999",
      size: "medium",
    },
    {
      id: 3,
      title: "Standard Room",
      description: "Classic comfort with outdoor space",
      image: "/images/room 2.jpeg",
      features: ["Queen Bed", "Private Balcony", "Garden View"],
      price: "₦ 24,999",
      size: "medium",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-primary mb-4"
          >
            Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-accent font-medium"
          >
            Explore the beauty and comfort of our hotel.
          </motion.p>
        </div>

        {/* Rooms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px]"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              variants={itemVariants}
              className={`
                ${
                  room.size === "large"
                    ? "md:col-span-6 md:row-span-2"
                    : "md:col-span-6"
                } 
                relative group overflow-hidden rounded-2xl cursor-pointer
              `}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('${room.image}')`,
                }}
              />
              <div
                className={`absolute inset-0 ${
                  room.size === "large" ? "p-8" : "p-6"
                } flex flex-col justify-end text-white`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <h3
                    className={`${
                      room.size === "large"
                        ? "text-3xl"
                        : room.title.length > 25
                        ? "text-xl"
                        : "text-2xl"
                    } font-bold mb-2`}
                  >
                    {room.title}
                  </h3>

                  <p className="text-lg opacity-90 mb-4">{room.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            href="/rooms"
          >
            <span className="mr-2">DISCOVER OUR ROOMS</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;
