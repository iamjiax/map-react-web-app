import {createSlice} from "@reduxjs/toolkit";
import {logoutThunk, findUserThunk, loginThunk, registerThunk, updateUserThunk} from "../services/user-thunks";
import {UserRoles} from "../util/user-roles";


const userSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: null,

    userServiceError: null,
    /** the following part is placeholder **/
    loggedIn: true,
    user: {
      firstName: "Jia",
      lastName: "Xu",
      email:"xu.jia3@northeastern.edu",
      dateOfBirth: '11/11/1991',
      location: "Seattle, WA",
      role: UserRoles.ADMIN
    }
    /** ******************************** **/

  },
  reducers: {},
  extraReducers: {
    [findUserThunk.fulfilled]: (state, action) => {
      state.users = action.payload
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.loading = true
      state.currentUser = action.payload
    },
    [loginThunk.rejected]: (state, action) => {
      state.userServiceError = "User name and password not match, please try again."
      state.currentUser = null
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
    [registerThunk.rejected]: (state, action) => {
      state.userServiceError = action.payload
      state.currentUser = null
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null
    },
    [updateUserThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload
      console.log(action.payload)
      console.log(state.currentUser)
    }
  }
});

export default userSlice.reducer;

