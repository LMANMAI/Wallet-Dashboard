import React, { useEffect } from "react";
import { AuthContainer, Formulario } from "../../assets";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase/firebase";
import { setActiveUser } from "../../features/user/userSlice";
import Login from "./auxiliars/Login";
import Register from "./auxiliars/Register";
const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleInPopUp = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(setActiveUser({ result }));
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setActiveUser(user));
        // history.push("/Dashboard");
      }
    });
  }, []);
  return (
    <AuthContainer>
      <Formulario>
        <Login popup={handleInPopUp} />
        <Register popup={handleInPopUp} />
      </Formulario>
    </AuthContainer>
  );
};

export default LoginPage;
