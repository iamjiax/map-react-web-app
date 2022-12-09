import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {deleteUserThunk, findAllUsersThunk,} from "../../../services/user-thunks";
import {Link, useParams} from "react-router-dom";
import {UserRoles} from "../../../util/user-roles";

const UserList = () => {
  const {users} = useSelector(state => state.userReducer);
  const {uid} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllUsersThunk(uid))
  }, [uid])
  return(
    <div>
      <div className="row mt-5 mb-3">
        <div className="col">
          <hr className="border border-2 opacity-50"/>
        </div>
        <h5 className="col-auto">Manage your user list (total users: {users.length})</h5>
        <div className="col">
          <hr className="border border-2 opacity-50"/>
        </div>
      </div>
      <ul className="list-group">
        {
          users.map(user => <UserProfileItem key={user._id} user={user}/>)
        }
      </ul>
    </div>
  );
};
const UserProfileItem = ({user}) => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.userReducer);
  const profileUrl = currentUser?._id === user._id ? "/profile" : `/profile/${user._id}`;
  return (
      <li className="list-group-item">
        <Link to={profileUrl}>{user.username}: {user.role}</Link>
        {(currentUser?._id !== user._id) &&
            <button className="btn border-secondary rounded-pill bi bi-x-lg float-end" onClick={() => dispatch(deleteUserThunk(user._id))}>delete user</button>}
        {(currentUser?._id === user._id) &&
            <button className="btn border-secondary rounded-pill float-end">Unable to delete yourself</button>}
      </li>
  );
}

export default UserList;