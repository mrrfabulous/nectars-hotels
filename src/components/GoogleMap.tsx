"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 10.306842967680982,
  lng: 9.785494974391938,
};

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

interface GoogleMapProps {
  className?: string;
}

const GoogleMapComponent = ({ className }: GoogleMapProps) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey,
  });

  if (!googleMapsApiKey) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-200 text-sm text-gray-600`}
      >
        Google Maps key not configured.
      </div>
    );
  }

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
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
            gestureHandling: "greedy",
          }}
        >
          <Marker position={center} />
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
