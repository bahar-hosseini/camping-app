import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

import "../components/styles/MapMulti.scss";

// const MapMultiHome = React.lazy (()=> {
export function MapMultiHome({ location, zoomLevel }) {
  // let LocationPin = ({ text }) => (
  //   <div className="pin">
  //     <Icon icon={locationIcon} className="pin-icon" />
  //     <p className="pin-text">{text}</p>
  //   </div>
  // );
  //console.log(location);
  let LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );

  const markerCollection = location.map((items, index) => {
    return <LocationPin lat={items.lat} lng={items.lng} key={index} />;
  });

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDJMA5lagbJeI5P-kNG8aYQi1nK9UyZF1U" }}
        defaultCenter={{ lat: 43.687775, lng: -79.388245 }}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
        options={{
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          disableDoubleClickZoom: true,
          rotateControl: false,
          scrollwheel: false,
          fullscreenControl: false
        }}
        // onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        // onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
      >
        {/* <LocationPin
          lat={location[0].lat}
          lng={location[0].lng}
          text={location[0].address}
        />
         <LocationPin
          lat={location[1].lat}
          lng={location[1].lng}
          text={location[1].address}
        /> */}
        {markerCollection}
      </GoogleMapReact>
    </div>

    // <>
    //   <div className="map">
    //     <h2 className="map-h2">Nearby Camping Rentals</h2>

    //     <div className="google-map">
    //       <GoogleMapReact
    //         bootstrapURLKeys={{
    //           key: "AIzaSyDJMA5lagbJeI5P-kNG8aYQi1nK9UyZF1U",
    //         }}
    //         defaultCenter={location}
    //         defaultZoom={zoomLevel}
    //         zoomControl= {false}
    //       >
    //         <LocationPin
    //           lat={location.lat}
    //           lng={location.lng}
    //           text={location.address}
    //         />

    //         {/* {location.length < 2 && <LocationPin
    //           lat={location.lat}
    //           lng={location.lng}
    //           text={location.address}
    //         />} */}
    //         {/* {location.length > 1 && locationGallery} */}
    //       </GoogleMapReact>
    //     </div>
    //   </div>
    // </>
  );
}
