import { useSelector } from "react-redux";
import UserLikesComponent from "./user-likes-component";
import {UserRoles} from "../../util/user-roles";
import UserReviewsComponent from "./user-reviews-component";
import UserList from "./all-user-component";
import {Link, useNavigate} from "react-router-dom";
import PrivateProfileComponent from "./private-profile-component";

const ProfilePage = () => {
  const navigate = useNavigate()
  // const userInfo = useSelector(state => state.userReducer.currentUser);
  const {currentUser} = useSelector((state) => state.userReducer)

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
              <img className="img-fluid w-100" style={{"width":"800px", "height":"200px"}} src={require(`./image/mapBanner.jpeg`)} alt="banner"/>
              {/*<img style={{"width":"800px", "height":"200px"}} src={require(`src/components/profile/image/mapBanner.jpeg`)} alt="banner"/>*/}

              <div className="position-absolute top-100 translate-middle-y d-flex justify-content-between px-4" >
                <img className="rounded-circle text-secondary border-5" style={{ "width": "130px", "height": "130", marginTop: "180px"}} src={require(`./image/admin.png`)} alt="profile" />

                <Link to="/profile/edit-profile" className="btn border-secondary rounded-pill align-self-end fw-bolder">Edit Profile</Link>
              </div>
            </div>

            <div style={{ marginTop: "180px" }}></div>

            <PrivateProfileComponent user={currentUser}/>
            <UserLikesComponent/>
            <UserReviewsComponent/>
              {/* determinate different user roles */}
              {
                currentUser.role === UserRoles.MANAGER ? <div>display manage place</div> : <></>
                //manage place info  ex: edit time 9:00am - 5:00pm  ex: edit info
                //able to reply reviews => on details page
              }
              {
                currentUser.role === UserRoles.ADMIN ? <div><UserList/></div> : <></>
                //list of all users
                //able to edit and delete
              }
              {
                currentUser.role === UserRoles.VISITOR ? <div><h3>display list of reviews</h3></div> : <></>
                //reviews
              }
          </div>
        </div>

        <div className="d-sm-none d-md-none d-lg-block col-lg-4">
          <h2> </h2>
        </div>
      </div>
  );
}
export default ProfilePage;