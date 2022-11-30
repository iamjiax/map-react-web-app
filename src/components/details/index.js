import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {findPlaceByXidThunk} from "../../services/places-thunks";
import parse from 'html-react-parser';
import {extractUrl, formatKinds} from "../../util/format";

function DetailsPage() {
  const {placeDetail, detailLoaded} = useSelector(
      state => state.placeDetailReducer);
  const dispatch = useDispatch();
  const {xid} = useParams();
  useEffect(() => {
    console.log("calling details api...")
    dispatch(findPlaceByXidThunk(xid))
  }, [xid]);
  return (
      detailLoaded && (
          <div className={"container"}>
            <div className="row">
              <h1>{placeDetail.name}</h1>
              <h5>{formatKinds(placeDetail.kinds)}</h5>
              <div className="text-center">
                <img src={placeDetail.preview.source}
                     style={{width: "auto", maxWidth: "100%", height: "auto"}}/>
              </div>
              <div>
                {parse(placeDetail.wikipedia_extracts.html)}
              </div>
              <a href={placeDetail.wikipedia}>Wikipedia</a>
              <div>
                {placeDetail.url && <a
                    href={extractUrl(placeDetail.url)}>Website</a>}
              </div>
            </div>
            <div>
              <h5>Place Information from manager</h5>
            </div>
            <div>
              <h5>Reviews from local service</h5>
            </div>
            <div>
              <h5>Add Review</h5>
            </div>
          </div>
      )
  );
}

export default DetailsPage;