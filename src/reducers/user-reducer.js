import {createSlice} from "@reduxjs/toolkit";
import {UserRoles} from "../util/user-roles";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: true ,
    user: {
      name: "Jia",
      email:"xu.jia3@northeastern.edu",
      role: UserRoles.ADMIN
    }
  },
  reducers: {},
  extraReducers: {}
});

export default userSlice.reducer;

