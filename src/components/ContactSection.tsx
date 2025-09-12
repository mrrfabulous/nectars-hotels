import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, CheckCircle } from "lucide-react";
import dynamic from "next/dynamic";

const DynamicGoogleMap = dynamic(() => import("./GoogleMap"), {
  ssr: false,
  loading: () => (
    <div className="h-80 bg-gray-200 flex items-center justify-center">
      Loading Map...
    </div>
  ),
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.email && formData.name && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ email: "", name: "", message: "" });
      }, 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-primary">CONTACT </span>
            <span className="text-accent">US</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Column - Map and Info */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            {/* Real Google Map */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
            >
              <div className="h-80 relative">
                <DynamicGoogleMap className="w-full h-full" />
                {/* Optional: Overlay label on map */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-accent text-white px-3 py-2 rounded-lg shadow-lg text-sm font-semibold"
                >
                  Nectar Hotels & Suites
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">
                INFORMATION
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">ADDRESS</h4>
                    <p className="text-gray-600">
                      No.5, Tilde Street, <br />
                      Near Albarka Radio Station, <br />
                      Off Sunday Awoniyi Road, <br />
                      New GRA, Bauchi, Bauchi State
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">PHONE </h4>
                    <p className="text-gray-600">
                      <a
                        href="tel:+2348067787196"
                        className="hover:text-accent transition-colors"
                      >
                        Desk: +234 806 778 7196
                      </a>
                      <br />
                      <a
                        href="tel:+2349124248181"
                        className="hover:text-accent transition-colors"
                      >
                        Support: +234 912 424 8181
                      </a>
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">E-MAIL</h4>
                    <p className="text-gray-600">
                      <a
                        href="mailto:sales@nectarhotels.com"
                        className="hover:text-accent transition-colors"
                      >
                        support@nectarhotelsandsuites.com
                      </a>
                      <br />
                      <a
                        href="mailto:reservations@nectarhotels.com"
                        className="hover:text-accent transition-colors"
                      >
                        reservations@nectarhotelsandsuites.com
                      </a>
                      <br />
                      {/* <a
                        href="mailto:banquet@nectarhotels.com"
                        className="hover:text-accent transition-colors"
                      >
                        banquet@nectarhotels.com
                      </a> */}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">
                GET IN TOUCH
              </h3>
              <p className="text-gray-600 mb-8">{`We'd love to hear from you. Send us a message and we'll respond as soon as possible.`}</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-primary mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600">{`Thank you for contacting us. We'll get back to you soon.`}</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 resize-none"
                    ></textarea>
                  </motion.div>

                  <p className="text-sm text-gray-500">
                    * All fields are mandatory
                  </p>

                  <motion.button
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent text-white font-semibold py-4 px-6 rounded-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <span>SEND MESSAGE</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              )}
            </div>

            {/* Bottom Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-center"
            >
              <h3 className="text-3xl font-bold text-primary mb-2">
                If you have any questions
              </h3>
              <p className="text-gray-600 text-lg">
                Our team is here to help you 24/7
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
