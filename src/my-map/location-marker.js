import {useEffect, useState} from "react";
import {Marker, Popup, useMapEvents} from "react-leaflet";

const LocationMarker = () => {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click(e) {
      // map.locate();
      console.log(e);
    },
    locationfound(e) {
      // console.log(e);
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  useEffect(() => {
    map.locate();
  }, [map]);

  return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
  )
};

export default LocationMarker;