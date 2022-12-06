import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {deleteUserThunk, findAllUsersThunk} from "../../../services/user-thunks";

const UserList = () => {
  const {users} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  // const deleteUserHandler = (uid) => {
  //   dispatch(deleteUserThunk(uid));
  // }

  useEffect(() => {
    dispatch(findAllUsersThunk())
  }, [])
  return(
    <>
      <h3>Users (total users: {users.length})</h3>
      <ul className="list-group">
        {
          users.map((user) =>
          <li className="list-group-item"
              key={user._id}>
              {user.username}
            <i className="bi bi-x-lg float-end" onClick={() =>  dispatch(deleteUserThunk(user._id))}></i>
          </li>
          )
        }
      </ul>
    </>
  )
}

export default UserList;