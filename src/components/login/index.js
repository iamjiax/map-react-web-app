import Login from "./login";
import Register from "./register";

import { useLocation } from 'react-router-dom'

function LoginPage() {
    const location = useLocation();
    //if(location.pathname ===)
    console.log(location.pathname);

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