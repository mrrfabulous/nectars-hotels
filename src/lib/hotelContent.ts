export const hotelContact = {
  phoneDisplay: "+234 806 778 7196",
  phoneHref: "+2348067787196",
  supportPhoneDisplay: "+234 912 424 8181",
  supportPhoneHref: "+2349124248181",
  email: "support@nectarhotelsandsuites.com",
  reservationsEmail: "reservations@nectarhotelsandsuites.com",
  whatsappNumber: "2348037457342",
  whatsappDisplay: "+234 803 745 7342",
  siteUrl: "https://www.nectarhotelsandsuites.com",
  plusCode: "8Q4Q+P6 Bauchi",
  postalCode: "740102",
  city: "Bauchi",
  state: "Bauchi",
  countryCode: "NG",
  countryName: "Nigeria",
  mapShareUrl: "https://maps.app.goo.gl/CXiMcVeF9PLfMmqJ9",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.437319838247!2d9.785494974391938!3d10.306842967680982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1054d100279f670d%3A0x432e5604476f9eff!2sNectar%20Hotels%20and%20Suites!5e0!3m2!1sen!2sng!4v1775691484943!5m2!1sen!2sng",
  coordinates: {
    latitude: 10.306842967680982,
    longitude: 9.785494974391938,
  },
  addressLines: [
    "No.5, Tilde Street",
    "Near Albarka Radio Station",
    "Off Sunday Awoniyi Road",
    "New GRA, Bauchi, Bauchi State",
  ],
};

export const whatsappUrl = `https://wa.me/${hotelContact.whatsappNumber}`;

export const whatsappMessage =
  "Hello Nectar Hotels & Suites, I would like to make an inquiry about booking a room.";

export function createWhatsAppLink(message: string = whatsappMessage) {
  return `${whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export type RoomType = {
  id: "presidential-suite" | "standard-room";
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  pricePerNight: number;
  idealFor: string;
  featuredImage: string;
  gallery: string[];
  features: string[];
};

export type GallerySection = {
  title: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
};

export const roomTypes: RoomType[] = [
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    tagline: "Premium comfort for guests who want extra room and privacy.",
    shortDescription:
      "A more elevated stay with a refined setup, generous comfort, and the calm you need to unwind properly.",
    longDescription:
      "Our Presidential Suite is designed for guests who prefer a more spacious and premium experience. It is ideal for executive stays, special getaways, and longer visits where extra comfort matters.",
    pricePerNight: 50000,
    idealFor: "Business executives, couples, and premium stays",
    featuredImage: "/images/room 1.jpeg",
    gallery: ["/images/room 1.jpeg", "/images/room 3.jpeg"],
    features: [
      "More spacious room layout",
      "Air conditioning",
      "Television and work desk",
      "Comfortable premium bedding",
      "Private bathroom",
      "Suitable for longer stays",
    ],
  },
  {
    id: "standard-room",
    name: "Standard Room",
    tagline: "A clean, comfortable room for practical and restful stays.",
    shortDescription:
      "A reliable everyday stay with the essentials you need for business trips, short visits, and easy relaxation.",
    longDescription:
      "Our Standard Room offers a simple and comfortable experience with the amenities most guests need for a pleasant stay. It is a strong fit for short business visits, personal travel, and affordable comfort.",
    pricePerNight: 25000,
    idealFor: "Short stays, solo travellers, and value-focused guests",
    featuredImage: "/images/room 2.jpeg",
    gallery: ["/images/room 2.jpeg", "/images/room 4.jpeg"],
    features: [
      "Comfortable double bed",
      "Air conditioning",
      "Television and work desk",
      "Private bathroom",
      "Great value for everyday stays",
      "Quiet and relaxing setting",
    ],
  },
];

export const gallerySections: GallerySection[] = [
  {
    title: "Rooms",
    description:
      "A closer look at the two room categories available at Nectar Hotels & Suites.",
    images: [
      {
        src: "/images/room 1.jpeg",
        alt: "Presidential suite interior at Nectar Hotels and Suites",
      },
      {
        src: "/images/room 2.jpeg",
        alt: "Standard room interior at Nectar Hotels and Suites",
      },
      {
        src: "/images/room 3.jpeg",
        alt: "Another view of a presidential suite at Nectar Hotels and Suites",
      },
      {
        src: "/images/room 4.jpeg",
        alt: "Another view of a standard room at Nectar Hotels and Suites",
      },
    ],
  },
  {
    title: "Guest Spaces",
    description:
      "The shared spaces that shape the arrival and stay experience for every guest.",
    images: [
      {
        src: "/images/reception.jpeg",
        alt: "Reception area at Nectar Hotels and Suites",
      },
      {
        src: "/images/dinning.jpeg",
        alt: "Dining area at Nectar Hotels and Suites",
      },
      {
        src: "/images/hero.jpeg",
        alt: "Front desk and lobby area at Nectar Hotels and Suites",
      },
    ],
  },
  {
    title: "Hotel Exterior",
    description:
      "A look at the compound and surroundings that make the property easy to access and comfortable to navigate.",
    images: [
      {
        src: "/images/compound.jpg",
        alt: "Main courtyard view at Nectar Hotels and Suites",
      },
      {
        src: "/images/compound1.jpg",
        alt: "Drive-in compound view at Nectar Hotels and Suites",
      },
      {
        src: "/images/compound2.jpg",
        alt: "Exterior building view at Nectar Hotels and Suites",
      },
    ],
  },
];

export const homepageRoomPreview = roomTypes;

export function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
