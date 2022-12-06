import {useSelector} from "react-redux";

const PublicProfileComponent = ({user}) => {
  // const {currentUser} = useSelector((state) => state.userReducer)
  return (
      <div className="">
        <div className="m-4">
          <form className="needs-validation">
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="userInfo">User Name</label>
                <div className="form-control mb-2">{user?.username}</div>
              </div>
            </div>

            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="userInfo">Location</label>
                <div className="form-control mb-2">{user?.location}</div>
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
export default PublicProfileComponent;