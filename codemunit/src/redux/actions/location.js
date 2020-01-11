import axios from "axios";
import { setAlert } from "./alert";

import {
  LOCATION,
  LOCATION_ERROR
} from "../types/types";

export const location = () => async dispatch => {
    try {
      const res = await axios.get("https://restcountries.eu/rest/v2/all");
      dispatch({
        type: LOCATION,
        payload: res.data
      });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach(error => {
          dispatch(setAlert(error.msg, "error"));
        });
      }
      dispatch({
        type: LOCATION_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };