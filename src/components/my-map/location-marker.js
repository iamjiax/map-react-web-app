import {useEffect, useRef, useState} from "react";
import {Marker, Popup, useMapEvents} from "react-leaflet";

const LocationMarker = ({initialPos}) => {
  const [position, setPosition] = useState(initialPos)

  //move marker to current location
  const map = useMapEvents({
    click(e) {
      // map.locate();
      console.log(e);
    },
    locationfound(e) {
      console.log(e.latlng);
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  useEffect(() => {
    map.locate();
  }, [map]);

  // try to get marker reference
  const markerRef = useRef(null);
  const [marker, setMarker] = useState(null);
  useEffect(() => {
    setMarker(markerRef.current);
  });
  // console.log(marker?.toGeoJSON());

  return position === null? null : (
      <Marker position={position} ref={markerRef}>
        <Popup>{"You are here" + marker?.getLatLng()}</Popup>
      </Marker>
  )
};

export default LocationMarker;