import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

import "../components/styles/Map.scss";

export function Map({ location, zoomLevel }) {
  
    let LocationPin = ({ text }) => (
      <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
      </div>
    );
 

  // const locationGallery = location.map((items) => {
  
   

  //   return <LocationPin lat={items.lat} lng={items.lng} text={items.address} />;
  // });
  console.log(location);
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
            zoomControl= {false}
          >
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
            {/* {location.length < 2 && <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />} */}
            {/* {location.length > 1 && locationGallery} */}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
}
