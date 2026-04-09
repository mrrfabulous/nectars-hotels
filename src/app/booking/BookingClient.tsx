"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  Car,
  CheckCircle,
  Coffee,
  Mail,
  MessageCircleMore,
  MessageSquare,
  Phone,
  Shield,
  Star,
  User,
  Users,
  Wifi,
} from "lucide-react";
import {
  createWhatsAppLink,
  formatNaira,
  hotelContact,
  roomTypes,
  type RoomType,
} from "@/lib/hotelContent";

const amenities = [
  { icon: Wifi, name: "Free Wi-Fi" },
  { icon: Coffee, name: "Restaurant" },
  { icon: Car, name: "Free Parking" },
  { icon: Shield, name: "24/7 Security" },
];

export default function BookingClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState<RoomType["id"] | "">("");
  const [checkInDate, setCheckInDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("0");
  const [specialRequests, setSpecialRequests] = useState("");

  const selectedRoom = roomTypes.find((room) => room.id === selectedRoomId);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!selectedRoom) {
      setError("Please select a room type.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const checkOut = String(formData.get("checkOut") || "");

    if (!checkOut) {
      setError("Please choose a check-out date.");
      setIsSubmitting(false);
      return;
    }

    const checkIn = new Date(checkInDate);
    const checkOutDate = new Date(checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn < today) {
      setError("Check-in date cannot be in the past.");
      setIsSubmitting(false);
      return;
    }

    if (checkOutDate <= checkIn) {
      setError("Check-out date must be after check-in date.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/sendBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          roomType: selectedRoom.name,
          checkIn: checkInDate,
          checkOut,
          adults,
          children,
          specialRequests,
          nights: Math.ceil(
            (checkOutDate.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
          ),
          amount: selectedRoom.pricePerNight,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setSelectedRoomId("");
        setCheckInDate("");
        setName("");
        setEmail("");
        setPhone("");
        setAdults("1");
        setChildren("0");
        setSpecialRequests("");
      } else {
        setError(
          result.message ||
            "We could not send your booking request right now. Please try WhatsApp or call us directly."
        );
      }
    } catch (err) {
      console.error("Booking error:", err);
      setError(
        "We could not send your booking request right now. Please try WhatsApp or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary py-20 text-white">
        <div className="relative mx-auto max-w-6xl px-6 text-center opacity-0 translate-y-8 animate-fadeInUp">
          <h1 className="mb-4 text-4xl font-bold animate-fadeInUp md:text-5xl">
            Book Your Perfect Stay
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100 animate-fadeInUp animation-delay-200">
            Choose between our Standard Room and Presidential Suite for a stay
            that fits your comfort and budget.
          </p>
          <div className="mx-auto h-1 w-24 bg-yellow-400 animate-fadeInUp animation-delay-400" />
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-6 opacity-0 translate-y-4 animate-fadeInUp animation-delay-600 md:grid-cols-4">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="group cursor-pointer text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-200">
                  <amenity.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {amenity.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16">
        {submitted ? (
          <div className="animate-scaleIn scale-0 rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8 text-center shadow-lg transition-all duration-500">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-green-800">
              Booking Request Sent
            </h2>
            <p className="mx-auto mb-6 max-w-md text-green-700">
              Thank you for choosing Nectar Hotels & Suites. We will contact you
              within 24 hours to confirm your reservation.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="transform rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-green-700 hover:to-green-800 hover:shadow-xl"
            >
              Make Another Booking
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="animate-fadeInUp animation-delay-800 rounded-2xl bg-white p-8 opacity-0 translate-y-8 shadow-xl transition-all duration-700">
              <div className="mb-8 text-center">
                <h2 className="mb-4 flex items-center justify-center gap-3 text-3xl font-bold text-gray-900">
                  <BedDouble className="h-8 w-8 text-primary" />
                  Choose Your Room
                </h2>
                <div className="mx-auto h-1 w-24 bg-yellow-400" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {roomTypes.map((room) => (
                  <label
                    key={room.id}
                    className={`relative cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 hover:scale-[1.01] ${
                      selectedRoomId === room.id
                        ? "scale-[1.01] border-blue-500 ring-2 ring-blue-500 shadow-lg"
                        : "border-gray-200 hover:shadow-lg"
                    }`}
                  >
                    <input
                      type="radio"
                      name="roomType"
                      value={room.id}
                      checked={selectedRoomId === room.id}
                      className="absolute right-4 top-4 z-10"
                      required
                      onChange={(e) =>
                        setSelectedRoomId(e.target.value as RoomType["id"])
                      }
                    />

                    <div className="relative h-52">
                      <Image
                        src={room.featuredImage}
                        alt={room.name}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <div className="mb-3 flex flex-col items-start gap-2 md:flex-row md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {room.name}
                          </h3>
                          <p className="mt-1 text-sm text-accent">
                            {room.tagline}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary">
                            {formatNaira(room.pricePerNight)}
                          </span>
                          <span className="text-sm text-gray-500">/night</span>
                        </div>
                      </div>

                      <p className="mb-4 text-gray-600">{room.shortDescription}</p>

                      <div className="space-y-2">
                        {room.features.slice(0, 4).map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <Star className="h-4 w-4 fill-current text-yellow-500" />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="animate-fadeInUp animation-delay-1000 rounded-2xl bg-white p-8 opacity-0 translate-y-8 shadow-xl transition-all duration-700"
            >
              <div className="mb-10">
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
                  <CalendarDays className="h-6 w-6 text-primary" />
                  Select Your Dates
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 p-4 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      required
                      min={checkInDate || new Date().toISOString().split("T")[0]}
                      className="w-full rounded-xl border border-gray-200 p-4 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
                  <Users className="h-6 w-6 text-primary" />
                  Guest Details
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      <User className="mr-2 inline h-4 w-4" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 p-4 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      <Mail className="mr-2 inline h-4 w-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 p-4 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      <Phone className="mr-2 inline h-4 w-4" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 p-4 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Adults
                      </label>
                      <select
                        name="adults"
                        required
                        value={adults}
                        onChange={(e) => setAdults(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 p-4 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      >
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Adult" : "Adults"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Children
                      </label>
                      <select
                        name="children"
                        value={children}
                        onChange={(e) => setChildren(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 p-4 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      >
                        {[0, 1, 2, 3].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Child" : "Children"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  <MessageSquare className="mr-2 inline h-4 w-4" />
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  rows={4}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full resize-none rounded-xl border border-gray-200 p-4 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  placeholder="Let us know about any special requirements, dietary restrictions, accessibility needs, or preferences..."
                />
              </div>

              {error && (
                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                  <p>{error}</p>
                  <a
                    href={createWhatsAppLink(
                      "Hello Nectar Hotels & Suites, I would like to continue my room booking on WhatsApp."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#25D366] px-4 py-2 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
                  >
                    <MessageCircleMore className="h-4 w-4" />
                    Continue on WhatsApp
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary p-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Request Booking
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-sm text-gray-500">
                By submitting this form, you agree to our booking terms and
                conditions. We will contact you within 24 hours to confirm
                availability.
              </p>
            </form>

            <div className="animate-fadeInUp animation-delay-1200 rounded-2xl bg-gradient-to-br from-primary to-primary p-8 opacity-0 translate-y-8 text-white transition-all duration-700">
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-2xl font-bold">Need Assistance?</h3>
                <p className="text-blue-100">
                  Our friendly team is here to help with your booking by phone,
                  WhatsApp, or email.
                </p>
              </div>

              <div className="grid gap-6 text-center md:grid-cols-3">
                <div className="group">
                  <Phone className="mx-auto mb-2 h-8 w-8 text-yellow-400 transition-transform group-hover:scale-110" />
                  <p className="font-semibold">Call Us</p>
                  <a
                    href={`tel:${hotelContact.phoneHref}`}
                    className="text-sm text-blue-100"
                  >
                    {hotelContact.phoneDisplay}
                  </a>
                </div>
                <div className="group">
                  <MessageCircleMore className="mx-auto mb-2 h-8 w-8 text-yellow-400 transition-transform group-hover:scale-110" />
                  <p className="font-semibold">WhatsApp</p>
                  <a
                    href={createWhatsAppLink(
                      "Hello Nectar Hotels & Suites, I would like help with a booking."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-100"
                  >
                    {hotelContact.whatsappDisplay}
                  </a>
                </div>
                <div className="group">
                  <Mail className="mx-auto mb-2 h-8 w-8 text-yellow-400 transition-transform group-hover:scale-110" />
                  <p className="font-semibold">Email Us</p>
                  <a
                    href={`mailto:${hotelContact.reservationsEmail}`}
                    className="break-all text-sm text-blue-100"
                  >
                    {hotelContact.reservationsEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animation-delay-1200 {
          animation-delay: 1200ms;
        }
      `}</style>
    </div>
  );
}
