import React from "react";
import EditProfile from "./edit-profile.js";


const EditProfileComponent = () => {
  return (

      <div className="row mt-3 mb-3">
          <div style={{ marginTop: "60px" }}></div>
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <h5></h5>
        </div>
        <div className="col-sm-10 col-md-10 col-lg-7 col-xl-6">
          <EditProfile/>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <h4></h4>
        </div>
      </div>
  )
}

export default EditProfileComponent;