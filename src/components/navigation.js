import {useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  const {currentUser} = useSelector((state) => state.userReducer);
  const {pathname} = useLocation()
  const parts = pathname.split('/')
  console.log(parts)
  const navPages = ["details", "login", "register", "profile"];
  const displayNav = navPages.includes(parts[1])
  return displayNav && (
      <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top">
          <div className="container ">
                <ul className="nav nav-pills ">
                    <li className="nav-item">
                         <Link to="/"
                            className={`nav-link ${parts[1] === ''?'active': ''}`}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search"
                            className={`nav-link ${parts[1] === 'search'?'active': ''}`}>
                            Search
                        </Link>
                    </li>
                    <li className={`nav-item ${currentUser ? 'd-none':''}`}>
                        <Link to="/login"
                            className={`nav-link ${parts[1] === 'login'?'active': ''}`}>
                            Login
                        </Link>
                    </li>
                    <li className={`nav-item ${currentUser ? 'd-none':''}`}>
                        <Link to="/register"
                            className={`nav-link ${parts[1] === 'register'?'active': ''}`}>
                            Register
                        </Link>
                    </li>
                    <li className={`nav-item ${!currentUser ? 'd-none':''}`}>
                        <Link to="/profile"
                            className={`nav-link ${parts[1] === 'profile'?'active': ''}`}>
                        Profile
                        </Link>
                    </li>
                </ul>
          </div>
      </nav>
  )
}

export default Navigation;