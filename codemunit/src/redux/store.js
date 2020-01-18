import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// import dataReducer from "./reducers/dataReducer"
import auth from "./reducers/auth";
import alert from "./reducers/alert";
import profile from "./reducers/profile";
// import { createStore, applyMiddleware } from "redux";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  auth,
  profile,
  alert
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const enhancer = composeEnhancers(applyMiddleware(...middleware));
// const store = createStore(
//   reducers,
//   initialState,
//   enhancer
// );

export default store;
