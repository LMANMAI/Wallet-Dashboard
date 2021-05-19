import React, { useEffect } from "react";
import { AuthContainer, Formulario } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase/firebase";
import { setActiveUser } from "../../features/user/userSlice";
import Login from "./auxiliars/Login";
import Register from "./auxiliars/Register";
const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignInPopUp = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setActiveUser({
          username: result.user.displayName,
          email: result.user.email,
          userphoto: result.user.photoURL,
        })
      );
    });
  };
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setActiveUser({
            username: user.displayName,
            email: user.email,
            userphoto: user.photoURL,
          })
        );
        history.push("/Dashboard");
      }
    });
  }, []);
  return (
    <AuthContainer>
      <Formulario>
        <Login handleSignInPopUp={handleSignInPopUp} />
        <Register handleSignInPopUp={handleSignInPopUp} />
      </Formulario>
    </AuthContainer>
  );
};

export default LoginPage;
