import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenAuthState } from "./store/user/user.operation";
import { getIsSignedIn } from "./store/user/user.selectors";
const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState());
    }
  }, []);
  if (!isSignedIn) {
    return <></>;
  } else {
    return children;
  }
};

export default Auth;
