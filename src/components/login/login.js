import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../services/user-thunks";

const Login = () => {
    const {userServiceError} = useSelector(state => state.userReducer);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleLoginBtn = () => {
        const loginUser = {username, password}
        dispatch(loginThunk(loginUser))
    }
    return(
        <>
            <h2 >Login Use your Account</h2>
            {
                userServiceError &&
                <div className="alert alert-danger">
                    {userServiceError}
                </div>
            }
            <form className= "form-horizontal">
                <div className="form-group row">
                    <label form=" " className="col-sm-2 col-form-label">
                        User Name :
                    </label>
                    <div className="col-sm-4">
                        <input
                            className="form-control "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label form=" " className="col-sm-2 col-form-label">
                        PassWord :
                    </label>
                    <div className="col-sm-4">
                        <input
                            className="form-control mb-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>

            </form>

            <button
                onClick={handleLoginBtn}
                className="btn btn-primary">
                Login
            </button>

            <div>
                <ul>
                    <a href="/register">
                        Register new account
                    </a>
                </ul>
            </div>

        </>
    )
}

export default Login