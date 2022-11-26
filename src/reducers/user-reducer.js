import {createSlice} from "@reduxjs/toolkit";
import {logoutThunk, findUserThunk, loginThunk, registerThunk} from "../services/user-thunks";

const userSlice = createSlice({
  name: 'users',
  initialState: {
    loggedIn: true,
    user: {
      email: "xu.jia3@northeastern.edu",
      name: "Jia"
    },
    users: [
      {
        email: "xu.jia3@northeastern.edu",
        name: "Jia"
      }],
    currentUser: null,
    error: null
  },
  reducers: {},
  extraReducers: {
    [findUserThunk.fulfilled]: (state, action) => {
      state.users = action.payload
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
    [loginThunk.rejected]: (state, action) => {
      state.error = action.payload
      state.currentUser = null
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
    [registerThunk.rejected]: (state, action) => {
      state.error = action.payload
      state.currentUser = null
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null
    },
  }
});

export default userSlice.reducer;

