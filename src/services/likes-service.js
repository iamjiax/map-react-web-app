import axios from 'axios';
import {Constants} from "../util/constants";

export const findLike = async (uid, xid) => {
  const url = `${Constants.LIKES_API}/user/${uid}/place/${xid}`;
  const response = await axios.get(url);
  return response.data;
};

export const findPlaceLikesCount = async (xid) => {
  const url = `${Constants.LIKES_API}/place/${xid}/count`;
  const response = await axios.get(url);
  return response.data;
};

export const findLikesByUser = async (uid) => {
  const url = `${Constants.LIKES_API}/user/${uid}`;
  const response = await axios.get(url);
  return response.data;
};

export const userLikePlace = async (uid, xid) => {
  const url = `${Constants.LIKES_API}/user/${uid}/place/${xid}`;
  const response = await axios.post(url);
  return response.data;
}

export const userUnlikePlace = async (uid, xid) => {
  const url = `${Constants.LIKES_API}/user/${uid}/place/${xid}`;
  const response = await axios.delete(url);
  return response.data;
}