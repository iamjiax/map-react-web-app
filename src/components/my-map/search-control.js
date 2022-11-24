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
    autoType: true,
    collapsed: false,
    minLength: 2,
    zoom: 15,
  });
  ls.addTo(map);
  ls.on("search:locationfound", (e)=> {
    console.log(e);
  })
}

export default SearchControl;