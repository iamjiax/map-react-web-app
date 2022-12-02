import {createSlice} from "@reduxjs/toolkit";
import {
  findLikeThunk,
  findPlaceLikesCountThunk,
  findLikesByUserThunk,
  userLikePlaceThunk,
  userUnlikePlaceThunk
} from "../services/likes-thunk";

const initialState = {
  placeLikesCount: 0,
  userLikes: [],
  userLikePlace: false
}
const likesSlice = createSlice({
  name: "likes",
  initialState: initialState,
  extraReducers: {
    [findLikeThunk.fulfilled]: (state, {payload}) => {
      state.userLikePlace = payload;
    },
    [findPlaceLikesCountThunk.fulfilled]: (state, {payload}) => {
      state.placeLikesCount = payload;
    },
    [findLikesByUserThunk.fulfilled]: (state, {payload}) => {
      state.userLikes = payload;
    },
    [userLikePlaceThunk.fulfilled]: (state, {payload}) => {
      state.userLikePlace = true;
    },
    [userUnlikePlaceThunk.fulfilled]: (state, {payload}) => {
      state.userLikePlace = false;
    }
  }
});

export default likesSlice.reducer;