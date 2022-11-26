import {createSlice} from "@reduxjs/toolkit";
import {findPlacesByLocThunk} from "../services/places-thunks";

const initialState = {
  places: [],
  placesLoaded: false
}

const placesSlice = createSlice({
  name: "places",
  initialState: initialState,
  extraReducers: {
    [findPlacesByLocThunk.pending]:
        (state) => {
          state.placesLoaded = false
          state.places = []
        },
    [findPlacesByLocThunk.fulfilled]:
        (state, {payload}) => {
          state.placesLoaded = true
          state.places = payload
          console.log(state.places)
        },
    [findPlacesByLocThunk.rejected]:
        (state) => {
          state.placesLoaded = false
        }
  }
});

export default placesSlice.reducer;