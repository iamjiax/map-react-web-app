import {MapContainer, TileLayer, useMap} from 'react-leaflet';
import LocationControl from './location-control';
import * as L from "leaflet";
import LocationMarker from "./location-marker";
import SearchControl from "./search-control";

function MyMap() {
  return (
      <MapContainer
          center={[47.6, -122.3]}
          zoom={13}
          scrollWheelZoom={true}
      >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/*<LocationMarker initialPos={[47.6, -122.3]}/>*/}
        <LocationControl/>
        <SearchControl/>
      </MapContainer>
  )
};

export default MyMap;