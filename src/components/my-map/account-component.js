import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useMap} from "react-leaflet";
import {logoutThunk} from "../../services/user-thunks";

const AccountComponent = () => {
  const {currentUser} = useSelector(state => state.userReducer);
  const [displayProfile, setDisplayProfile] = useState(false);
  const map = useMap();

  const dispatch = useDispatch();

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
                  <h5 className="card-title">Profile Content</h5>
                  <p className="card-text">With supporting text below as a
                    natural lead-in to additional content.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <div className="card-body">
                  <Link to="profile" className="btn btn-primary text-white">
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