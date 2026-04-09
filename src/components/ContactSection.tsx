"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  Send,
} from "lucide-react";
import SimpleGoogleMap from "@/components/NewMap";
import {
  createWhatsAppLink,
  hotelContact,
} from "@/lib/hotelContent";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.name || !formData.message) {
      setError("Please complete all fields before sending your message.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setIsSubmitted(true);
        setFormData({ email: "", name: "", message: "" });
      } else {
        setError(
          result.message ||
            "We could not send your message right now. Please try WhatsApp or call us directly."
        );
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setError(
        "We could not send your message right now. Please try WhatsApp or call us directly."
      );
    } finally {
      setIsSubmitting(false);
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
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold md:text-6xl">
            <span className="text-primary">CONTACT </span>
            <span className="text-accent">US</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <motion.div
              variants={itemVariants}
              className="mb-8 rounded-2xl bg-primary p-6 text-white shadow-lg md:hidden"
            >
              <div className="flex flex-col gap-5 ">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                    Quick Contact
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">
                    Need the fastest response?
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-blue-100 md:text-base">
                    Reach our team directly on WhatsApp or by phone for booking
                    help, room availability, and urgent questions.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={createWhatsAppLink(
                      "Hello Nectar Hotels & Suites, I would like to speak with your team on WhatsApp."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#20bd5c]"
                  >
                    <MessageCircleMore className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href={`tel:${hotelContact.phoneHref}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <Phone className="h-5 w-5" />
                    Call {hotelContact.phoneDisplay}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mb-8 overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="relative flex h-96 flex-col items-center justify-center">
                <SimpleGoogleMap className="relative h-full w-full" />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white p-8 px-4 shadow-lg md:px-8"
            >
              <h3 className="mb-6 text-2xl font-bold text-primary">
                INFORMATION
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="group flex cursor-pointer items-start space-x-2 md:space-x-4"
                >
                  <div className="rounded-lg bg-[#25D366]/10 p-2 transition-colors duration-300 group-hover:bg-[#25D366]/20 md:p-3">
                    <MessageCircleMore className="h-4 w-4 text-[#25D366] md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-primary">WHATSAPP</h4>
                    <a
                      href={createWhatsAppLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-600 transition-colors hover:text-[#25D366]"
                    >
                      {hotelContact.whatsappDisplay}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="group flex cursor-pointer items-start space-x-2 md:space-x-4"
                >
                  <div className="rounded-lg bg-accent/10 p-2 transition-colors duration-300 group-hover:bg-accent/20 md:p-3">
                    <MapPin className="h-4 w-4 text-accent md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-primary">ADDRESS</h4>
                    <p className="text-gray-600">
                      {hotelContact.addressLines.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="group flex cursor-pointer items-start space-x-2 md:space-x-4"
                >
                  <div className="rounded-lg bg-accent/10 p-2 transition-colors duration-300 group-hover:bg-accent/20 md:p-3">
                    <Phone className="h-4 w-4 text-accent md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-primary">PHONE</h4>
                    <p className="text-gray-600">
                      <a
                        href={`tel:${hotelContact.phoneHref}`}
                        className="transition-colors hover:text-accent"
                      >
                        Desk: {hotelContact.phoneDisplay}
                      </a>
                      <br />
                      <a
                        href={`tel:${hotelContact.supportPhoneHref}`}
                        className="transition-colors hover:text-accent"
                      >
                        Support: {hotelContact.supportPhoneDisplay}
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="group flex cursor-pointer items-start space-x-2 md:space-x-4"
                >
                  <div className="rounded-lg bg-accent/10 p-2 transition-colors duration-300 group-hover:bg-accent/20 md:p-3">
                    <Mail className="h-4 w-4 text-accent md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-primary">E-MAIL</h4>
                    <p className="text-gray-600">
                      <a
                        href={`mailto:${hotelContact.email}`}
                        className="break-all transition-colors hover:text-accent"
                      >
                        {hotelContact.email}
                      </a>
                      <br />
                      <a
                        href={`mailto:${hotelContact.reservationsEmail}`}
                        className="break-all transition-colors hover:text-accent"
                      >
                        {hotelContact.reservationsEmail}
                      </a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-2 text-2xl font-bold text-primary">
                GET IN TOUCH
              </h3>
              <p className="mb-8 text-gray-600">
                We&apos;d love to hear from you. WhatsApp and phone are the
                quickest options, and the form is here if you prefer to send a
                message instead.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="py-12 text-center"
                >
                  <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                  <h4 className="mb-2 text-xl font-semibold text-primary">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for contacting us. We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-primary"
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
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-primary"
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
                      className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 outline-none transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-primary"
                    />
                  </motion.div>

                  <p className="text-sm text-gray-500">
                    All fields are mandatory.
                  </p>

                  {error && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-center space-x-2 rounded-lg bg-accent px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span>
                      {isSubmitting ? "SENDING MESSAGE..." : "SEND MESSAGE"}
                    </span>
                    <Send className="h-5 w-5" />
                  </motion.button>

                  <a
                    href={createWhatsAppLink(
                      "Hello Nectar Hotels & Suites, I would like to contact your team."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#25D366] px-6 py-4 font-semibold text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
                  >
                    <MessageCircleMore className="h-5 w-5" />
                    <span>CHAT ON WHATSAPP</span>
                  </a>
                </form>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-center"
            >
              <h3 className="mb-2 text-3xl font-bold text-primary">
                If you have any questions
              </h3>
              <p className="text-lg text-gray-600">
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
