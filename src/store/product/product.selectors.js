import { createSelector } from "reselect";

const productsSelector = (state) => state.products;

export const getUserId = createSelector([productsSelector], (state) => state.uid);
export const getUsername = createSelector([productsSelector], (state) => state.username);
export const getRole = createSelector([productsSelector], (state) => state.role);
export const getIsSignedIn = createSelector([productsSelector], (state) => state.isSignedIn);
