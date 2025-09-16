"use client";

import { useState } from "react";
import {
  CalendarDays,
  Users,
  BedDouble,
  Phone,
  Mail,
  User,
  MessageSquare,
  Star,
  Wifi,
  Coffee,
  Car,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const roomTypes = [
  {
    name: "Standard Room",
    description: "Comfortable room with modern amenities and ensuite bathroom",
    price: "₦25,000",
    features: [
      "Free Wi-Fi",
      "Air Conditioning",
      "En-suite Bathroom",
      "24/7 Room Service",
    ],
  },
  {
    name: "Presidential Suite",
    description:
      "Luxurious suite with premium furnishings and exclusive services",
    price: "₦50,000",
    features: [
      "Premium Location",
      "Luxury Amenities",
      "Exclusive Services",
      "Private Balcony",
    ],
  },
];

const amenities = [
  { icon: Wifi, name: "Free Wi-Fi" },
  { icon: Coffee, name: "Restaurant" },
  { icon: Car, name: "Free Parking" },
  { icon: Shield, name: "24/7 Security" },
];

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("0");
  const [specialRequests, setSpecialRequests] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Collect form data
    const data = {
      name,
      email,
      phone,
      roomType: selectedRoom, // Use state, not FormData
      checkIn: checkInDate,
      checkOut: e.currentTarget.checkOut.value,
      adults,
      children,
      specialRequests,
    };

    // Validate room type
    if (!data.roomType) {
      setError("Please select a room type.");
      setIsSubmitting(false);
      return;
    }

    // Validate dates
    const checkIn = new Date(data.checkIn);
    const checkOut = new Date(data.checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn < today) {
      setError("Check-in date cannot be in the past.");
      setIsSubmitting(false);
      return;
    }

    if (checkOut <= checkIn) {
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
          ...data,
          nights: Math.ceil(
            (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
          ),
          amount:
            roomTypes.find((room) => room.name === data.roomType)?.price ||
            "N/A",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);

        // Reset all form state
        setSelectedRoom("");
        setCheckInDate("");
        setName("");
        setEmail("");
        setPhone("");
        setAdults("1");
        setChildren("0");
        setSpecialRequests("");
      } else {
        setError(
          result.message || "Failed to send booking request. Please try again."
        );
      }
    } catch (err) {
      console.error("Booking error:", err);
      setError(
        "Failed to send booking request. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary text-white py-20 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 text-center transform transition-all duration-700 opacity-0 translate-y-8 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
            Book Your Perfect Stay
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fadeInUp animation-delay-200">
            Experience comfort and convenience at Nectar Hotels & Suites
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto animate-fadeInUp animation-delay-400"></div>
        </div>
      </section>

      {/* Amenities Quick View */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-700 opacity-0 translate-y-4 animate-fadeInUp animation-delay-600">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-200 transition-all duration-300 group-hover:scale-110">
                  <amenity.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {amenity.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {submitted ? (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-8 rounded-2xl text-center shadow-lg transform transition-all duration-500 scale-0 animate-scaleIn">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Booking Request Sent!
            </h2>
            <p className="text-green-700 mb-6 max-w-md mx-auto">
              {`Thank you for choosing Nectar Hotels & Suites. We'll contact you
              within 24 hours to confirm your reservation.`}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Make Another Booking
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Room Selection */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-700 opacity-0 translate-y-8 animate-fadeInUp animation-delay-800">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                  <BedDouble className="w-8 h-8 text-primary" />
                  Choose Your Room
                </h2>
                <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {roomTypes.map((room, index) => (
                  <label
                    key={room.name}
                    className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      selectedRoom === room.name
                        ? "ring-2 ring-blue-500 shadow-lg scale-105"
                        : "hover:shadow-lg border border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="roomType"
                      value={room.name}
                      className="absolute top-4 right-4 z-10"
                      required
                      onChange={(e) => {
                        setSelectedRoom(e.target.value);
                      }}
                    />

                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                      <BedDouble className="w-16 h-16 text-gray-400" />
                    </div>

                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-2 md:justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          {room.name}
                        </h3>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary">
                            {room.price}
                          </span>
                          <span className="text-sm text-gray-500">/night</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{room.description}</p>

                      <div className="space-y-2">
                        {room.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
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

            {/* Booking Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-700 opacity-0 translate-y-8 animate-fadeInUp animation-delay-1000"
            >
              {/* Dates Section */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <CalendarDays className="w-6 h-6 text-primary" />
                  Select Your Dates
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={checkInDate}
                      onChange={(e) => {
                        setCheckInDate(e.target.value);
                      }}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      required
                      min={
                        checkInDate || new Date().toISOString().split("T")[0]
                      }
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Guest Information */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Guest Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Adults
                      </label>
                      <select
                        name="adults"
                        required
                        value={adults}
                        onChange={(e) => setAdults(e.target.value)}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      >
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Adult" : "Adults"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Children
                      </label>
                      <select
                        name="children"
                        value={children}
                        onChange={(e) => setChildren(e.target.value)}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
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

              {/* Special Requests */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  rows={4}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                  placeholder="Let us know about any special requirements, dietary restrictions, accessibility needs, or preferences..."
                ></textarea>
              </div>

              {error && (
                <div className="mb-6 p-4 text-red-700 bg-red-50 border border-red-200 rounded-xl animate-pulse">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white p-4 rounded-xl text-lg font-semibold hover:bg-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending Request...
                  </>
                ) : (
                  <>
                    Request Booking
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                {` By submitting this form, you agree to our booking terms and
                conditions. We'll contact you within 24 hours to confirm
                availability.`}
              </p>
            </form>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-primary to-primary text-white rounded-2xl p-8 transform transition-all duration-700 opacity-0 translate-y-8 animate-fadeInUp animation-delay-1200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Need Assistance?</h3>
                <p className="text-blue-100">
                  Our friendly staff is here to help with your booking
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 space-y-8 text-center">
                <div className="group cursor-pointer">
                  <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold">Call Us</p>
                  <a
                    href="tel:+2348067787196"
                    className="text-blue-100 text-sm"
                  >
                    +234 806 778 7196
                  </a>
                </div>
                <div className="group cursor-pointer">
                  <Mail className="w-8 h-8 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold">Email Us</p>
                  <a
                    href="mailto:support@nectarhotelsandsuites.com"
                    className="text-blue-100 text-sm break-all"
                  >
                    support@nectarhotelsandsuites.com
                  </a>
                </div>
                <div className="group cursor-pointer">
                  <MessageSquare className="w-8 h-8 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold">Live Chat</p>
                  <p className="text-blue-100 text-sm">Available 24/7</p>
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
