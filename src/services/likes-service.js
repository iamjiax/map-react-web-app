import axios from 'axios';
import {Constants} from "../util/constants";

const api = axios.create({withCredentials: true});

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

export const createLike= async (like) => {
  const url = `${Constants.LIKES_API}`;
  const response = await axios.post(url, like);
  return response.data;
}

export const deleteLike = async (like) => {
  const uid = like.user._id;
  const xid = like.place.xid;
  const url = `${Constants.LIKES_API}/user/${uid}/place/${xid}`;
  const response = await axios.delete(url);
  return response.data;
}

export const findMostLikedPlaces = async (limit) => {
  const limitCount = limit === undefined? 10 : limit;
  const url = `${Constants.LIKES_API}/most-liked-places/${limitCount}`;
  const response = await axios.get(url);
  return response.data;
};
