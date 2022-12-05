import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  deleteReviewThunk,
  findReviewsByUserThunk
} from "../../../services/reviews-thunk";
import {Link} from "react-router-dom";

const UserReviewsComponent = () => {
  const {currentUser} = useSelector(state => state.userReducer);
  const {reviews} = useSelector(state => state.reviewsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) {
      dispatch(findReviewsByUserThunk(currentUser._id))
    }
  }, [currentUser]);
  return currentUser && (
      <div>
        <h3>Reviews</h3>
        <ul className="list-group">
          {reviews.map(review => <ReviewItem key={review._id} review={review}/>)}
        </ul>
      </div>
  )
}

const ReviewItem = ({review}) => {
  const dispatch = useDispatch();
  return (
      <li className="list-group-item">
        <Link to={`/details/${review.place.xid}`}>{review.place.name}</Link>
        <div>{review.content}</div>
        <button className="bi-x"
                onClick={() => dispatch(deleteReviewThunk(review._id))}
        ></button>
      </li>
  );
};

export default UserReviewsComponent;