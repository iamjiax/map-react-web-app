import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './reviews-service';

export const createReviewThunk = createAsyncThunk(
    'createReview', async (review) => await service.createReview(review)
);

export const findReviewsByPlaceThunk = createAsyncThunk(
    'findReviewsByPlaceThunk', async (xid) => await service.findReviewsByPlace(xid)
);

export const findReviewsByUserThunk = createAsyncThunk(
    'findReviewsByPlaceThunk', async (uid) => await service.findReviewsByUser(uid)
);