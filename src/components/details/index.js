import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findPlaceByXidThunk} from "../../services/places-thunks";
import parse from 'html-react-parser';
import {extractUrl, formatKinds} from "../../util/format";
import LikeIcon from "./like-icon";
import {findPlaceLikesCountThunk} from "../../services/likes-thunk";
import {createReviewThunk} from "../../services/reviews-thunk";

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
      user: currentUser._id,
      place: xid,
      content: reviewContent
    }
    dispatch(createReviewThunk(newReview));
  };

  useEffect(() => {
    dispatch(findPlaceByXidThunk(xid));
    dispatch(findPlaceLikesCountThunk(xid))
  }, [xid]);

  return (
      detailLoaded && (
          <div className={"container"}>
            <div className="row mt-2">
              <div className="col-auto">
                <h3>{placeDetail.name}</h3>
              </div>
              <div className="col-2 d-flex align-items-center">
                <LikeIcon xid={xid}/>
                <div className="ms-2">{placeLikesCount}</div>
              </div>
            </div>
            <p>{formatKinds(placeDetail.kinds)}</p>

            <div className="row">
              <div className="col">
                {parse(placeDetail.wikipedia_extracts.html)}
              </div>
              <div className="col">
                <img src={placeDetail.preview.source}
                     style={{
                       width: "auto", maxWidth: "100%", height: "auto"
                     }}/>
              </div>
            </div>


            <a href={placeDetail.wikipedia}>Wikipedia</a>
            <div>
              {placeDetail.url && <a
                  href={extractUrl(placeDetail.url)}>Website</a>}
            </div>

            <div>
              <h5>Place Information from manager</h5>
            </div>
            <div>
              <h5>Reviews from local service</h5>
            </div>
            {currentUser &&
                <div>
              <textarea className="form-control"
                        onChange={(e) => setReviewContent(e.target.value)}
              ></textarea>
                  <button onClick={handlePostReviewBtn}>Post Review</button>
                </div>}
          </div>
      )
  );
}

export default DetailsPage;