import axios from "axios";
import {Constants} from "../util/constants";

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
  const response = await axios.post(Constants.REVIEWS_API, review);
  return response.data;
}