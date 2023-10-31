import { push } from "connected-react-router";
import { signInAction, signOutAction } from "./user.action";
import { auth, db, FirebaseTimeStamp } from "../../firebase";

export const ownerSignIn = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;
    if (!isSignedIn) {
      const url = "https://api.github.com/users/bigyozo";
      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null);
      const username = response.login;
      dispatch(
        signInAction({
          isSignedIn: true,
          role: "owner",
          uid: "A1111",
          username: username
        })
      );
      dispatch(push("/"));
    }
  };
};

export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(
              signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                username: data.username
              })
            );
            dispatch(push("/"));
          });
      } else {
        dispatch(push("/signin"));
      }
    });
  };
};

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert("必須項目が未入力です");
      return false;
    }

    if (password !== confirmPassword) {
      alert("パスワードが一致しません");
      return false;
    }
    return auth.createUserWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;
      if (user) {
        const uid = user.uid;
        const timestamp = FirebaseTimeStamp.now();
        const userInitialData = {
          created_at: timestamp,
          email: email,
          role: "customer",
          uid: uid,
          updated_at: timestamp,
          username: username
        };
        db.collection("users")
          .doc(uid)
          .set(userInitialData)
          .then(() => {
            dispatch(push("/"));
          });
      }
    });
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    if (email === "" || password === "") {
      alert("必須項目が未入力です");
      return false;
    }

    auth.signInWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;
      if (user) {
        const uid = user.uid;
        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();
            dispatch(
              signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                username: data.username
              })
            );
            dispatch(push("/"));
          });
      }
    });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction());
      dispatch(push("/signin"));
    });
  };
};

export const resetPassword = (email) => {
  return async (dispatch) => {
    if (email === "") {
      alert("必須項目が未入力です");
      return false;
    } else {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          alert("メールアドレスリセットします");
          dispatch(push("/signin"));
        })
        .catch(() => {
          alert("メールアドレスリセットに失敗しました");
        });
    }
  };
};
