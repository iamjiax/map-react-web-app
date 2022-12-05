import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findReviewsByPlaceThunk} from "../../services/reviews-thunk";

const PlaceReviewsList = () => {
  const {reviews} = useSelector(state => state.reviewsReducer);
  const {xid} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findReviewsByPlaceThunk(xid))
      }, [xid]);
  return (
      <ul className="list-group">
        {
          reviews.map(review => <PlaceReviewItem key={review._id} review={review}/>)
        }
      </ul>
  );
};

const PlaceReviewItem = ({review}) => {
  const {currentUser} = useSelector(state => state.userReducer);
  const profileUrl = currentUser?._id === review.user._id ? "/profile" : `/profile/${review.user._id}`;
  return (
      <li className="list-group-item">
        <Link to={profileUrl}>{review.user.username}</Link>
        <div>{review.content}</div>
      </li>
  );

}
export default PlaceReviewsList;