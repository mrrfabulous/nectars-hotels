import type { Metadata } from "next";
import { formatNaira, gallerySections, hotelContact, roomTypes } from "@/lib/hotelContent";

const fallbackSiteUrl = hotelContact.siteUrl;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || fallbackSiteUrl;

export const siteName = "Nectar Hotels & Suites";
export const defaultSocialImage = "/opengraph-image";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildAbsoluteUrl(path: string = "/") {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: CreatePageMetadataInput): Metadata {
  const absoluteUrl = buildAbsoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName,
      locale: "en_NG",
      type: "website",
      images: [
        {
          url: defaultSocialImage,
          width: 1200,
          height: 630,
          alt: `${title} | ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultSocialImage],
    },
  };
}

export function getHotelStructuredData() {
  const priceRange = `${formatNaira(
    Math.min(...roomTypes.map((room) => room.pricePerNight))
  )} - ${formatNaira(Math.max(...roomTypes.map((room) => room.pricePerNight)))}`;

  const hotelImages = gallerySections.flatMap((section) =>
    section.images.map((image) => buildAbsoluteUrl(image.src))
  );

  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: siteName,
    description:
      "Nectar Hotels & Suites is a welcoming hotel in Bauchi offering direct booking, comfortable stays, and two room options: the Presidential Suite and Executive Room.",
    url: siteUrl,
    image: hotelImages,
    telephone: hotelContact.phoneDisplay,
    email: hotelContact.email,
    priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotelContact.addressLines.join(", "),
      addressLocality: hotelContact.city,
      addressRegion: hotelContact.state,
      postalCode: hotelContact.postalCode,
      addressCountry: hotelContact.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hotelContact.coordinates.latitude,
      longitude: hotelContact.coordinates.longitude,
    },
    hasMap: hotelContact.mapShareUrl,
    sameAs: [
      "https://www.facebook.com/share/1G4u57Nekw/",
      "https://www.instagram.com/nectarhotelsandsuites?igsh=dWFtbmprb2Q5YW4x&utm_source=ig_contact_invite",
      "https://www.tiktok.com/@nectarhotelsandsuites",
    ],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Restaurant",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 Security",
        value: true,
      },
    ],
    makesOffer: roomTypes.map((room) => ({
      "@type": "Offer",
      name: room.name,
      description: room.shortDescription,
      url: buildAbsoluteUrl("/rooms"),
      priceCurrency: "NGN",
      price: room.pricePerNight,
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "Room",
        name: room.name,
        description: room.longDescription,
        occupancy: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: room.id === "presidential-suite" ? 4 : 2,
        },
      },
    })),
  };
}
