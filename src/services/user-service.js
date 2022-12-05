import axios from 'axios';
import {Constants} from "../util/constants";

const api = axios.create({withCredentials: true});

export const findAllUsers = async () => {
  const response = await axios.get(Constants.USER_API);
  return response.data;
}

export const register = async (user) => {
  const response = await api.post(`${Constants.BASE_API}/register`, user)
  return response.data
}

export const login = async (user) => {
  const response = await api.post(`${Constants.BASE_API}/login`, user)
  return response.data
}

export const logout = async () => {
  const response = await api.post(`${Constants.BASE_API}/logout`)
  return response.data
}

export const deleteUser = async (uid) => {}

export const updateUser = async (userUpdates) => {
  await api.put(
      `${Constants.USER_API}/${userUpdates._id}`, userUpdates)
  return userUpdates
}

export const profile = async () => {
  const response = await api.get(`${Constants.BASE_API}/profile`)
  return response.data
}

export const findUserById = async (uid) => {
  const response = await api.get(`${Constants.USER_API}/${uid}`)
  const user = response.data
  return user
}
