import {
  PROFILE_LOADED,
  PROFILE_ERROR
} from "../types/types";

const initialState = {
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_LOADED:
      return {

      };
      case PROFILE_ERROR:
      return {

      };
    default:
      return state;
  }
}
