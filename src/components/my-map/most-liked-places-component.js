import {Marker, Popup} from "react-leaflet";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findMostLikedPlacesThunk} from "../../services/likes-thunk";
import {formatKinds} from "../../util/format";
import {Link, useLocation} from "react-router-dom";
import * as L from "leaflet";

const MostLikedPlacesComponent = () => {
  const {mostLikedPlaces} = useSelector(state => state.likesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findMostLikedPlacesThunk(10))
  }, []);
  const {pathname} = useLocation();

  const redIcon = L.icon({
    iconUrl: 'images/markers/marker-icon-2x-orange.png',
    shadowUrl: 'images/markers/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (pathname === "/" &&
      (mostLikedPlaces.map((mostLikedPlace) =>
          <Marker key={mostLikedPlace.place.xid}
                  autoPan={false}
                  position={mostLikedPlace.place.point}
                  icon={redIcon}
                  eventHandlers={{
                    popupopen: (e) => {
                      console.log(e)
                    }
                  }}>
            <Popup autoPan={false}>
              <MostLikedPlacePlaceCard mostLikedPlace={mostLikedPlace}/>
            </Popup>
          </Marker>
      )));
}

const MostLikedPlacePlaceCard = ({mostLikedPlace}) => {
  return (
      <div>
        <h5>{mostLikedPlace.place.name}</h5>
        <h6>{formatKinds(mostLikedPlace.place.kinds)}</h6>
        <h6>{`${mostLikedPlace.count} likes`}</h6>
        <Link to={`/details/${mostLikedPlace.place.xid}`}>
          See more
        </Link>
      </div>
  );
}

export default MostLikedPlacesComponent;