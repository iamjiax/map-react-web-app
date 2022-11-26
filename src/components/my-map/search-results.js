import {useDispatch, useSelector} from "react-redux";
import {Marker, Popup} from "react-leaflet";
import {Link} from "react-router-dom";

const SearchResults = () => {
  const {places, placesLoaded} = useSelector(state => state.placesReducer);

  return (
      places.map(place =>
          <Marker key={place.xid} position={place.point}
                  eventHandlers={{
                    popupopen: (e) => {
                      console.log(e)
                    }
                  }}>
            <Popup>
              <PlaceCard place={place}/>
            </Popup>
          </Marker>
      ));
}

const PlaceCard = ({place}) => {
  return (
      <div>
        <h5>{place.name}</h5>
        <h6>{formatKinds(place.kinds)}</h6>
        <Link to={`/details/${place.xid}`}>
          See more
        </Link>
      </div>
  );
};

const formatKinds = (kindsStr) => {
  return kindsStr.split(",")[0]
  .split("_")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
}

export default SearchResults;