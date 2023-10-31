import * as Actions from "./user.action";
import initialState from "../initialState";
export const UserReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload
      };
    case Actions.SIGN_OUT:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
