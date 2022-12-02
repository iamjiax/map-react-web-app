import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './likes-service';

export const findLikeThunk = createAsyncThunk(
    'likes/findLike', async ({uid, xid}) =>
        await service.findLike(uid, xid)
);

export const findPlaceLikesCountThunk = createAsyncThunk(
    'likes/findPlaceLikesCount', async (xid) =>
        await service.findPlaceLikesCount(xid)
);

export const findLikesByUserThunk = createAsyncThunk(
    'likes/findLikesByUser', async (uid) =>
        await service.findLikesByUser(uid)
);

export const userLikePlaceThunk = createAsyncThunk(
    'likes/userLikePlace', async ({uid, xid}) =>
        await service.userLikePlace(uid, xid)
);

export const userUnlikePlaceThunk = createAsyncThunk(
    'likes/userUnlikePlace', async ({uid, xid}) =>
        await service.userUnlikePlace(uid, xid)
);