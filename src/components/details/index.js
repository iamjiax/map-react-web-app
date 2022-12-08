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
            <div className={"container scaffold-layout_row scaffold-layout_content scaffold-layout_content--main-aside"}>
                <div className="row  align-content-center">
                    <div className="row text-sec avatar ">
                       <div style={{ marginTop: "100px" }}></div>
                        <div className="col-2">
                            <img className="avatar1 rounded-circle"
                                 style={{
                                     width: "50%", maxWidth: "100%", height: "auto"
                                 }}
                                 src={placeDetail.preview.source} alt="..."/>
                        </div>
                        <div className="col">
                            <div className="col heading d-flex align-items-center">
                                <div className="row-cols-1 nameTitle">
                                    <h3>{placeDetail.name}</h3>
                                </div>

                                <div className="likes col-2 d-flex align-items-center">
                                    <LikeIcon place={placeDetail}/>
                                <div className="ms-2">{placeLikesCount}</div>
                            </div>
                        </div>
                            <div className="row sub-heading d-flex align-items-center">
                                <p>{formatKinds(placeDetail.kinds)}</p>
                            </div>
                        </div>
                    </div>

                    {((currentUser?.role === UserRoles.MANAGER) && !placeinfo) &&

                        <button className="btn btn-primary btn-lg"
                                onClick={handleManagePlaceBtn}>
                            Apply to Manage
                        </button>
                    }
                    <div className="row contents align-items-center">
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
                    <div style={{ marginTop: "50px" }}></div>
                    <div className="col heading d-flex align-items-center ">
                        <div className="row">
                            <div className="row-cols-1 ">
                                <ul className="wikisite">
                                    <a href={placeDetail.wikipedia}>
                                        <i className="bi bi-wikipedia"></i>
                                    </a>
                                </ul>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 d-flex align-items-center ">
                                <ul className="website">
                                    {placeDetail.url &&
                                        <a href={extractUrl(placeDetail.url)}>
                                        <i className="bi bi-browser-chrome"></i>
                                        </a>}
                                </ul>
                            </div>
                        </div>

                    </div>

                    {placeinfo &&
                        <div className= "row">
                            <h3>Information from manager</h3>
                            {placeinfo.notification}
                        </div>
                    }

                    <div className="row2">
                        {(currentUser?.role === UserRoles.VISITOR) &&
                            <div className="col col-10">
                                <small>Leave a review</small>
                                <textarea className="form-control "
                                          onChange={(e) => setReviewContent(
                                              e.target.value)}
                                          value={reviewContent}
                                          placeholder="Highlight your experience" style={{
                                    width: "", overflow: "visible",outline:"black"
                                }}
                                ></textarea>
                                <div style={{ marginTop: "20px" }}></div>
                                <div className="row">
                                    <div className="col button1 form-check-inline">
                                        <div className="col text-primary fs-2 form-check-inline">
                                            <i className="bi bi-card-image me-3"></i>
                                            <i className="bi bi-filetype-gif me-3"></i>
                                            <i className="bi bi-emoji-smile me-3"></i>
                                            <i className="bi bi-geo-alt"></i>
                                        </div>
                                        <button
                                            className="rounded-pill btn btn-primary float-md-end mt-2 ps-3 pe-3 fw-bold"
                                            onClick={handlePostReviewBtn}>Post Review
                                        </button>
                                    </div>
                                </div>

                            </div>
                        }
                        <div className="d-sm-none d-md-none d-lg-block col-lg-4">
                            <h2> </h2>
                        </div>
                        <div className="row2 reviewsList">
                            <div className="row  justify-content-center" >
                                <div className="col ">
                                    <PlaceReviewsList/>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        )
    );
}

export default DetailsPage;