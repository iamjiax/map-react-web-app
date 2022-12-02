import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk} from "../services/reviews-thunk";

const reviewsReducer = createSlice({
  name: 'reviews',
  initialState: {
    reviews: []
  },
  extraReducers: {
    [createReviewThunk.fulfilled]: (state, {payload}) => {
      state.reviews.push(payload)
    }
  }
})

export default reviewsReducer.reducer;