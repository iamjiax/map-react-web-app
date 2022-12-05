import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import {profileThunk} from "../services/user-thunks.js";

const CurrentUser = ({children}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("calling profileThunk...")
    dispatch(profileThunk())
  }, [])
  return (children);
}
export default CurrentUser;