import {createSlice} from "@reduxjs/toolkit";
import {
  createReviewThunk,
  deleteReviewThunk,
  findReviewsByPlaceThunk,
  findReviewsByUserThunk
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
    [deleteReviewThunk.fulfilled]: (state, {payload}) => {
      state.reviews = state.reviews.filter(r => r._id !== payload)
    },
    [findReviewsByPlaceThunk.fulfilled]: (state, {payload}) => {
      state.reviews= payload
    },
    [findReviewsByUserThunk.fulfilled]: (state, {payload}) => {
      state.reviews= payload
    }
  }
})

export default reviewsReducer.reducer;