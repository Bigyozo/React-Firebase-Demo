import * as Actions from "./product.action";
import initialState from "../initialState";
export const ProductReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case Actions.FETCH_PRODUCTS:
      return {
        ...state,
        list: [...action.payload]
      };
    default:
      return state;
  }
};
