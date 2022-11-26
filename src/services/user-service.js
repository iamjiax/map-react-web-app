import axios from 'aos';
import {Constants} from "../util/constants";

export const createUser = async (user) => {
  const response = await axios.post(Constants.USER_API, user)
  return response.data;
}

export const findUser = async () => {
  const response = await axios.get(Constants.USER_API);
  return response.data;
}

export const register = async (user) => {
  const response = await axios.post(Constants.USER_API, user)
  return response.data
}

export const login = async (user) => {
  const response = await axios.post(Constants.USER_API, user)
  return response.data
}

export const logout = async () => {
  const response = await axios.post(Constants.USER_API)
  return response.data
}

export const deleteUser = async (uid) => {}
export const updateUser = async (uid, userUpdates) => {}