import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {profileThunk} from "../services/user-thunks.js";

const CurrentUser = ({children}) => {
  const {currentUser} = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk())
  }, [])
  return (children);
}
export default CurrentUser;