import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
const Map = () => {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: 51.095517, lng: 0.536049 }), []);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
      zoom: 16,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100vw", height: "100vh" }}
        onLoad={() => console.log("Map Component Loaded...")}
      >
        <MarkerF
          position={mapCenter}
          onLoad={() => console.log("Marker Loaded")}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
