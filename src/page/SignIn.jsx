import React, { useCallback, useState } from "react";
import { PrimaryButton, TextInput } from "./component";
import { signIn } from "../store/user/user.operation";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">サインイン</h2>
      <div className="module-spacer--medium "></div>

      <TextInput
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      ></TextInput>
      <TextInput
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      ></TextInput>
      <div className="module-spacer--medium "></div>
      <div className="center">
        <PrimaryButton
          label={"サインイン"}
          onClick={() => dispatch(signIn(email, password))}
        ></PrimaryButton>
        <div className="module-spacer--medium "></div>
        <p onClick={() => dispatch(push("/signup"))}>アカウントをお持ちでない方はこれら</p>
        <p onClick={() => dispatch(push("/signin/reset"))}>パスワードを忘れた方はこれら</p>
      </div>
    </div>
  );
};
export default SignIn;
