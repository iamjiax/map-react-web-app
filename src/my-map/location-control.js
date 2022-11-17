import {useState} from "react";
import {useMap} from "react-leaflet";
import * as L from 'leaflet';
import 'leaflet.locatecontrol';

const LocationControl = () => {
  const map = useMap();
  const [controlAdded, setControlAdded] = useState(false);

  if (!controlAdded) {
    // console.log(map);
    L.control
    .locate({
      strings: {
        title: "Show me where I am, yo!"
      }
    })
    .addTo(map);
    setControlAdded(true);
  }
}

export default LocationControl;