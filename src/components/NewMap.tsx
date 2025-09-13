// src/components/SimpleGoogleMap.tsx
'use client';

interface SimpleMapProps {
  className?: string;
}

const SimpleGoogleMap = ({ className }: SimpleMapProps) => {
  return (
    <div className={className}>
        {/* <div className="md:absolute right-0 md:top-0 z-10 flex justify-center">
        <div className="flex gap-2 mt-2 flex-wrap">
          <button
            onClick={() => window.open('https://www.google.com/maps/dir//Albarka+Radio+BAUCHI,+8Q4P%2BHF,+Bauchi+740110,+Bauchi/@10.3063381,9.7452079,12752m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x1054d1eb581a4d47:0xc3acecc729c724a3!2m2!1d9.786408!2d10.3063066?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D')}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
          >
            Get Directions
          </button>
          <button
            onClick={() => window.open('https://www.google.com/maps/search/Tilde+Street,+Off+Sunday+Awoniyi+Road,+New+GRA,+Bauchi,+Bauchi+State/@10.306932,9.7850765,168m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
          >
            View on Google Maps
          </button>
        </div>
      </div> */}

      <div className="relative h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125606.34567890123!2d10.280299999999999!3d9.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105c5d5b9b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sBauchi%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ 
            border: 20, 
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