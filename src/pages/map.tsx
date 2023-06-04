import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { GetServerSideProps } from "next";
interface MarkerType {
  lat: number;
  lng: number;
  address: string;
  description?: string;
}
interface Props {
  markers: MarkerType[];
}
const Map = ({ markers }: Props) => {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(
    () => ({ lat: 51.09708018168344, lng: 0.5318218385925411 }),
    []
  );
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
      zoom: 16,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
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
  markers.map((marker) => console.log(marker));

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100vw", height: "100vh" }}
      >
        {markers.map((marker) => (
          <MarkerF
            key={marker.address}
            position={{ lat: marker.lat, lng: marker.lng }}
            label={marker.lat.toString()}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;

export const getServerSideProps: GetServerSideProps<{
  markers: MarkerType[];
}> = async () => {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: "us14",
  });

  // @ts-ignore
  const pitches = await mailchimp.lists.getSegmentMembersList(
    process.env.MAILCHIMP_lIST_ID as string,
    process.env.MAILCHIMP_PITCH_SEGMENT_ID as string,
    {
      include_transactional: true,
      count: 1000,
    }
  );

  const markers: MarkerType[] = pitches.members.map((pitch: any) => {
    return {
      lat: parseFloat(pitch.merge_fields.LAT),
      lng: parseFloat(pitch.merge_fields.LONG),
      address: pitch.merge_fields.ADDRESS || "",
    };
  });

  return { props: { markers } };
};
