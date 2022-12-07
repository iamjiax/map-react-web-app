import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
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
        <h3>Favorite places</h3>
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