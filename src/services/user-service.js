import axios from 'axios';
import {Constants} from "../util/constants";

const BASE_URL = 'http://localhost:4000'

export const createUser = async (user) => {
  const response = await axios.post(Constants.USER_API, user)
  return response.data;
}

export const findUser = async () => {
  const response = await axios.get(Constants.USER_API);
  return response.data;
}

export const register = async (user) => {
  const response = await axios.post(`http://localhost:4000/api/register`, user)
  return response.data
}

export const login = async (user) => {
  const response = await axios.post("http://localhost:4000/api/login", user)
  return response.data
}

export const logout = async () => {
  const response = await axios.post("http://localhost:4000/api/logout")
  return response.data
}

export const deleteUser = async (uid) => {}

export const updateUser = async (userUpdates) => {
  // const response = await axios.put(`${BASE_URL}/${api}/${uid}`, userUpdates)
  const response = await axios.put("http://localhost:4000/api/users/" + userUpdates._id, userUpdates)
  return response.data
}
