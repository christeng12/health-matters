import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
  height: "500px",
  width: "800px"
};

const center = {
  lat: 38.627003,
  lng: -90.199402
};

const ServiceMap = (props) => {
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false); // state to check if the script has loaded
  const [infoWindowTimer, setInfoWindowTimer] = useState(null);


  useEffect(() => {
    if (mapLoaded) { // Only attempt geocoding if the script is loaded
      const geocoder = new window.google.maps.Geocoder();
      props.data.forEach((item, index) => {
        geocoder.geocode({ 'address': item.location }, (results, status) => {
          if (status === "OK") {
            setMarkers(markers => [
              ...markers,
              { 
                lat: results[0].geometry.location.lat(), 
                lng: results[0].geometry.location.lng(),
                key: index,
                name: item.service,
                loc: item.location
              }
            ]);
          } else {
            console.error('Geocode was not successful for the following reason:', status);
          }
        });
      });
    }
  }, [props.data, mapLoaded]); // Depend on mapLoaded as well

  const handleMouseOver = (marker) => {
    if (selectedMarker) {
      return; // If there is already an InfoWindow open, don't do anything
    }
    setSelectedMarker(marker);
  };

//   const handleMouseOut = () => {
//     // Add a delay before closing the InfoWindow
//     setTimeout(() => {
//       // Only close if the selectedMarker is still the one that triggered the mouse out event
//       if (selectedMarker) {
//         setSelectedMarker(null);
//       }
//     }, 200); // Short delay (e.g., 200 ms)
//   };


  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBdEPvYVn7taB9IXcXYIOMjQMHP2Pq_-AY" // Replace with your actual API key
      onLoad={() => setMapLoaded(true)} // Set the flag to true when script has loaded
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {markers.map(marker => (
          <Marker 
            key={marker.key} 
            position={{ lat: marker.lat, lng: marker.lng }}
            onMouseOver={() => handleMouseOver(marker)}
            //onMouseOut={handleMouseOut}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={{
              lat: selectedMarker.lat,
              lng: selectedMarker.lng
            }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h2>{selectedMarker.name}</h2>
              <p>{selectedMarker.loc}</p>
              {/* Add more details here if needed */}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default ServiceMap;
