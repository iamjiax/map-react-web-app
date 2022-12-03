import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  findLikesByUserThunk,
} from "../../../services/likes-thunk";
import {Link} from "react-router-dom";

const UserLikesComponent = () => {
  const {currentUser} = useSelector(state => state.userReducer);
  const {userLikes} = useSelector(state => state.likesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) {
      dispatch(findLikesByUserThunk(currentUser._id))
    }
  }, [currentUser]);

  return currentUser && (
      <div>
        <h3>user favorite places</h3>
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
};
export default UserLikesComponent;