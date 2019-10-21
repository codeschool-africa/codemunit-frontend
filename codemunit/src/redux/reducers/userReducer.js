import {
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
} from '../types/types';

const initialState = {
    authenticated: true,
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: false
            };
        case SET_UNAUTHENTICATED:
            return initialState;
        default:
            return state;
    }
}