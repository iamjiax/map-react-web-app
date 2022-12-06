import {useSelector} from "react-redux";

const PrivateProfileComponent = ({user}) => {
  const {currentUser} = useSelector((state) => state.userReducer)
  return (
      <div className="">
          <div className="m-4">
            <form className="needs-validation">
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="userInfo">User Name</label>
                  <div className="form-control mb-2">{currentUser?.username}</div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="userInfo">First Name</label>
                  <div className="form-control mb-2">{currentUser?.firstname}</div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="userInfo">Last Name</label>
                  <div className="form-control mb-2">{currentUser?.lastname}</div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="userInfo">Email</label>
                  <div className="form-control mb-2">{currentUser?.email}</div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="userInfo">Location</label>
                  <div className="form-control mb-2">{currentUser?.location}</div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="userInfo">Date of Birth</label>
                  <div className="form-control mb-2">{currentUser?.dateOfBirth}</div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="userInfo">Bio</label>
                  <div className="form-control mb-2">{currentUser?.bio}</div>
                </div>
              </div>
            </form>
          </div>
      </div>
  );
}
export default PrivateProfileComponent;