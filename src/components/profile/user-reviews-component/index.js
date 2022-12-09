import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {
  deleteReviewThunk,
  findReviewsByUserThunk
} from "../../../services/reviews-thunk";
import {Link} from "react-router-dom";

const UserReviewsComponent = ({user}) => {
  // const {currentUser} = useSelector(state => state.userReducer);
  const {reviews} = useSelector(state => state.reviewsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(findReviewsByUserThunk(user._id))
    }
  }, [user]);
  return user && (
      <div>
        {/*<h3>Reviews</h3>*/}
        <div className="row mt-5 mb-3">
          <div className="col">
            <hr className="border border-2 opacity-50"/>
          </div>
          <h5 className="col-auto">Reviews</h5>
          <div className="col">
            <hr className="border border-2 opacity-50"/>
          </div>
        </div>
        <ul className="list-group">
          {reviews.map(review => <ReviewItem key={review._id} review={review}/>)}
        </ul>
      </div>
  )
}

const ReviewItem = ({review}) => {
  const {currentUser} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  return (
      <li className="list-group-item">
        <Link to={`/details/${review.place.xid}`}>{review.place.name}</Link>
        <div>{review.content}</div>
        {(currentUser?._id === review.user._id) &&
          <button className="bi-x"
                  onClick={() => dispatch(deleteReviewThunk(review._id))}
          ></button>
        }
      </li>
  );
};

export default UserReviewsComponent;