import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './placeinfo-service';

export const createPlaceinfoThunk = createAsyncThunk(
    'createPlaceinfo', async (placeinfo) => await service.createPlaceinfo(placeinfo)
);

export const updatePlaceinfoThunk = createAsyncThunk(
    'updatePlaceinfo', async (placeinfo) => await service.updatePlaceinfo(placeinfo)
);

export const deletePlaceinfoThunk = createAsyncThunk(
    'deletePlaceinfo', async (piid) => await service.deletePlaceinfo(piid)
);

export const findPlaceinfoByPlaceThunk = createAsyncThunk(
    'findPlaceinfoByPlace', async (xid) => await service.findPlaceinfoByPlace(xid)
);

export const findPlaceinfoByManagerThunk = createAsyncThunk(
    'findPlaceinfoByManager', async (uid) => await service.findPlaceinfoByManager(uid)
);