import {MapContainer, TileLayer} from 'react-leaflet';
import LocationMarker from "./location-marker";

function MyMap() {
  return (
      <MapContainer center={[47.6, -122.3]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker/>
      </MapContainer>
  )
};

export default MyMap;