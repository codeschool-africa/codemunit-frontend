import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


// import dataReducer from "./reducers/dataReducer"
import auth from "./reducers/auth"
import alert from "./reducers/alert"
import profile from "./reducers/profile"


const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    auth,
    profile,
    alert
});

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;