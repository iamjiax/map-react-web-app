import {useState} from "react";

import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../services/user-thunks";
import './login.css';

const Login = () => {
    const {userServiceError} = useSelector(state => state.userReducer);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLoginBtn = () => {
        const loginUser = {username, password}
        dispatch(loginThunk(loginUser))
        if(!userServiceError) {
            navigate(-1)
        }
    }
    return(
        <div className="container" style={{paddingTop: "50px"}}>
            <div className="login-card card col-10 col-md-8 col-lg-6 mt-5 mx-auto">
                <div className="card-header"> <h3>Welcome to Map</h3></div>
                <div className="form-check"></div>
                    {
                    userServiceError &&
                    <div className="alert alert-danger">
                    {userServiceError}
                    </div>
                    }
                <form className="container">
                    <div className= "form-group">
                        <label htmlFor="exampleInputUserName">
                            User Name
                        </label>

                        <input type="text"
                           className="form-control "
                           id="username"
                           placeholder="Enter UserName"
                           value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                            PassWord
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>

                    </div>
                    {/*<div className="roleSection">*/}
                    {/*    <label htmlFor="roleSelectId">Select a role</label>*/}
                    {/*    <select*/}
                    {/*        defaultValue={"Role"}*/}
                    {/*        className="form-select"*/}
                    {/*        type="form-control"*/}
                    {/*        id="roleSelectId"*/}
                    {/*    >*/}
                    {/*        <option>Admin</option>*/}
                    {/*        <option>Visitor</option>*/}
                    {/*        <option>Manager</option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                    <div className="form-check"></div>
                </form>
                <center>
                    <button
                        type="login"
                        className="btn btn-primary"
                        onClick={handleLoginBtn}>Login
                    </button>
                <div className="mt-2">
                    <small className="form-text text-muted">Don't have an account? </small>
                    <Link to ="/register">Register now
                    </Link>
                </div>
                </center>
                    <div className="footer align-content-center">
                    Copyright ⓒ 2022 Designed by @Map, Inc.
                    </div>
            </div>
        </div>
    )
}

export default Login;

