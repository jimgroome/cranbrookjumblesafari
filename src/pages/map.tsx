import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { GetServerSideProps } from "next";
import AWS from "aws-sdk";
import MapMarker from "@/components/map-marker";
export interface MarkerType {
  lat: number;
  lng: number;
  address: string;
  description?: string;
  order?: number;
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
      zoom: 15,
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

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100vw", height: "100vh" }}
      >
        {markers.map((marker) => (
          <MapMarker marker={marker} key={marker.address} />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;

export const getServerSideProps: GetServerSideProps<{
  markers: MarkerType[];
}> = async () => {
  AWS.config.update({
    region: "eu-west-2",
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });
  const DynamoDB = new AWS.DynamoDB.DocumentClient();
  const pitches = await DynamoDB.scan(
    {
      TableName: process.env.DYNAMODB_TABLE_NAME as string,
    },
    (error) => {
      if (error) {
        console.log(error);
      }
    }
  ).promise();

  const markers =
    pitches.Items?.map(({ lat, long: lng, address1: address, order = 0 }) => ({
      lat,
      lng,
      address,
      order,
    })) || [];

  // if (pitches.Items)
  //   console.log(
  //     JSON.stringify(
  //       pitches.Items.filter((marker) => !!marker.order)
  //         .sort((a, b) => a.order - b.order)
  //         .map(
  //           (marker) =>
  //             `${marker.order}: ${marker.address1}, ${marker.address2}, ${marker.postcode}`
  //         ),
  //       null,
  //       4
  //     )
  //   );

  return { props: { markers } };
};
