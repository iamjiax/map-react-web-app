import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {logoutThunk} from "../services/user-thunks";
import {findLikeThunk} from "../services/likes-thunk";

const Navigation = () => {
  const {currentUser} = useSelector((state) => state.userReducer);
  const {pathname} = useLocation()
  const parts = pathname.split('/')
  const navPages = ["details", "login", "register", "profile"];
  const displayNav = navPages.includes(parts[1])
  const dispatch = useDispatch();
  const handleLogoutBtn = () => {
    dispatch(logoutThunk());
    dispatch(findLikeThunk({uid: null, xid: null}))
  }
  return displayNav && (
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to="/"
                className={`nav-link ${parts[1] === '' ? 'active' : ''}`}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/search"
                className={`nav-link ${parts[1] === 'search' ? 'active' : ''}`}>
            Search
          </Link>
        </li>
        <li className={`nav-item ${currentUser ? 'd-none' : ''}`}>
          <Link to="/login"
                className={`nav-link ${parts[1] === 'login' ? 'active' : ''}`}>
            Login
          </Link>
        </li>
        <li className={`nav-item ${currentUser ? 'd-none' : ''}`}>
          <Link to="/register"
                className={`nav-link ${parts[1] === 'register' ? 'active'
                    : ''}`}>
            Register
          </Link>
        </li>
        <li className={`nav-item ${!currentUser ? 'd-none' : ''}`}>
          <Link to="/profile"
                className={`nav-link ${parts[1] === 'profile' ? 'active'
                    : ''}`}>
            Profile
          </Link>
        </li>
        <li className={`nav-item ${!currentUser ? 'd-none' : ''}`}>
          <span className="nav-link"
                onClick={handleLogoutBtn}
                style={{cursor: "pointer"}}>
            Sign out
          </span>
        </li>
        {!!currentUser &&
            <span className="nav-link text-black fw-bold ms-5">
              Welcome, {currentUser.firstname}
            </span>
        }
      </ul>
  )
}

export default Navigation;