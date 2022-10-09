import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

import "../components/styles/Map.scss";

export function MapMultiHome({ location, zoomLevel }) {
  
    // let LocationPin = ({ text }) => (
    //   <div className="pin">
    //     <Icon icon={locationIcon} className="pin-icon" />
    //     <p className="pin-text">{text}</p>
    //   </div>
    // );
 
      console.log(location)
  // const locationGallery = location.map((items) => {
    
      // const renderMarkers = (map, maps) => {
      //  let marker = new location.Marker({
      //  position: { lat: location.lat, lng: location.lng },
      //  map,
      //  title: 'Hello World!'
      //  });
      //  return marker;
      // };
 

  //   return <LocationPin lat={items.lat} lng={items.lng} text={items.address} />;
  // });
  // console.log(location);
  return (
    <div style={{ height: '50vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDJMA5lagbJeI5P-kNG8aYQi1nK9UyZF1U' }}
      defaultCenter={{ lat: 43.687775, lng: -79.388245 }}
      defaultZoom={16}
      yesIWantToUseGoogleMapApiInternals
      // onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}

    >
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
