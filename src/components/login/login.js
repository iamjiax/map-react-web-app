import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk } from "../../services/user-thunks";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        setError(null)
        const loginUser = {username, password}
        dispatch(loginThunk(loginUser))
    }
    return(
        <>
            <h2 >Login Use your Account</h2>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
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
                    <li>
                        <a href="/register">
                            Reigster new account
                        </a>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Login