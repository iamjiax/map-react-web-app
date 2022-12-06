import {useSelector} from "react-redux";

const BasicInfoComponent = ({user}) => {
  // const {currentUser} = useSelector((state) => state.userReducer)
  return (
      <div className="">
          <div className="m-4">
            <form className="needs-validation">
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="userInfo">First Name</label>
                  <div className="form-control mb-2">{user?.firstname}</div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="userInfo">Last Name</label>
                  <div className="form-control mb-2">{user?.lastname}</div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="userInfo">Email</label>
                  <div className="form-control mb-2">{user?.email}</div>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="userInfo">Bio</label>
                  <div className="form-control mb-2">{user?.bio}</div>
                </div>
              </div>
            </form>
          </div>
      </div>
  );
}
export default BasicInfoComponent;