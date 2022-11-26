import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./places-service"

export const findPlacesByLocThunk = createAsyncThunk(
    'tuits/findPlacesByLoc', async ({lat, lng}) =>
        await service.findPlacesByLoc({lat, lng})
)

export const findPlaceByXidThunk = createAsyncThunk(
    'tuits/findPlaceByXid', async (xid) =>
        await service.findPlaceByXid(xid)
)