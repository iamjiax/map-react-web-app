import {useMap} from "react-leaflet";
import * as L from 'leaflet';
import 'leaflet.locatecontrol';

const LocationControl = () => {
  const map = useMap();
  const lc = L.control.locate({
    strings: {
      title: "Show me where I am, yo!"
    },
    keepCurrentZoomLevel: true,
    // initialZoomLevel: 13,
  });
  lc.addTo(map);
}

export default LocationControl;