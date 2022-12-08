import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
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
  const [isReply, setIsReply] = useState(false);
  const cancelClickBtn = () => setIsReply(false);
  const [replyContent, setReplyContent] = useState("");
  const handleReplyReviewBtn = () => setIsReply(true);
  const saveReplyBtn = () => {}

  return (
      <li className="list-group-item">
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
              </button>}

          {(isReply === true) && <div className="mt-3">
            <textarea className="form-control"
                      placeholder="Reply to the review..."
                      style={{overFlow: "hidden"}}
                      value={replyContent}
                      onChange={(event) => setReplyContent(event.target.value)}/>
            <div className="mt-3">
              <button onClick={cancelClickBtn} type="button" className="btn btn-secondary float-end">Cancel</button>
              <button onClick={saveReplyBtn} type="button" className="btn btn-primary float-end me-3">Save</button>
            </div>
          </div>}


        </div>
      </li>
  );

}
export default PlaceReviewsList;