import {createSlice} from "@reduxjs/toolkit";
import {logoutThunk, findUserThunk, loginThunk, registerThunk} from "../services/user-thunks";

const userSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: null,
    userServiceError: null
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
  }
});

export default userSlice.reducer;
