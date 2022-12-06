import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import BasicInfoComponent from "../basic-info-component";
import UserLikesComponent from "../user-likes-component";
import UserReviewsComponent from "../user-reviews-component";
import {UserRoles} from "../../../util/user-roles";
import UserList from "../all-user-component";
import {useEffect} from "react";
import {findUserByIdThunk} from "../../../services/user-thunks";

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
      <div className="row">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <h5> </h5>
        </div>

        <div className="col-sm-10 col-md-10 col-lg-7 col-xl-6">
          <div className="border border-1">
            <div className="row mt-2">
              <div className="col-2 d-flex align-items-center justify-content-center ms-2">
                {/*<div className="text-black"><i className="bi bi-arrow-left"></i></div>*/}
                <button className="btn fw-bolder" onClick={() => navigate(-1)}><i className="bi bi-arrow-left"></i> go back</button>
              </div>
              {/*<div className="col-10">*/}
              {/*  /!*<div className="row text-black fs5">go back</div>*!/*/}
              {/*</div>*/}
            </div>

            <div className="row position-relative mt-2">
              <img className="img-fluid" style={{"width":"1000px", "height":"200px"}} src={require(`../image/mapBannerWithoutLogin.png`)} alt="banner"/>
              {/*<img style={{"width":"800px", "height":"200px"}} src={require(`src/components/profile/image/mapBanner.jpeg`)} alt="banner"/>*/}

              <div className="position-absolute top-100 translate-middle-y d-flex justify-content-between px-4" >
                <img className="rounded-circle text-secondary border-5" style={{ "width": "130px", "height": "130", marginTop: "180px"}} src={require(`../image/mapPicWithoutLogin.jpeg`)} alt="profile" />
              </div>
            </div>

            <div style={{ marginTop: "180px" }}></div>

            <BasicInfoComponent user={publicProfile}/>
            <UserLikesComponent/>
            <UserReviewsComponent/>
            {/* determinate different user roles */}
          </div>
        </div>

        <div className="d-sm-none d-md-none d-lg-block col-lg-4">
          <h2> </h2>
        </div>
      </div>
  );
}
export default ProfileWithId;