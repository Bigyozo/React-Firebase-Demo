import { createStore, combineReducers, applyMiddleware } from "redux";
//import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./user/user.reducer";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

export default function getStore(history) {
  return createStore(
    combineReducers({
      router: connectRouter(history),
      users: UserReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
