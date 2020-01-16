import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../../util/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USERDATA_LOADED,
  AUTH_ERROR,
  CLEAR_PROFILE
} from "../types/types";

//load user
export const loadUserData = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");
    //try to set if token===null, isAuthenticated === false
    dispatch({
      type: USERDATA_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

//register user
export const signupUser = ({
  firstname,
  secondname,
  email,
  password
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const newUser = {
    firstname,
    secondname,
    email,
    password
  };
  const body = JSON.stringify(newUser);
  try {
    const res = await axios.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUserData());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "error"));
      });
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

//login user
export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const newUser = {
    email,
    password
  };
  const body = JSON.stringify(newUser);
  try {
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUserData());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "error"));
      });
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

//logout user && clear profile
export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
  dispatch({
    type: CLEAR_PROFILE
  });
};
