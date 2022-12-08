import React from "react";
import EditProfile from "./edit-profile.js";

const EditProfileComponent = () => {
  return (
      <div className="container" style={{paddingTop: "50px"}}>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-11 col-lg-9 col-xl-8">
            <EditProfile/>
          </div>
        </div>
      </div>
  )
}

export default EditProfileComponent;