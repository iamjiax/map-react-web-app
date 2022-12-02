import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './reviews-service';

const createReviewThunk = createAsyncThunk(
    'createReview', async (review) => await service.createReview(review)
);