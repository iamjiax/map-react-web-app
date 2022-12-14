import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
  ZoomControl
} from 'react-leaflet';
import LocationControl from './location-control';
import AccountComponent from "./account-component";
import SearchComponent from "./search-component";
import {useSearchParams} from "react-router-dom";
import MostLikedPlacesComponent from "./most-liked-places-component";
import SearchParamsSetting from "./search-params-setting";

function MyMap() {
  const [searchParams, setSearchParams] = useSearchParams();
  const zoomLayer = searchParams.get("zoom") || 13;
  const lat = searchParams.get("lat") || 47.6;
  const lng = searchParams.get("lng") || -122.3;

  return (
      <MapContainer
          center={[lat, lng]}
          zoom={zoomLayer}
          zoomControl={false}
          scrollWheelZoom={true}
          doubleClickZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <SearchParamsSetting/>
        <MostLikedPlacesComponent/>
        <SearchComponent/>
        <AccountComponent/>
        <LocationControl/>
        <ZoomControl position="bottomright"/>
      </MapContainer>
  )
};

export default MyMap;