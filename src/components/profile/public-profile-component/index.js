import {useSelector} from "react-redux";
import {UserRoles} from "../../../util/user-roles";

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

            {user?.role === UserRoles.VISITOR &&
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="userInfo">Location</label>
                  <div className="form-control mb-2">{user?.location}</div>
                </div>
              </div>
            }
            {user?.role !== UserRoles.ADMIN &&
                <div className="form-row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="userInfo">Bio</label>
                    <div className="form-control mb-2">{user?.bio}</div>
                  </div>
                </div>
            }
          </form>
        </div>
      </div>
  );
}
export default PublicProfileComponent;