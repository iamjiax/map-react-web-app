import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {UserRoles} from "../../../util/user-roles";
import {findPlaceinfoByManagerThunk} from "../../../services/placeinfo-thunk";
import {Link} from "react-router-dom";

const ManagerPlaceinfoComponent = ({user}) => {
  // const {currentUser} = useSelector(state => state.userReducer);
  const {placeinfoByManager} = useSelector(state => state.placeinfoReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.role === UserRoles.MANAGER) {
      dispatch(findPlaceinfoByManagerThunk(user._id))
    }
  }, [user]);

  return user && (
      <div>
        <h3>Managed Places</h3>
        <ul className="list-group">
          {placeinfoByManager.map(placeinfo =>
              <PlaceinfoItem key={placeinfo.place.xid}
                             placeinfo={placeinfo}/>
          )}
        </ul>
      </div>
  )
}

const PlaceinfoItem = ({placeinfo}) => {
  return(
      <li className="list-group-item">
        <Link to={`/details/${placeinfo.place.xid}`}>{placeinfo.place.name}</Link>
        <div>
          Notification:
          <div>{placeinfo.notification}</div>
        </div>
        {/*Edit btn*/}
      </li>
  );
}

export default ManagerPlaceinfoComponent;
