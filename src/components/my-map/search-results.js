import {useDispatch, useSelector} from "react-redux";
import {Marker, Popup, useMapEvents} from "react-leaflet";
import {Link, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {findPlacesByLocThunk} from "../../services/places-thunks";

const SearchResults = () => {
  const map = useMapEvents({
    moveend() {
      setSearchParams({
        "zoom": map.getZoom(),
        "lat": map.getCenter().lat,
        "lng": map.getCenter().lng
      });
    }
  });

  const {places, placesLoaded} = useSelector(state => state.placesReducer);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  useEffect(() => {
    if (lat && lng) {
      dispatch(findPlacesByLocThunk({lat, lng}));
    }
  }, [searchParams]);
  return (
      places.map(place =>
          <Marker key={place.xid}
                  autoPan={false}
                  position={place.point}
                  eventHandlers={{
                    popupopen: (e) => {
                      console.log(e)
                    }
                  }}>
            <Popup autoPan={false}>
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