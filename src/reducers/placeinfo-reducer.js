import {createSlice} from "@reduxjs/toolkit";
import {
  createPlaceinfoThunk,
  updatePlaceinfoThunk,
  deletePlaceinfoThunk,
  findPlaceinfoByPlaceThunk,
  findPlaceinfoByManagerThunk
} from "../services/placeinfo-thunk";

const placeinfoReducer = createSlice({
  name: 'placeinfo',
  initialState: {
    placeinfo: null
  },
  extraReducers: {
    [createPlaceinfoThunk.fulfilled]: (state, {payload}) => {
      state.placeinfo = payload
    },
    [updatePlaceinfoThunk.fulfilled]: (state, {payload}) => {
      state.placeinfo = payload? payload : state.placeinfo
    },
    [deletePlaceinfoThunk.fulfilled]: (state, {payload}) => {
      state.placeinfo = null
    },
    [findPlaceinfoByPlaceThunk.fulfilled]: (state, {payload}) => {
      state.placeinfo= payload
    },
    [findPlaceinfoByManagerThunk.fulfilled]: (state, {payload}) => {
      state.placeinfo= payload
    }
  }
})

export default placeinfoReducer.reducer;