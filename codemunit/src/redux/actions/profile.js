import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../../util/setAuthToken";
import {
  PROFILE_LOADED,
  PROFILE_ERROR
} from "../types/types";

//get user profile
export const profile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/me");
    dispatch({
      type: PROFILE_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR
    });
  }
};