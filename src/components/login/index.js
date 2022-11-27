import Login from "./login";
import Register from "./register";
import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

function LoginPage() {
    const {currentUser} = useSelector(state => state.userReducer);

    const location = useLocation();

    if(currentUser){
        return (<Navigate to={'/'}/>)
    }

    if(location.pathname === "/login") {
        return (
            <Login/>
        );
    } else  if(location.pathname === "/register") {
        return (
            <Register/>
        );
    }
}

export default LoginPage;