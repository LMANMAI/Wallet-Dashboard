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
import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUserEmail, setUserLoginDetails } from "../../features/userSlice";
const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/Dashboard");
      }
    });
  }, [userEmail]);
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
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
              <Button onClick={handleAuth} type="button">
                <FcGoogle />
                Continuar con Google
              </Button>
            </a>
          </ButtonContainer>
        </InputsContainer>

        {/* boton para ingresar y de google*/}
      </Formulario>
    </AuthContainer>
  );
};

export default LoginPage;
