import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findPlaceByXidThunk} from "../../services/places-thunks";
import parse from 'html-react-parser';
import {extractUrl, formatKinds} from "../../util/format";
import LikeIcon from "./like-icon";
import {findPlaceLikesCountThunk} from "../../services/likes-thunk";
import {createReviewThunk} from "../../services/reviews-thunk";
import {
  createPlaceinfoThunk,
  findPlaceinfoByPlaceThunk
} from "../../services/placeinfo-thunk";
import PlaceReviewsList from "./place-reviews-list";
import './details.css';
import {UserRoles} from "../../util/user-roles";
import Navigation from "../navigation";

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
  const handleManagePlaceBtn = () => {
    const newPlaceinfo = {
      manager: {_id: currentUser._id, username: currentUser.username},
      place: {xid: placeDetail.xid, name: placeDetail.name},
    }
    dispatch(createPlaceinfoThunk(newPlaceinfo));
  }

  useEffect(() => {
    dispatch(findPlaceByXidThunk(xid));
    dispatch(findPlaceLikesCountThunk(xid))
    dispatch(findPlaceinfoByPlaceThunk(xid));
  }, [xid]);

  return (
      detailLoaded && (
          <div className={"container1"}>
            <div className="box1 align-content-center">
              <div className="col-9 text-sec ">
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
                <div className="heading col-3 d-flex align-items-center">
                  <div className="">
                    <h3>{placeDetail.name}</h3>
                  </div>

                  <div className="likes col-2 d-flex align-items-center">
                    <LikeIcon place={placeDetail}/>
                    <div className="ms-2">{placeLikesCount}</div>
                  </div>
                </div>
                <div className="sub-heading">
                  <p>{formatKinds(placeDetail.kinds)}</p>
                </div>
              </div>
              <br/>

              {((currentUser?.role === UserRoles.MANAGER) && !placeinfo) &&
                  <button className="btn btn-primary ms-5"
                          onClick={handleManagePlaceBtn}>
                    Apply to Manage
                  </button>
              }

              <div className="row contents1">
                <div className="col introduce">
                  {parse(placeDetail.wikipedia_extracts.html)}
                </div>
                <div className="col image">
                  <img src={placeDetail.preview.source}
                       style={{
                         width: "auto", maxWidth: "100%", height: "auto"
                       }}/>
                </div>
              </div>

              <div className="table">
                <div className="element">
                  <div className="stats">
                    <ul className="wikisite">
                      <a href={placeDetail.wikipedia}>Wikipedia</a>
                    </ul>
                  </div>
                </div>

                <div className="element">
                  <div className="stats">
                    <ul className="website">
                      {placeDetail.url && <a
                          href={extractUrl(placeDetail.url)}>Website</a>}
                    </ul>
                  </div>
                </div>

              </div>

              {placeinfo &&
                  <div>
                    <h3>Information from manager</h3>
                    {placeinfo.notification}
                  </div>
              }

              <div className="row2">
                {(currentUser?.role === UserRoles.VISITOR) &&
                    <div className="col-10">
                      <small>Leave a review</small>
                      <textarea className="form-control border-0"
                                onChange={(e) => setReviewContent(
                                    e.target.value)}
                                value={reviewContent}
                                placeholder="Highlight your experience" style={{
                        width: "850px", overflow: "visible"
                      }}
                      ></textarea>
                      <div className="button1">
                        <button
                            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={handlePostReviewBtn}>Post Review
                        </button>
                        <div className="text-primary fs-2">
                          <i className="bi bi-card-image me-3"></i>
                          <i className="bi bi-filetype-gif me-3"></i>
                          <i className="bi bi-emoji-smile me-3"></i>
                          <i className="bi bi-geo-alt"></i>
                        </div>
                      </div>

                    </div>
                }
                <div className="col-12">
                  <hr/>
                </div>

                <PlaceReviewsList/>
              </div>
            </div>
          </div>
      )
  );
}

export default DetailsPage;