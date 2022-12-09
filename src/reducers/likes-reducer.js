import {createSlice} from "@reduxjs/toolkit";
import {
  findLikeThunk,
  findPlaceLikesCountThunk,
  findLikesByUserThunk,
  userLikePlaceThunk,
  userUnlikePlaceThunk,
  findMostLikedPlacesThunk
} from "../services/likes-thunk";

const initialState = {
  placeLikesCount: 0,
  userLikes: [],
  userLikePlace: false,
  mostLikedPlaces: []
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
    },
    [findMostLikedPlacesThunk.fulfilled]: (state, {payload}) => {
      state.mostLikedPlaces = payload;
    }
  }
});

export default likesSlice.reducer;