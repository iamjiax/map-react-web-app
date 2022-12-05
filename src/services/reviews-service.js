import axios from "axios";
import {Constants} from "../util/constants";

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
  const url = `${Constants.REVIEWS_API}`;
  const response = await api.post(url, review);
  return response.data;
}

export const deleteReview = async (rid) => {
  const url = `${Constants.REVIEWS_API}/${rid}`;
  const response = await api.delete(url);
  if (response.data.deletedCount === 1) {
    return rid
  }
  return response.data;
}

export const findReviewsByPlace = async (xid) => {
  const url = `${Constants.REVIEWS_API}/place/${xid}`;
  const response = await axios.get(url);
  return response.data;
}

export const findReviewsByUser = async (uid) => {
  const url = `${Constants.REVIEWS_API}/user/${uid}`;
  const response = await axios.get(url);
  return response.data;
}