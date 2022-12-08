import axios from "axios";
import {Constants} from "../util/constants";

const api = axios.create({withCredentials: true});

export const createPlaceinfo = async (placeinfo) => {
  const url = `${Constants.PLACEINFO_API}`;
  const response = await api.post(url, placeinfo);
  return response.data;
}

export const updatePlaceinfo = async (placeinfo) => {
  const url = `${Constants.PLACEINFO_API}/${placeinfo._id}`;
  const response = await api.put(url, placeinfo);
  if (response.data.modifiedCount === 1) {
    return placeinfo
  }
  return null;
}

export const deletePlaceinfo = async (piid) => {
  const url = `${Constants.PLACEINFO_API}/${piid}`;
  const response = await api.delete(url);
  if (response.data.deletedCount === 1) {
    return piid
  }
  return response.data;
}

export const findPlaceinfoByPlace = async (xid) => {
  const url = `${Constants.PLACEINFO_API}/place/${xid}`;
  const response = await axios.get(url);
  return response.data;
}

export const findPlaceinfoByManager = async (uid) => {
  const url = `${Constants.PLACEINFO_API}/manager/${uid}`;
  const response = await axios.get(url);
  return response.data;
}