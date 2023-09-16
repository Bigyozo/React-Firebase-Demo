import { createStore, combineReducers } from "redux";
//import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./reducers/user.reducer";

export default function getStore() {
  return createStore(combineReducers({ users: UserReducer }));
}
