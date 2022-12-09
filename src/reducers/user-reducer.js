import {createSlice} from "@reduxjs/toolkit";
import {
  logoutThunk,
  findAllUsersThunk,
  loginThunk,
  registerThunk,
  updateUserThunk,
  profileThunk,
  findUserByIdThunk,
  deleteUserThunk
} from "../services/user-thunks";

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    currentUser: null,
    publicProfile: null,
    userServiceError: null,
  },
  reducers: {
    resetErrorMessage(state, action) {
      state.userServiceError = null
    }
  },
  extraReducers: {
    [findAllUsersThunk.fulfilled]: (state, action) => {
      state.users = action.payload
      state.loading = false
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.userServiceError = null
      state.currentUser = action.payload
    },
    [loginThunk.rejected]: (state, action) => {
      state.userServiceError = "User name and password not match, please try again."
      state.currentUser = null
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.userServiceError = null
      state.currentUser = action.payload
    },
    [registerThunk.rejected]: (state, action) => {
      state.userServiceError = "You are already registered, please login."
      state.currentUser = null
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null
    },
    [updateUserThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
    [findUserByIdThunk.fulfilled]: (state, action) => {
      state.publicProfile = action.payload
    },
    [deleteUserThunk.fulfilled]: (state, action) => {
      state.users = state.users.filter(user => user._id !== action.payload)
    },
  }
});

export const {resetErrorMessage} = userSlice.actions;
export default userSlice.reducer;

