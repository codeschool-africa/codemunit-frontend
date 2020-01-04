import {
    // SET_ERRORS,
    // CLEAR_ERRORS,
    // LOADING_UI,
    // STOP_LOADING_UI,
    SET_ALERT,
    REMOVE_ALERT
} from '../types/types';

const initialState = [];

//reducer

export default function (state = initialState, action) {

    const { type, payload } = action;
    switch (type) {
        case SET_ALERT:
            return [...state, payload]
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload)
        // case SET_ERRORS:
        //     return {
        //         ...state,
        //         loading: false,
        //         errors: payload
        //     };
        // case CLEAR_ERRORS:
        //     return {
        //         ...state,
        //         loading: false,
        //         errors: null
        //     };
        // case LOADING_UI:
        //     return {
        //         ...state,
        //         loading: true
        //     };
        // case STOP_LOADING_UI:
        //     return {
        //         ...state,
        //         loading: false
        //     };
        default:
            return state;
    }
}
