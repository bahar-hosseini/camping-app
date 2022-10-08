import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

import "../components/styles/Map.scss";

export function Map({ location, zoomLevel }) {
  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );
  //const MultiPoints = locations.map((loco, index) => {
  //   return (
  //     <LocationPin
  //       Key={index}
  //       lat={loco.lat}
  //       lng={loco.long}
  //       text={loco.text}
  //     />
  //   );
  // });
  //console.log(MultiPoints)
  // const center = useMemo(() => ({ lat: 43.65, lng: -79.70 }), []);
  return (
    <>
      <div className="map">
        <h2 className="map-h2">Nearby Camping Rentals</h2>

        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDJMA5lagbJeI5P-kNG8aYQi1nK9UyZF1U",
            }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
          >
            
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
}
