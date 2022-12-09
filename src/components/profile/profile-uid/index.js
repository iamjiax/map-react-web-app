import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import UserLikesComponent from "../user-likes-component";
import UserReviewsComponent from "../user-reviews-component";
import {useEffect} from "react";
import {findUserByIdThunk} from "../../../services/user-thunks";
import PublicProfileComponent from "../public-profile-component";

const ProfileWithId = () => {
  // const userInfo = useSelector(state => state.userReducer.currentUser);
  const navigate = useNavigate()
  const {currentUser, publicProfile} = useSelector((state) => state.userReducer)
  const dispatch = useDispatch();
  const {uid} = useParams();

  useEffect(() => {
    dispatch(findUserByIdThunk(uid));
  }, [uid]);

  return (
      <div className="container" style={{paddingTop: "50px"}}>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-10 col-xl-9">
            <div className="border border-1">
              <div className="row mt-2">
                <div className="col-4 d-flex align-items-center ms-2">
                  <button className="btn fw-bolder"
                          onClick={() => navigate(-1)}><i
                      className="bi bi-arrow-left me-2"></i> go back
                  </button>
                </div>
              </div>
              <div className="row position-relative">
                <img className="img-fluid w-100"
                     style={{"width": "800px", "height": "200px"}}
                     src={require(`../image/mapBannerWithoutLogin.png`)}
                     alt="banner"/>

                <div
                    className="position-absolute top-100 translate-middle-y d-flex justify-content-between px-4">
                  <img className="rounded-circle text-secondary border-5"
                       style={{
                         "width": "130px",
                         "height": "130",
                         marginTop: "180px"
                       }} src={require(`../image/mapPicWithoutLogin.jpeg`)}
                       alt="profile"/>
                </div>
              </div>

              <div style={{marginTop: "180px"}}></div>

              <PublicProfileComponent user={publicProfile}/>
              <UserLikesComponent user={publicProfile}/>
              <UserReviewsComponent user={publicProfile}/>
            </div>
          </div>
        </div>
      </div>
  );
}
export default ProfileWithId;