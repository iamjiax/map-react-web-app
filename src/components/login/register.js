import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerThunk} from "../../services/user-thunks";
import {Link, useNavigate} from "react-router-dom";
import './register.css';
import {UserRoles} from "../../util/user-roles";

const Register = () => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState('');
  const [role, setRole] = useState(UserRoles.VISITOR);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterBtn = () => {
    if (password !== validatePassword) {
      setError('Passwords must match')
      return
    }
    setError(null)
    const newUser = {
      username: username,
      password: password,
      email: email,
      firstname: firstname,
      lastname: lastname,
      role: role
    }
    dispatch(registerThunk(newUser))
    navigate(-2)
    //if (currentUser){
    //return (<Navigate to = {'/profile'}/>)}
  }
  return (
      <>
        <div className="card col-12 col-lg-4 login-card mt-5  mx-auto">
          <div style={{ marginTop: "8px" }}></div>

          <div className="card-header"><h2>Register a Map Account</h2></div>

          {
              error &&
              <div className="alert alert-danger">
                {error}
              </div>
          }

          <form className="container">
            <div className="form-check"></div>
            <div className="form-group text-left">
              <label htmlFor="exampleInputUserName1">User Name</label>
              <input
                  type="text"
                  className="form-control mb-2"
                  id="username"
                  placeholder="UserName"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}/>

            </div>

            <div className="form-group text-left">

              <label htmlFor="exampleInputFirstName1">First name</label>
              <input
                  type="text"
                  className="form-control mb-2"
                  id="firstname"
                  placeholder="FirstName"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}/>

            </div>

            <div className="form-group text-left">

              <label htmlFor="exampleInputLastName1">Last name</label>
              <input
                  type="text"
                  className="form-control mb-2"
                  id="lastname"
                  placeholder="LastName"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}/>

            </div>

            <div className="form-group text-left">

              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                  type="email"
                  className="form-control mb-2"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}/>
              <small id="emailHelp" className="form-text text-muted"> You can
                use letter, number & periods.</small>

            </div>

            <div className="form-group text-left">

              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                  type="password"
                  className="form-control mb-2"
                  id="password"
                  aria-describedby="passwordHelp"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>

              <small id="passwordHelp" className="form-text text-muted">Use 8 or
                more characters with a mix of letters, numbers &
                symbols.</small>
            </div>

            <div className="form-group text-left">

              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                  type="password"
                  className="form-control mb-2"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={validatePassword}
                  onChange={(e) => setValidatePassword(e.target.value)}/>

            </div>

            <div className="roleSection">
              <label htmlFor="roleSelectId">Select a role</label>
              <select
                  defaultValue={UserRoles.VISITOR}
                  className="form-select"
                  type="form-control"
                  id="roleSelectId"
                  onChange={(e) => setRole(e.target.value)}>
                {Object.values(UserRoles).map((role, index) => {
                  return <option key={index}>{role}</option>
                })}
              </select>
            </div>
            <div className="form-check"></div>
          </form>

          <center>
            <button
                type="submit"
                onClick={handleRegisterBtn}
                className="btn btn-primary">
              Register
            </button>
            <div className="mt-2">
              <small className="form-text text-muted"> Already have an
                account? </small>
              <Link to="/login">
                Login Here
              </Link>
            </div>
          </center>
          <div className="footer align-content-center">
            Copyright ⓒ 2022 Designed by @Map, Inc.
          </div>
        </div>
      </>
  )
}

export default Register