import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {findPlaceByXidThunk} from "../../services/places-thunks";
import parse from 'html-react-parser';
import {extractUrl, formatKinds} from "../../util/format";
import LikeIcon from "./like-icon";
import {findPlaceLikesCountThunk} from "../../services/likes-thunk";
import {createReviewThunk} from "../../services/reviews-thunk";
import {
  createPlaceinfoThunk,
  findPlaceinfoByPlaceThunk,
  updatePlaceinfoThunk
} from "../../services/placeinfo-thunk";
import PlaceReviewsList from "./place-reviews-list";
import './details.css';
import {UserRoles} from "../../util/user-roles";

function DetailsPage() {
  const {currentUser} = useSelector(state => state.userReducer);
  const {placeLikesCount} = useSelector(state => state.likesReducer);
  const {placeDetail, detailLoaded} = useSelector(
      state => state.placeDetailReducer);
  const dispatch = useDispatch();
  const {xid} = useParams();

  const [reviewContent, setReviewContent] = useState("");
  const handlePostReviewBtn = () => {
    const newReview = {
      user: {_id: currentUser._id, username: currentUser.username},
      place: {xid: placeDetail.xid, name: placeDetail.name},
      content: reviewContent
    }
    dispatch(createReviewThunk(newReview));
    setReviewContent("");
  };

  const {placeinfo} = useSelector(state => state.placeinfoReducer);
  const [notification, setNotification] = useState("")
  const handleManagePlaceBtn = () => {
    const newPlaceinfo = {
      manager: {_id: currentUser._id, username: currentUser.username},
      place: {xid: placeDetail.xid, name: placeDetail.name},
    }
    dispatch(createPlaceinfoThunk(newPlaceinfo));
  }

  useEffect(() => {
    dispatch(findPlaceByXidThunk(xid));
    dispatch(findPlaceLikesCountThunk(xid));
    dispatch(findPlaceinfoByPlaceThunk(xid));
  }, [xid]);

  const updatePlaceInfoHandler = () => {
    dispatch(updatePlaceinfoThunk({...placeinfo, notification: notification}));
    setNotification("");
  }

  return (
      detailLoaded && (
          <div className="container" style={{paddingTop: "70px"}}>

            <div className="row">
              <div className="col-auto">
                <div className="avatar position-relative">
                  <img className=" rounded-circle"
                       style={{
                         "height": "100%",
                         "width": "100%",
                         "left": "50%",
                         "bottom": "50%"
                       }}
                       src={placeDetail.preview.source} alt="..."/>
                </div>
              </div>

              <div className="col-6 d-flex align-items-center">
                <div>
                  <div className="row">
                    <div className="heading col-auto d-flex align-items-center">
                      <h3>{placeDetail.name}</h3>
                    </div>
                    <div className="likes col-auto d-flex align-items-center">
                      <LikeIcon place={placeDetail}/>
                      <div className="ms-2">{placeLikesCount}</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="font-times-new-roman">
                      {formatKinds(placeDetail.kinds)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ms-auto d-flex align-items-center">
                {((currentUser?.role === UserRoles.MANAGER) && !placeinfo) &&
                    <button className="btn btn-primary ms-auto"
                            onClick={handleManagePlaceBtn}>
                      Apply to Manage
                    </button>
                }
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-6 ps-4">
                <div className="row font-times-new-roman">
                  {parse(placeDetail.wikipedia_extracts.html)}
                </div>
                <div className="row mt-2">
                  <div className="col-auto">
                    {placeDetail.wikipedia &&
                        <a href={placeDetail.wikipedia}>
                          <i className="bi bi-wikipedia fw-bold fs-4"></i>
                        </a>
                    }
                  </div>
                  <div className="col-auto">
                    {placeDetail.url &&
                        <a href={extractUrl(placeDetail.url)}>
                          <i className="bi bi-browser-chrome fw-bold fs-4"></i>
                        </a>
                    }
                  </div>
                </div>
              </div>
              <div
                  className="col-5 ms-auto d-flex align-items-center justify-content-center">
                <img className="rounded"
                     src={placeDetail.preview.source}
                     style={{
                       width: "auto", maxWidth: "100%", height: "auto"
                     }}/>
              </div>
            </div>

            {placeinfo?.notification &&
                <div>
                  <div className="row mt-5 mb-3">
                    <div className="col">
                      <hr className="border border-2 opacity-50"/>
                    </div>
                    <h5 className="col-auto">Information from manager</h5>
                    <div className="col">
                      <hr className="border border-2 opacity-50"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="ms-4">
                      {placeinfo?.notification}
                    </div>
                  </div>
                </div>
            }

            {(currentUser?.role === UserRoles.MANAGER) &&
                (currentUser?._id === placeinfo?.manager._id) &&
                <div className="row mt-3">
                  <div className="col-11 ms-4 mt-3">
                    <textarea className="form-control"
                              id="edit-notification"
                              type="text"
                              value={notification}
                              onChange={(event) => {
                                setNotification(event.target.value)
                              }}
                              placeholder="Input Notification here...">
                    </textarea>
                    <button
                        className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={updatePlaceInfoHandler}>Publish
                    </button>
                  </div>
                </div>
            }

            <div className="row mt-5 mb-3">
              <div className="col">
                <hr className="border border-2 opacity-50"/>
              </div>
              <h5 className="col-auto">Reviews</h5>
              <div className="col">
                <hr className="border border-2 opacity-50"/>
              </div>
            </div>

            <div className="row px-3">
              {(currentUser?.role === UserRoles.VISITOR) &&
                  <div className="ps-0">
                    {/*<small>Leave a review</small>*/}
                    <textarea className="form-control"
                              onChange={(e) => setReviewContent(
                                  e.target.value)}
                              value={reviewContent}
                              placeholder="Highlight your experience..."
                              style={{overflow: "visible"}}
                    ></textarea>
                    <div className="row mt-2 mb-5">
                      <div className="col-auto text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <div className="col-auto ms-auto">
                        <button
                            className="rounded-pill btn btn-primary float-end fw-bold"
                            onClick={handlePostReviewBtn}>Post Review
                        </button>
                      </div>
                    </div>

                  </div>
              }

              <PlaceReviewsList/>
            </div>
            <div className="mb-5"></div>
          </div>
      )
  );
}

export default DetailsPage;