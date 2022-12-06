import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateUserThunk} from "../../../services/user-thunks";

const EditProfile = () => {
  const initialProfile = useSelector(state => state.userReducer.currentUser);
  const [curProfile, setCurProfile] = useState(initialProfile)
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const dispatch = useDispatch()
  const updateUserHandler = () => {
    console.log(curProfile)
    dispatch(updateUserThunk(curProfile));
  }

  return (
      <li className="list-group-item border">
        <div>
          <div className="row d-flex align-items-center">
            <div className="col-8 d-flex align-items-center ms-2">
              <Link to="/profile"><i className="bi bi-x text-black"></i></Link>
              <h5 className="m-3" >Edit profile</h5>
            </div>
            <div className="col-2 ms-auto">
              <Link to="/profile" className="btn rounded-pill btn-dark align-self-end" onClick={updateUserHandler}>Save</Link>
            </div>
          </div>
        </div>

        <div className="row mt-2 position-relative">
          <img className="img-fluid w-100" src={require(`../image/mapBanner.jpeg`)} style={{"width":"800px", "height":"200px"}} alt=""/>
          {/*<img style={{"width":"800px", "height":"200px"}} src={profile?.bannerPicture} alt=""/>*/}

          <div className="position-absolute top-100 translate-middle-y d-flex justify-content-between px-4" >
            <img className="rounded-circle border-secondary border-5" width="134px" height="134px" src={require(`../image/admin.png`)} alt=""/>
          </div>
        </div>

        <div style={{marginTop: "80px"}}></div>
        <div className="mb-2 px-2">
          <div className="form-control form-group rounded-2">
            <label className="ms-3 text-secondary" htmlFor="edit-profile-firstName">First Name</label>
            <input className="form-control border-0" id="edit-profile-firstName" type="text"
                   value={curProfile.firstname}
                   onChange={(event) => setCurProfile({...curProfile, firstname: event.target.value})}
                   placeholder="FirstName"/>
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="form-control form-group rounded-2">
            <label className="ms-3 text-secondary" htmlFor="edit-profile-lastName">Last Name</label>
            <input className="form-control border-0" id="edit-profile-lastName" type="text"
                   value={curProfile.lastname}
                   onChange={(event) => setCurProfile({...curProfile, lastname: event.target.value})}
                   placeholder="LastName"/>
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="form-control form-group rounded-2">
            <label className="ms-3 text-secondary" htmlFor="edit-profile-email">Email</label>
            <input className="form-control border-0"
                   id="edit-profile-email" type="text"
                   value={curProfile.email}
                   onChange={(event) => setCurProfile({...curProfile, email: event.target.value})}
                   placeholder="Email"/>
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="form-control form-group rounded-2">
            <label className="ms-3 text-secondary border-0"
                   htmlFor="edit-profile-location">Location</label>
            <input className="form-control border-0"
                   id="edit-profile-location" type="text"
                   value={curProfile.location}
                   onChange={(event) => setCurProfile({...curProfile, location: event.target.value})}
                   placeholder="City, State"/>
          </div>
        </div>

        <div className="mt-4 px-2">
          <div className="form-control form-group rounded-2">
            <label className="ms-3 text-secondary border-0"
                   htmlFor="edit-profile-dateOfBirth">Date of Birth</label>
            <input className="form-control border-0"
                   id="edit-profile-dateOfBirth" type="text"
                value={curProfile.dateOfBirth}
                   onChange={(event) => setCurProfile({...curProfile, dateOfBirth: event.target.value})}
                   placeholder="mm/dd/yyyy"/>
          </div>
        </div>

        <div className="mt-4 mb-4 px-2">
          <div className="form-control form-group rounded-2">
            <label className="ms-3 text-secondary border-0"
                   htmlFor="edit-profile-bio">Bio</label>
            <input className="form-control border-0"
                   id="edit-profile-bio" type="text"
                   value={curProfile.bio ? curProfile.bio : ""}
                   onChange={(event)=> setCurProfile({...curProfile, bio: event.target.value})}
                   placeholder="Bio"/>
          </div>
        </div>
      </li>
  )
}

export default EditProfile;