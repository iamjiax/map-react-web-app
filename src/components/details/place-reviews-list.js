import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  deleteReviewThunk,
  findReviewsByPlaceThunk
} from "../../services/reviews-thunk";

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
          reviews.map(
              review => <PlaceReviewItem key={review._id} review={review}/>)
        }
      </ul>
  );
};

const PlaceReviewItem = ({review}) => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.userReducer);
  const {placeinfo} = useSelector(state => state.placeinfoReducer);
  const profileUrl = currentUser?._id === review.user._id ? "/profile"
      : `/profile/${review.user._id}`;
  const handleReplyReviewBtn = () => {
    console.log("manager reply")
  }
  return (
      <div className="container">
          <div className="row">
              <li className="row list-group-item align-items-center">
                  <Link to={profileUrl}>{review.user.username}</Link>
                  <div>
                      {review.content}
                      {(currentUser?._id === review.user._id) &&
                          <i className="bi bi-x-lg float-end"
                             onClick={() => dispatch(deleteReviewThunk(review._id))}
                          ></i>
                      }
                      {(currentUser?._id === placeinfo?.manager._id) &&
                          <button className="btn btn-primary float-end"
                                  onClick={handleReplyReviewBtn}>
                              reply
                          </button>
                      }
                  </div>
              </li>

         </div>
      </div>

  );

}
export default PlaceReviewsList;