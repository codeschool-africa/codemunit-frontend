import {
    LOCATION,
    LOCATION_ERROR
  } from "../types/types";
  
  const initialState = {
    loading: true,
    countries: []
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case LOCATION:
        return {
          ...state,
          loading: false,
          countries: payload
        };
        case LOCATION_ERROR:
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  }
  