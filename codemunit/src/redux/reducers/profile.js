import {
  GET_PROFILE,
  PROFILE_ERROR,
  PROFILE_UPDATED,
  PROFILEUPDATE_FAIL,
  CLEAR_PROFILE
} from "../types/types";

const initialState = {
  loading: true,
  profile: null,
  profiles: [],
  repos: [],
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
    case PROFILE_UPDATED:
      return {
        ...state,
        loading: false,
        profile: payload,
      };
      case PROFILE_ERROR:
        case PROFILEUPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
      case CLEAR_PROFILE:
        return {
          ...state,
          loading: false,
          profile: null,
          repos: []
        }
    default:
      return state;
  }
}
