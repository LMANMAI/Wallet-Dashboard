import React, { useEffect } from "react";
import {
  AuthContainer,
  Formulario,
  InputsContainer,
  InputContent,
  Input,
  ButtonContainer,
  Button,
} from "../../assets";
import { RiLock2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../../firebase";
import { selectUserEmail, setActiveUser } from "../../features/user/userSlice";
import { useHistory } from "react-router-dom";
const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const handleSignInPopUp = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
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
    console.log(userEmail);
  }, [userEmail]);
  return (
    <AuthContainer>
      <Formulario>
        <h2>Hi there, Welcome!</h2>
        <p>Plase fill the required data bellow so we can proceed your acount</p>
        <InputsContainer>
          <InputContent>
            <MdEmail />
            <Input type="text" placeholder="Email" />
          </InputContent>
          <InputContent>
            <RiLock2Fill />
            <Input type="password" placeholder="Password" />
          </InputContent>
          <ButtonContainer>
            <Button>Entrar</Button>
            <a>
              <Button onClick={handleSignInPopUp} type="button">
                <FcGoogle />
                Continuar con Google
              </Button>
            </a>
          </ButtonContainer>
        </InputsContainer>
      </Formulario>
    </AuthContainer>
  );
};

export default LoginPage;
