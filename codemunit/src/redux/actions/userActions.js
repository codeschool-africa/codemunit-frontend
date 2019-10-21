import {
    SET_UNAUTHENTICATED,
    SET_AUTHENTICATED
} from '../types/types';


export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: SET_AUTHENTICATED});
    history.push('/curriculum');
}

export const logoutUser = (userData, history) => (dispatch) => {
    dispatch({ type: SET_UNAUTHENTICATED });
    history.push('/');
}

export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: SET_AUTHENTICATED });
    // history.push('/en/dashboard');
}