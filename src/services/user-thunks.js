
import {createAsyncThunk} from "@reduxjs/toolkit";
import {findUser, register, login, logout} from "./user-service";

export const findUserThunk = createAsyncThunk(
    'findUser',
    async () => await findUser()
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)