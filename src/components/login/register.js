import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../../services/user-thunks";

const Register = () => {
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [birth, setBirth] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = {username, password}
        dispatch(registerThunk(newUser))
    }
    return(
        <>
            <h2>Register new account</h2>
            {
                error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }

            <form className= "needs-validation">
                <div className= "form-group pt-4">
                    <div className= "col-md-4 mb-3">
                        <label htmlFor="validationCustom01">User name</label>
                        <input
                            className="form-control mb-2"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                </div>

                <div className= "form-row">
                    <div className= "col-md-4 mb-3">
                        <label htmlFor="validationCustom01">First name</label>
                        <input
                            className="form-control mb-2"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}/>
                    </div>
                </div>

                <div className= "form-row">
                    <div className= "col-md-4 mb-3">
                        <label htmlFor="validationCustom01">Last name</label>
                        <input
                            className="form-control mb-2"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}/>
                    </div>
                </div>

                <div className= "form-row">
                    <div className= "col-md-4 mb-3">
                        <label htmlFor="validationCustom01">Email</label>
                        <input
                            className="form-control mb-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div className= "form-row">
                    <div className= "col-md-4 mb-3">
                        <label htmlFor="validationCustom01">Date of Birth</label>
                        <input
                            type= "date"
                            className="form-control mb-2"
                            value={birth}
                            onChange={(e) => setBirth(e.target.value)}/>
                    </div>
                </div>


                <div className= "form-row">
                    <div className= "col-md-4 mb-3">
                        <label htmlFor="validationCustom01">Password</label>
                        <input
                            className="form-control mb-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>

                <div className= "form-row">
                    <div className= "col-md-4 mb-3">
                        <label htmlFor="validationCustom01">Validate Password</label>
                        <input
                            className="form-control mb-2"
                            value={validatePassword}
                            onChange={(e) => setValidatePassword(e.target.value)}/>
                    </div>
                </div>
            </form>

            <button
                onClick={handleRegisterBtn}
                className="btn btn-primary">
                Register
            </button>
            <div className= "">
                <ul>
                    <a href="/login">
                        Login instead
                    </a>
                </ul>
            </div>
        </>
    )
}

export default Register