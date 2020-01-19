import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  PROFILE_UPDATED,
  PROFILEUPDATE_FAIL
} from "../types/types";

//get user profile
export const getProfile = () => async dispatch => {
  try {
    const res = await axios.get("https://kodemunit.herokuapp.com/api/profile/me");
    dispatch({
      type: GET_PROFILE,
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
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// update user profile
export const updateProfile = ({
  location,
  skills,
  courses,
  twitter,
  linkedin,
  githubusername
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const newProfile = {
    location,
    skills,
    courses,
    twitter,
    linkedin,
    githubusername
  };
  const body = JSON.stringify(newProfile);
  try {
    const res = await axios.post("https://kodemunit.herokuapp.com/api/profile", body, config);
    dispatch({
      type: PROFILE_UPDATED,
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
      type: PROFILEUPDATE_FAIL
    });
  }
};

// export const updateProfile = (
//   history,
//   formData,
//   edit = false
// ) => async dispatch => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };
//   try {
//     const res = await axios.post("/api/profile", formData, config);
//     dispatch({
//       type: PROFILE_UPDATED,
//       payload: res.data
//     });
//     dispatch(setAlert(edit ? "Profile Updated" : "Profile created", "success"));
//     if (!edit) {
//       history.push("/dashboard");
//     }
//   } catch (err) {
//     const errors = err.response.data.errors;
//     if (errors) {
//       errors.forEach(error => {
//         dispatch(setAlert(error.msg, "error"));
//       });
//     }
//     dispatch({
//       type: PROFILEUPDATE_FAIL,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };
