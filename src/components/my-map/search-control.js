import {useMap} from "react-leaflet";
import * as L from 'leaflet';
import 'leaflet-search'
const SearchControl = () => {
  const map = useMap();
  const ls = L.control.search({
    url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
    jsonpParam: 'json_callback',
    propertyName: 'display_name',
    propertyLoc: ['lat','lon'],
    marker: L.marker([0,0]),
    autoCollapse: true,
    autoType: false,
    minLength: 2,
    zoom: 15,
  });
  ls.addTo(map);
}

export default SearchControl;