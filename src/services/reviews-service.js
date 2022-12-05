import axios from "axios";
import {Constants} from "../util/constants";

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
  const url = `${Constants.REVIEWS_API}`;
  const response = await axios.post(url, review);
  return response.data;
}

export const findReviewsByPlace = async (xid) => {
  const url = `${Constants.REVIEWS_API}/place/${xid}`;
  const response = await axios.get(url);
  return response.data;
}