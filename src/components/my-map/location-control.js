import {useMap} from "react-leaflet";
import * as L from 'leaflet';
import 'leaflet.locatecontrol';
import {useEffect} from "react";


const LocationControl = () => {
  const map = useMap();
  const lc = L.control.locate({
    strings: {

      title: "Find my position"

    },
    keepCurrentZoomLevel: true,
    position: "bottomright"
    // initialZoomLevel: 13,
  });

  useEffect(() => {
    lc.addTo(map);
  }, [])
}

export default LocationControl;