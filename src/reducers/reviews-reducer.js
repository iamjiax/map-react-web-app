import {createSlice} from "@reduxjs/toolkit";
import {
  createReviewThunk,
  findReviewsByPlaceThunk
} from "../services/reviews-thunk";

const reviewsReducer = createSlice({
  name: 'reviews',
  initialState: {
    reviews: []
  },
  extraReducers: {
    [createReviewThunk.fulfilled]: (state, {payload}) => {
      state.reviews.push(payload)
    },
    [findReviewsByPlaceThunk.fulfilled]: (state, {payload}) => {
      state.reviews= payload
    }
  }
})

export default reviewsReducer.reducer;