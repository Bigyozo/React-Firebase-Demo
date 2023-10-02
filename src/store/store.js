import { createStore, combineReducers, applyMiddleware } from "redux";
//import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./reducers/user.reducer";
import { connectRouter, routerMiddleware } from "connected-react-router";

export default function getStore(history) {
  return createStore(
    combineReducers({
      router: connectRouter(history),
      users: UserReducer,
    }),
    applyMiddleware(routerMiddleware(history))
  );
}
