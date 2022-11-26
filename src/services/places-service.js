import axios from 'axios';
import {Constants} from "../util/constants";

const OTM_API_RADIUS = "https://api.opentripmap.com/0.1/en/places/radius";
const OTM_API_XID = "https://api.opentripmap.com/0.1/en/places/xid";

export const findPlacesByLoc = async ({lat, lng}) => {
  const url = `${OTM_API_RADIUS}?radius=1000&lon=${lng}&lat=${lat}&rate=3&format=json&kinds=interesting_places&apikey=${Constants.OTM_API_KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export const findPlaceByXid = async (xid) => {
  const url = `${OTM_API_XID}/${xid}`;
  const response = await axios.get(url);
  return response.data;
}