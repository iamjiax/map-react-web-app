import {useMap} from "react-leaflet";
import * as L from 'leaflet';
import 'leaflet-search'
import {useDispatch} from "react-redux";

import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


const SearchControl = () => {
  const map = useMap();
  const dispatch = useDispatch();

  const navigate = useNavigate();

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

    autoCollapse: true,

    minLength: 2,
    zoom: 16,
    textPlaceholder: "Search places..."
  });

  useEffect(() => {
    ls.addTo(map);
  }, [])

  ls.on("search:locationfound", (e)=> {
    redMarker.bindPopup(`${formatLocation(e)}`);
    navigate(`/search?zoom=16&lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
  });
}

const formatLocation = (e) => {
  return Object.keys(e.target._recordsCache)[0];
}


export default SearchControl;