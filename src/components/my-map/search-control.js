import {useMap} from "react-leaflet";
import * as L from 'leaflet';
import 'leaflet-search'
import {useDispatch} from "react-redux";
import {findPlacesByLocThunk} from "../../services/places-thunks";

const SearchControl = () => {
  const map = useMap();
  const dispatch = useDispatch();
  const redIcon = L.icon({
    iconUrl: 'images/markers/marker-icon-2x-red.png',
    shadowUrl: 'images/markers/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  const redMarker = L.marker([0,0],{icon:redIcon});
  const ls = L.control.search({
    url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
    jsonpParam: 'json_callback',
    propertyName: 'display_name',
    propertyLoc: ['lat','lon'],
    marker: redMarker,
    autoType: true,
    collapsed: false,
    autoCollapse: false,
    minLength: 2,
    zoom: 16,
    textPlaceholder: "Search places..."
  });
  ls.addTo(map);
  ls.on("search:locationfound", (e)=> {
    dispatch(findPlacesByLocThunk(e.latlng));
  });
}

export default SearchControl;