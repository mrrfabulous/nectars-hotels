import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      title: "Prestige Room",
      description: "Luxury accommodations with premium amenities",
      image: "/images/breakfast-portrait.jpg",
      features: ["King Size Bed", "City View", "Premium Amenities"],
      price: "₦ 50,599",
      size: "large",
    },
    {
      id: 2,
      title: "Classic Room",
      description: "Comfortable and elegant standard rooms",
      image: "/images/classic-room.jpg",
      features: ["Queen Bed", "Modern Furnishing", "Free WiFi"],
      price: "₦ 29,999",
      size: "medium",
    },
    {
      id: 3,
      title: "Classic Room with balcony or terrace",
      description: "Classic comfort with outdoor space",
      image: "/images/classic-balcony.jpg",
      features: ["Queen Bed", "Private Balcony", "Garden View"],
      price: "₦ 24,999",
      size: "medium",
    },
    {
      id: 4,
      title: "Family Room with terrace",
      description: "Spacious accommodations for families",
      image: "/images/family-terrace.jpg",
      features: ["Multiple Beds", "Terrace Access", "Family Amenities"],
      price: "₦ 39,999",
      size: "medium",
    },
    {
      id: 5,
      title: "Family Room",
      description: "Perfect for family getaways",
      image: "/images/family-room.jpg",
      features: ["Twin Beds", "Extra Space", "Kid-Friendly"],
      price: "₦ 34,999",
      size: "large",
    },
    {
      id: 6,
      title: "Family Room ",
      description: "Perfect for family getaways",
      image: "/images/breakfast-portrait.jpg",
      features: ["Twin Beds", "Extra Space", "Kid-Friendly"],
      price: "₦ 34,999",
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
            Rooms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-accent font-medium"
          >
            An irresistible charm
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
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-${
                    index === 0
                      ? "1584132967334-10e028bd69f7"
                      : index === 1
                      ? "1571003123894-1f0594d2b5d9"
                      : index === 2
                      ? "1566665797739-1674de7a421a"
                      : index === 3
                      ? "1582719478250-c89cae4dc85b"
                      : index === 4
                      ? "1582719478250-c89cae4dc85b"
                      : "1584132967334-10e028bd69f7"
                  }?ixlib=rb-4.0.3')`,
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
                  {room.size === "large" && (
                    <p className="text-lg opacity-90 mb-4">
                      {room.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span
                      className={`${
                        room.size === "large" ? "text-2xl" : "text-lg"
                      } font-bold`}
                    >
                      From {room.price}/night
                    </span>
                    <ArrowRight
                      className={`${
                        room.size === "large" ? "w-6 h-6" : "w-5 h-5"
                      } transition-transform group-hover:translate-x-2`}
                    />
                  </div>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <span className="mr-2">DISCOVER OUR ROOMS</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Rooms;
