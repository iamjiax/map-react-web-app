import {createSlice} from "@reduxjs/toolkit";

const searchParamsSlice = createSlice({
  name: "mySearchParams",
  initialState: {
    mySearchParams: {}
  },
  reducers: {
    updateMySearchParams(state, {payload}) {
      state.mySearchParams = payload;
    }
  }
});

export const {updateMySearchParams} = searchParamsSlice.actions;