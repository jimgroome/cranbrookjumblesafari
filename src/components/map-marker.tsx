import { MarkerType } from "@/pages/map";
import {
  InfoWindow,
  InfoWindowF,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import { useState } from "react";

interface MapMarkerProps {
  marker: MarkerType;
}

const MapMarker = ({ marker }: MapMarkerProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(!open);

  return (
    <MarkerF
      key={marker.address}
      position={{ lat: marker.lat, lng: marker.lng }}
      onClick={() => {
        console.log(marker.address);
        setOpen(!open);
      }}
    >
      {open && (
        <InfoWindowF onCloseClick={handleClose}>
          <p>{marker.address}</p>
        </InfoWindowF>
      )}
    </MarkerF>
  );
};

export default MapMarker;
