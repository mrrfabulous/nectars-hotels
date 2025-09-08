// src/components/GoogleMap.tsx
'use client'; // 👈 Important for Next.js 13+ app router

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 10.3141, // Bauchi, Nigeria approx.
  lng: 9.8468,
};

const markerPosition = {
  lat: 10.3141,
  lng: 9.8468,
};

interface GoogleMapProps {
  className?: string;
}

const GoogleMapComponent = ({ className }: GoogleMapProps) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // 👈 Set this in .env
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = (mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  };

  const onUnmount = () => {
    setMap(null);
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return (
    <div className={className}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
            gestureHandling: 'greedy',
          }}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          Loading Map...
        </div>
      )}
    </div>
  );
};

export default GoogleMapComponent;