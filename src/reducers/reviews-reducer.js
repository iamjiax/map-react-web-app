import {createSlice} from "@reduxjs/toolkit";
import {
  createReviewThunk,
  deleteReviewThunk, findLastNReviewsByUserThunk,
  findReviewsByPlaceThunk,
  findReviewsByUserThunk,
  updateReviewThunk
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
    [updateReviewThunk.fulfilled]: (state, {payload}) => {
      const idx = state.reviews.findIndex((r) => r._id === payload._id)
      state.reviews[idx] = {
        ...state.reviews[idx],
        ...payload
      }
    },
    [deleteReviewThunk.fulfilled]: (state, {payload}) => {
      state.reviews = state.reviews.filter(r => r._id !== payload)
    },
    [findReviewsByPlaceThunk.fulfilled]: (state, {payload}) => {
      state.reviews = payload
    },
    [findReviewsByUserThunk.fulfilled]: (state, {payload}) => {
      state.reviews = payload
    },
    [findLastNReviewsByUserThunk.fulfilled]: (state, {payload}) => {
      state.reviews = payload
    }
  }
})

export default reviewsReducer.reducer;