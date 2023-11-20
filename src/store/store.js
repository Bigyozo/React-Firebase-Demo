import { createStore, combineReducers, applyMiddleware } from "redux";
//import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./user/user.reducer";
import { ProductReducer } from "./product/product.reducer";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

export default function getStore(history) {
  const logger = createLogger({
    collapsed: true,
    diff: true
  });
  return createStore(
    combineReducers({
      router: connectRouter(history),
      users: UserReducer,
      products: ProductReducer
    }),
    applyMiddleware(logger, routerMiddleware(history), thunk)
  );
}
