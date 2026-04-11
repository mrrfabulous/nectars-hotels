export const hotelContact = {
  phoneDisplay: "+234 806 778 7196",
  phoneHref: "+2348067787196",
  supportPhoneDisplay: "+234 912 424 8181",
  supportPhoneHref: "+2349124248181",
  email: "support@nectarhotelsandsuites.com",
  reservationsEmail: "reservations@nectarhotelsandsuites.com",
  whatsappNumber: "2348036472755",
  whatsappDisplay: "+234 803 647 2755",
  googleReviewUrl: "https://g.page/r/Cf-eb0cEVi5DEAE/review",
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
  id: "presidential-suite" | "executive-room";
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  pricePerNight: number;
  idealFor: string;
  featuredImage: string;
  gallery: string[];
  highlights?: string[];
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
    tagline: "A premium suite with a private lounge feel, spacious layout, and a more elevated stay experience.",
    shortDescription:
      "A more exclusive stay with a separate lounge-style sitting area, premium bedroom setup, and the extra space guests notice immediately.",
    longDescription:
      "Our Presidential Suite is designed for guests who want more than a standard overnight stay. The suite combines a spacious bedroom with a well-furnished sitting area, giving you room to relax, host a visitor briefly, watch TV in comfort, and enjoy a more private premium environment throughout your stay.",
    pricePerNight: 110000,
    idealFor: "Business executives, couples, and premium stays",
    featuredImage: "/images/Presidential_Suite/IMG-20260409-WA0000.jpg",
    gallery: [
      "/images/Presidential_Suite/IMG-20260409-WA0001.jpg",
      "/images/Presidential_Suite/IMG-20260409-WA0002.jpg",
      "/images/Presidential_Suite/IMG-20260409-WA0003.jpg",
      "/images/Presidential_Suite/IMG-20260409-WA0004.jpg",
    ],
    highlights: [
      "Dedicated lounge-style sitting area with multiple sofas",
      "Large wall-mounted TV with a premium media wall finish",
      "Spacious bedroom with a refined headboard and side table setup",
      "Extra room to relax, entertain briefly, or work in comfort",
    ],
    features: [
      "Spacious suite layout with separate sleeping and lounge feel",
      "Air conditioning",
      "Large wall-mounted television",
      "Comfortable premium bedding",
      "Private lounge seating area",
      "Private bathroom",
      "Ideal for longer stays and executive comfort",
    ],
  },
  {
    id: "executive-room",
    name: "Executive Room",
    tagline: "A refined and comfortable room for business trips and easy relaxation.",
    shortDescription:
      "A well-appointed room with the essentials you need for a polished stay, whether you are travelling for work or rest.",
    longDescription:
      "Our Executive Room offers a comfortable and practical stay with the amenities guests need for a smooth visit. It is ideal for short business trips, personal travel, and guests who want a more elevated everyday room option.",
    pricePerNight: 33500,
    idealFor: "Business travellers, solo guests, and value-focused comfort",
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
        src: "/images/Presidential_Suite/IMG-20260409-WA0000.jpg",
        alt: "Presidential Suite interior at Nectar Hotels and Suites",
      },
      {
        src: "/images/room 2.jpeg",
        alt: "Executive Room interior at Nectar Hotels and Suites",
      },
      {
        src: "/images/Presidential_Suite/IMG-20260409-WA0001.jpg",
        alt: "Another view of the Presidential Suite at Nectar Hotels and Suites",
      },
      {
        src: "/images/Presidential_Suite/IMG-20260409-WA0002.jpg",
        alt: "Presidential Suite seating area at Nectar Hotels and Suites",
      },
      {
        src: "/images/Presidential_Suite/IMG-20260409-WA0003.jpg",
        alt: "Presidential Suite bedroom view at Nectar Hotels and Suites",
      },
      {
        src: "/images/Presidential_Suite/IMG-20260409-WA0004.jpg",
        alt: "Presidential Suite comfort details at Nectar Hotels and Suites",
      },
      {
        src: "/images/Presidential_Suite/IMG-20260409-WA0005.jpg",
        alt: "Presidential Suite interior layout at Nectar Hotels and Suites",
      },
      {
        src: "/images/Presidential_Suite/IMG-20260409-WA0006.jpg",
        alt: "Presidential Suite premium room area at Nectar Hotels and Suites",
      },
      {
        src: "/images/Presidential_Suite/IMG-20260409-WA0007.jpg",
        alt: "Presidential Suite furnishing detail at Nectar Hotels and Suites",
      },
      {
        src: "/images/Presidential_Suite/IMG-20260409-WA0008.jpg",
        alt: "Presidential Suite interior ambience at Nectar Hotels and Suites",
      },
      {
        src: "/images/Presidential_Suite/IMG-20260409-WA0009.jpg",
        alt: "Presidential Suite entertainment and seating area at Nectar Hotels and Suites",
      },
      {
        src: "/images/Presidential_Suite/IMG-20260409-WA0010.jpg",
        alt: "Presidential Suite luxury stay detail at Nectar Hotels and Suites",
      },
      {
        src: "/images/Presidential_Suite/IMG-20260409-WA0011.jpg",
        alt: "Presidential Suite interior angle at Nectar Hotels and Suites",
      },
      {
        src: "/images/Presidential_Suite/IMG-20260409-WA0012.jpg",
        alt: "Presidential Suite room finish at Nectar Hotels and Suites",
      },
      {
        src: "/images/Presidential_Suite/IMG-20260409-WA0013.jpg",
        alt: "Presidential Suite full room view at Nectar Hotels and Suites",
      },
      {
        src: "/images/room 4.jpeg",
        alt: "Another view of the Executive Room at Nectar Hotels and Suites",
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
