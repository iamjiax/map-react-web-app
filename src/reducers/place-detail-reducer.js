import {createSlice} from "@reduxjs/toolkit";
import {findPlaceByXidThunk} from "../services/places-thunks";

const initialState = {
  placeDetail: null,
  detailLoaded: false
}

const placeDetailSlice = createSlice({
  name: "placeDetail",
  initialState: initialState,
  extraReducers: {
    [findPlaceByXidThunk.pending]:
        (state) => {
          state.detailLoaded = false;
          state.placeDetail = null;
        },
    [findPlaceByXidThunk.fulfilled]:
        (state, {payload}) => {
          state.detailLoaded = true;
          state.placeDetail = payload;
          console.log(state.placeDetail);
        },
    [findPlaceByXidThunk.rejected]:
        (state) => {
          state.detailLoaded = false;
          console.log("Loading place detail rejected.");
        }
  }
});

export default placeDetailSlice.reducer;