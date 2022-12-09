import {useSelector} from "react-redux";
import UserLikesComponent from "./user-likes-component";
import {UserRoles} from "../../util/user-roles";
import UserReviewsComponent from "./user-reviews-component";
import UserList from "./all-user-component";
import {Link, useNavigate} from "react-router-dom";
import PrivateProfileComponent from "./private-profile-component";
import ManagerPlaceinfoComponent from "./manager-placeinfo-component";

const ProfilePage = () => {
  const {currentUser} = useSelector((state) => state.userReducer)
  const navigate = useNavigate();
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
                     src={require(`./image/mapBanner.jpeg`)} alt="banner"/>

                <div className="position-absolute top-100 translate-middle-y d-flex justify-content-between px-4">
                  <img className="rounded-circle text-secondary border-5"
                       style={{
                         "width": "130px",
                         "height": "130",
                         marginTop: "180px"
                       }} src={require(`./image/admin.png`)} alt="profile"/>

                  <Link to="/profile/edit-profile"
                        className="btn border-secondary rounded-pill align-self-end fw-bolder">Edit
                    Profile</Link>
                </div>
              </div>

              <div style={{marginTop: "180px"}}></div>

              <PrivateProfileComponent user={currentUser}/>
              <UserLikesComponent user={currentUser}/>
              {
                currentUser.role === UserRoles.MANAGER ? <div>
                  <ManagerPlaceinfoComponent user={currentUser}/></div> : <></>
              }
              {
                currentUser.role === UserRoles.ADMIN ? <div><UserList/></div> : <></>
              }
              {
                currentUser.role === UserRoles.VISITOR ? <div>
                  <UserReviewsComponent user={currentUser}/></div> : <></>
              }
            </div>
          </div>
        </div>
      </div>
  );
}
export default ProfilePage;