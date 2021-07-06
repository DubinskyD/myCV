import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';

import profileReducer from './Reducers/profile-reducer';
import appReducer from "./Reducers/app-reducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let reducers = combineReducers({
   profile: profileReducer,
   app: appReducer
});

let store = createStore(
   reducers,
   composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;