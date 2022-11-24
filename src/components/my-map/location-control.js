import {useMap} from "react-leaflet";
import * as L from 'leaflet';
import 'leaflet.locatecontrol';

const LocationControl = () => {
  const map = useMap();
  const lc = L.control.locate({
    strings: {
      title: "You are here!"
    },
    keepCurrentZoomLevel: true,
    position: "bottomright"
    // initialZoomLevel: 13,
  });
  lc.addTo(map);
}

export default LocationControl;