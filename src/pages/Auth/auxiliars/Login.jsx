import React from "react";
import {
  InputsContainer,
  InputContent,
  Input,
  ButtonContainer,
  Button,
  LoginContainer,
  MessageContainer,
  ErrorContainer,
  ErrorMessage,
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
import useValidation from "../../../hooks/useValidation";
import validateLoginAccount from "../../../hooks/validation/ validateLoginAccount";
const INITIAL_STATE = {
  email: "",
  password: "",
};
const Login = ({ handleSignInPopUp }) => {
  const { values, errors, handleChangeH, handleSubmitH, handleBlurH } =
    useValidation(INITIAL_STATE, validateLoginAccount, loginUSer);
  const { email, password } = values;

  const dispatch = useDispatch();
  const history = useHistory();
  const handleMenu = (e) => {
    e.preventDefault();
    dispatch(setFormPosition(false));
  };

  async function loginUSer(e) {
    try {
      await firebase.login(email, password);
      history.push("/Dashboard");
    } catch (error) {
      //console.error(error.message);
    }
  }
  const formulariomove = useSelector(selectFormState);

  return (
    <LoginContainer
      formulariomove={formulariomove}
      onSubmit={handleSubmitH}
      novalidate
    >
      <h2>Hi there, Welcome back!</h2>
      <p>Plase fill the required data bellow so we can proceed your acount</p>
      <InputsContainer>
        {errors.email && (
          <ErrorContainer>
            <ErrorMessage>{errors.email}</ErrorMessage>
          </ErrorContainer>
        )}
        <InputContent>
          <MdEmail />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChangeH}
            onBlur={handleBlurH}
          />
        </InputContent>
        {errors.password && (
          <ErrorContainer>
            <ErrorMessage>{errors.password}</ErrorMessage>
          </ErrorContainer>
        )}
        <InputContent>
          <RiLock2Fill />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChangeH}
            onBlur={handleBlurH}
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
