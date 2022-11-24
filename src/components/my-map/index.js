import {MapContainer, TileLayer, ZoomControl} from 'react-leaflet';
import LocationControl from './location-control';
import SearchControl from "./search-control";
import AccountButton from "./account-component";
import SearchComponent from "./search-component";

function MyMap() {
  return (
      <MapContainer
          center={[47.6, -122.3]}
          zoom={13}
          zoomControl={false}
          scrollWheelZoom={true}
          doubleClickZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <SearchComponent/>
        <AccountButton/>
        <LocationControl/>
        <ZoomControl position="bottomright"/>
      </MapContainer>
  )
};

export default MyMap;