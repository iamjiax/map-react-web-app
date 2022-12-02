import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserLikesComponent from "./user-likes-component";

const ProfilePage = () => {
  const userInfo = useSelector(state => state.userReducer.currentUser);
  // console.log(userInfo,'userInfo');
  const [user, setUser] = useState(userInfo)
  // const { profile } = useSelector(state => state);
  // const months = ["January", "February", "March", "April", "May", "June",
  //   "July", "August", "September", "October", "November", "December"];
  // const dob = new Date(user?.dateOfBirth)
  return (
      <div className="row">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <h5> </h5>
        </div>

        <div className="col-sm-10 col-md-10 col-lg-7 col-xl-6">
          <div className="border border-1">
            <div className="row mt-2">
              <div className="col-1 d-flex align-items-center justify-content-center ms-2">
                <Link to="/" className="text-black"><i className="bi bi-arrow-left"></i></Link>
              </div>
              <div className="col-10">
                <div className="row text-black fs5">back</div>
              </div>
            </div>

            <div className="row position-relative mt-2">
              <img className="img-fluid w-100" style={{"width":"800px", "height":"200px"}} src={require(`./image/mapBanner.jpeg`)} alt="banner"/>
              {/*<img style={{"width":"800px", "height":"200px"}} src={require(`src/components/profile/image/mapBanner.jpeg`)} alt="banner"/>*/}

              <div className="position-absolute top-100 translate-middle-y d-flex justify-content-between px-4" >
                <img className="rounded-circle text-secondary border-5" style={{ "width": "130px", "height": "130" }} src={require(`./image/admin.png`)} alt="profile" />

                <Link to="/profile/edit-profile" className="btn border-secondary rounded-pill align-self-end fw-bolder">Edit Profile</Link>
              </div>
            </div>

            <div style={{ marginTop: "70px" }}></div>

            <div className="m-4">
              <form className="needs-validation">
                <div className="form-row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="userInfo">First Name</label>
                    <div className="form-control mb-2">{userInfo?.firstName}</div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="userInfo">Last Name</label>
                    <div className="form-control mb-2">{userInfo?.lastName}</div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="userInfo">Email</label>
                    <div className="form-control mb-2">{userInfo?.email}</div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="userInfo">Bio</label>
                    <div className="form-control mb-2">{userInfo?.bio}</div>
                  </div>
                </div>
                <UserLikesComponent/>
              </form>
              {/* determinate different user roles */}
              {
                user?.role === 'manager：' ? <div>display manage place</div> : <></>
              }
              {
                user?.role === 'admin' ? <div>display list of users</div> : <></>
              }
              {
                user?.role === 'visitor ' ? <div><h5>display list of reviews</h5></div> : <></>
              }
            </div>
          </div>
        </div>

        <div className="d-sm-none d-md-none d-lg-block col-lg-4">
          <h2> </h2>
        </div>
      </div>
  );
}
export default ProfilePage;