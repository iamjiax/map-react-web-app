import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllUsers, register, login, logout, updateUser, profile, findUserById} from "./user-service";

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (uid) => await findUserById(uid)
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

export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async (user) => await updateUser(user)
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)