import React, { useState } from "react";
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
import firebase from "../../../firebase";
import { useHistory } from "react-router-dom";
const Login = ({ handleSignInPopUp }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleMenu = (e) => {
    e.preventDefault();
    dispatch(setFormPosition(false));
  };
  const [userlogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userlogin;
  const handleChange = (e) => {
    setUserLogin({
      ...userlogin,
      [e.target.name]: e.target.value,
    });
  };
  async function loginUSer(e) {
    e.preventDefault();
    try {
      await firebase.login(email, password);
      history.push("/Dashboard");
    } catch (error) {
      console.error(error.message);
    }
  }
  const formulariomove = useSelector(selectFormState);

  return (
    <LoginContainer formulariomove={formulariomove}>
      <h2>Hi there, Welcome back!</h2>
      <p>Plase fill the required data bellow so we can proceed your acount</p>
      <InputsContainer>
        <InputContent>
          <MdEmail />
          <Input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </InputContent>

        <InputContent>
          <RiLock2Fill />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </InputContent>
        <MessageContainer>
          Not a member?
          <button onClick={(e) => handleMenu(e)}>Register now </button>
        </MessageContainer>
        <ButtonContainer>
          <Button onClick={(e) => loginUSer(e)}>Entrar</Button>
          <a>
            <Button onClick={() => handleSignInPopUp()} type="button">
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
