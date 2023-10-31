import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/user/user.operation";
import { getUserId, getUsername } from "../store/user/user.selectors";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUsername(selector);

  return (
    <div>
      <h2>HOME</h2>
      <p>Id:{uid}</p>
      <p>ユーザー名:{username}</p>
      <button
        onClick={() => {
          dispatch(signOut());
        }}
      >
        Sign Out
      </button>
    </div>
  );
};
export default Home;
