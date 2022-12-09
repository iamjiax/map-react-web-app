import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useMap} from "react-leaflet";
import {logoutThunk} from "../../services/user-thunks";
import {findLastNReviewsByUserThunk} from "../../services/reviews-thunk";
import {UserRoles} from "../../util/user-roles";

const AccountComponent = () => {
  const {currentUser} = useSelector(state => state.userReducer);
  const [displayProfile, setDisplayProfile] = useState(false);
  const map = useMap();
  const {reviews} = useSelector(state => state.reviewsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      dispatch(findLastNReviewsByUserThunk({uid: currentUser._id, limit: 1}))
    }
  }, [currentUser]);

  const handleLogoutBtn = () => {
    dispatch(logoutThunk())
  }
  return (
      <div className="leaflet-control leaflet-top leaflet-right"
           onMouseOver={() => {
             map._handlers.forEach(handler => handler.disable())
           }}
           onMouseOut={() => {
             map._handlers.forEach(handler => handler.enable())
           }}>
        {/****Login Button****/}
        {!currentUser &&
            <Link to="login"
                  className="leaflet-bar leaflet-control btn btn-primary">
              <span className="text-white fw-bold">Login</span>
            </Link>
        }
        {/****Welcome Button****/}
        {currentUser &&
            <div
                className="leaflet-bar leaflet-control btn btn-success"
                onClick={() => setDisplayProfile(!displayProfile)}
            >
              {`Welcome, ${currentUser.username}`}
            </div>}
        {/****Profile****/}
        {currentUser &&
            <div
                className={`leaflet-control ${displayProfile ? "" : "d-none"}`}>
              <div className="card overflow-scroll mt-3 me-5"
                   style={{width: "24rem", maxHeight: "70vh"}}>
                <div className="card-header">
                  <h6 className="mb-0">{currentUser.username} ({currentUser.email})</h6>
                </div>

                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <font className="card-text" face="Georgia" size="4"
                        color="#1e90ff">{currentUser.firstname}</font>
                  <p className="card-text">{currentUser.location}</p>
                  <small className="card-text">{currentUser.bio}</small>

                </div>
                <ul className="list-group list-group-flush">
                  <Link to="/profile" className={`list-group-item d-flex`}>
                    <i className="bi bi-person pe-2"></i><span>Profile</span>
                  </Link>
                  <Link to="/profile" className={`list-group-item d-flex
                            `}>
                    <i className="bi bi-heart-fill pe-2"></i><span>Likes</span>
                  </Link>
                  {currentUser?.role === UserRoles.VISITOR &&
                    <div className="list-group-item">
                      <Link to="/profile" className="text-decoration-none">
                        <i className="bi bi-chat-square-text pe-2"></i><span>Reviews</span>
                      </Link>
                      {reviews[0] &&
                          <div className="row ms-3">
                            <Link to={`/details/${reviews[0].place.xid}`}>{
                              reviews[0].place.name}
                            </Link>
                            <span>{reviews[0]?.content}</span>
                          </div>}
                    </div>
                  }
                </ul>
                <div className="card-body">
                  <Link to="/profile/edit-profile"
                        className="btn btn-primary text-white">
                    Manage your Account
                  </Link>
                  <button
                      onClick={handleLogoutBtn}
                      className="btn btn-primary ms-5">
                    Logout
                  </button>
                </div>
              </div>
            </div>}
      </div>
  );
}

export default AccountComponent;