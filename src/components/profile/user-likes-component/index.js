import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {
  findLikesByUserThunk,
} from "../../../services/likes-thunk";
import {Link} from "react-router-dom";

const UserLikesComponent = ({user}) => {
  // const {currentUser} = useSelector(state => state.userReducer);
  const {userLikes} = useSelector(state => state.likesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(findLikesByUserThunk(user._id))
    }
  }, [user]);

  return user && (
      <div>
        <div className="row mt-5 mb-3">
          <div className="col">
            <hr className="border border-2 opacity-50"/>
          </div>
          <h5 className="col-auto">Favorite places</h5>
          <div className="col">
            <hr className="border border-2 opacity-50"/>
          </div>
        </div>
        <ul className="list-group">
          {userLikes.map(like => <PlaceItem key={like.place.xid} place={like.place}/>)}
        </ul>
      </div>
  )
}

const PlaceItem = ({place}) => {
  return (
      <li className="list-group-item">
        <Link to={`/details/${place.xid}`}>{place.name}</Link>
      </li>
  );
}

export default UserLikesComponent;