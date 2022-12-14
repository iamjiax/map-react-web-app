import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {
  deleteReviewThunk,
  findReviewsByPlaceThunk,
  updateReviewThunk
} from "../../services/reviews-thunk";
import {UserRoles} from "../../util/user-roles";

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
  const cancelReplyBtn = () => setIsReply(false);
  const [isEdit, setIsEdit] = useState(false);
  const cancelEditBtn = () => setIsEdit(false);
  const [replyContent, setReplyContent] = useState(
      review.reply ? review.reply.content : "");
  const [content, setReviewContent] = useState(review.content);
  const handleReplyBtn = () => setIsReply(true);
  const handleEditBtn = () => {
    setIsEdit(true);
  }
  const saveReplyBtn = () => {
    const newReply = {
      ...review,
      reply: {
        manager: {_id: currentUser._id, username: currentUser.username},
        content: replyContent
      }
    }
    dispatch(updateReviewThunk(newReply));
    setIsReply(false);
  }

  const saveEditBtn = () => {
    const newReply = {
      ...review,
      content: content
    }
    dispatch(updateReviewThunk(newReply));
    setIsEdit(false);
  }

  const handleDeleteReplyBtn = () => {
    const newReply = {
      ...review,
      reply: null
    }
    dispatch(updateReviewThunk(newReply));
    setReplyContent("");
  }

  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <Link to={profileUrl}>{review.user.username}</Link>
          </div>
          <div className="col-1 ms-auto">
            {(currentUser?._id === review.user._id) &&
                <i className="bi bi-x-lg float-end"
                   onClick={() => dispatch(deleteReviewThunk(review._id))}
                ></i>
            }
          </div>
        </div>
        {!isEdit &&
            <div className="row">
              <div className="col-8 col-md-9 col-lg-10">
                  <p>{review.content}</p>
              </div>
              <div className="col-4 col-md-3 col-lg-2 ms-auto">
                {(currentUser?._id === review.user._id) &&
                    <button className="btn btn-primary float-end"
                            onClick={handleEditBtn}>edit review
                    </button>
                }

                {(currentUser?.role === UserRoles.MANAGER) && (currentUser?._id
                        === placeinfo?.manager._id)
                    && !review.reply
                    && !isReply &&
                    <button className="btn btn-primary float-end"
                            onClick={handleReplyBtn}>
                      reply
                    </button>
                }

              </div>
            </div>
        }

        {isEdit &&
            <div className="mt-3">
                <textarea className="form-control"
                          style={{overflow: "hidden"}}
                          value={content}
                          onChange={(event) => setReviewContent(
                              event.target.value)}/>
              <div className="mt-3">
                <button onClick={cancelEditBtn} type="button"
                        className="btn btn-secondary float-end">Cancel
                </button>
                <button onClick={saveEditBtn} type="button"
                        className="btn btn-primary float-end me-3">Save
                </button>
              </div>
            </div>
        }

        {!!review.reply &&
            <div className="row">
              <div className="col-10">
                <div className="mt-2">Reply from manager:</div>
                {!isReply && <div
                    className="ms-4">{review.reply?.content}</div>}
              </div>
              <div className="col-2 ms-auto">
                {(currentUser?._id === placeinfo?.manager._id) && !isReply &&
                    <button className="btn btn-primary float-end"
                            onClick={handleReplyBtn}>
                      edit reply
                    </button>
                }
                {(currentUser?._id === placeinfo?.manager._id) && !isReply &&
                    <button className="btn btn-primary float-end mt-2"
                            onClick={handleDeleteReplyBtn}>
                      delete reply
                    </button>
                }
              </div>
            </div>
        }

        {isReply &&
            <div className="mt-3">
              <textarea className="form-control"
                        placeholder="Reply to the review..."
                        style={{overflow: "hidden"}}
                        value={replyContent}
                        onChange={(event) => setReplyContent(
                            event.target.value)}/>
              <div className="mt-3">
                <button onClick={cancelReplyBtn} type="button"
                        className="btn btn-secondary float-end">Cancel
                </button>
                <button onClick={saveReplyBtn} type="button"
                        className="btn btn-primary float-end me-3">Save
                </button>
              </div>
            </div>
        }

      </li>
  );

}
export default PlaceReviewsList;