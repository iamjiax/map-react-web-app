import {
  findLikeThunk,
  findPlaceLikesCountThunk,
  userLikePlaceThunk,
  userUnlikePlaceThunk
} from "../../services/likes-thunk";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";

const LikeIcon = ({place}) => {
  const {currentUser} = useSelector(state => state.userReducer);
  const {userLikePlace} = useSelector(state => state.likesReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {xid, name} = place;
  useEffect(() => {
    if (currentUser) {
      dispatch(findLikeThunk({uid: currentUser._id, xid: xid}))
    }
  }, [xid, currentUser]);

  useEffect(() => {
    dispatch(findPlaceLikesCountThunk(xid));
  }, [userLikePlace]);

  const toggleLikePlaceHandler = () => {
    if (currentUser) {
      const likeToToggle = {
        user: {_id: currentUser._id, username: currentUser.username},
        place: {xid: xid, name: name},
      }
      userLikePlace ? dispatch(userUnlikePlaceThunk(likeToToggle)) :
          dispatch(userLikePlaceThunk(likeToToggle));
    } else {
      navigate('/login');
    }
  }

  const likeClassName = userLikePlace ? "text-danger bi bi-heart-fill"
      : "bi bi-heart";
  return (
        <i className={`${likeClassName} fs-5 fw-bold`}
           onClick={toggleLikePlaceHandler}
           style={{cursor: "pointer"}}
        ></i>
  );
};

export default LikeIcon;