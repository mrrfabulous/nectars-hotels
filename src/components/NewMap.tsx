'use client';

import { hotelContact } from "@/lib/hotelContent";

interface SimpleMapProps {
  className?: string;
}

const SimpleGoogleMap = ({ className }: SimpleMapProps) => {
  return (
    <div className={className}>
      <div className="relative h-full">
        <iframe
          src={hotelContact.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{
            border: 0,
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nectar Hotels & Suites Location"
        />
      </div>
    </div>
  );
};

export default SimpleGoogleMap;
