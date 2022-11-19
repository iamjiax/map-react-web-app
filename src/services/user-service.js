import axios from 'axios';
import {Constants} from "../util/constants";

export const createUser = async (user) => {
  const response = await axios.post(Constants.USER_API, user)
  return response.data;
}

export const findUser = async () => {
  const response = await axios.get(Constants.USER_API);
  return response.data;
}