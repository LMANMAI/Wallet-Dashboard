import React from "react";
import {
  InputsContainer,
  InputContent,
  Input,
  ButtonContainer,
  Button,
  LoginContainer,
  MessageContainer,
} from "../../../assets";
import { RiLock2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import {
  selectFormState,
  setFormPosition,
} from "../../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Login = ({ handleSignInPopUp }) => {
  const dispatch = useDispatch();
  const handleMenu = (e) => {
    e.preventDefault();
    dispatch(setFormPosition(false));
    console.log("desde el handle menu del login");
  };
  const formulariomove = useSelector(selectFormState);

  return (
    <LoginContainer formulariomove={formulariomove}>
      <h2>Hi there, Welcome back!</h2>
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
        <MessageContainer>
          Not a member?
          <button onClick={(e) => handleMenu(e)}>Register now </button>
        </MessageContainer>
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
    </LoginContainer>
  );
};

export default Login;
