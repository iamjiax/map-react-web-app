import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
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
        {/*<h3>Managed Places</h3>*/}
        <div className="row mt-5 mb-3">
          <div className="col">
            <hr className="border border-2 opacity-50"/>
          </div>
          <h5 className="col-auto">Managed Places</h5>
          <div className="col">
            <hr className="border border-2 opacity-50"/>
          </div>
        </div>
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
