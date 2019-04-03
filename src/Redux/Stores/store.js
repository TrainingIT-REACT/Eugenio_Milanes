import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import aplication from "../Reducers/Aplication";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    aplication
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
