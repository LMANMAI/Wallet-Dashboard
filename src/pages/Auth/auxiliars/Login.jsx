import React, { useRef } from "react";
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
import { auth } from "../../../firebase/firebase";
import { useHistory } from "react-router-dom";
import useValidation from "../../../hooks/useValidation";
import validateLoginAccount from "../../../hooks/validation/ validateLoginAccount";
const INITIAL_STATE = {
  email: "",
  password: "",
};
const Login = ({ popup, fn }) => {
  //validacion para el formulario
  const { values, errors, handleChangeH, handleSubmitH, handleBlurH } =
    useValidation(INITIAL_STATE, validateLoginAccount, loginUSer);
  const { email, password } = values;

  //hooks
  const dispatch = useDispatch();
  const history = useHistory();

  //useRef
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleMenu = (e) => {
    e.preventDefault();
    dispatch(setFormPosition(false));
  };

  async function loginUSer(e) {
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
        history.push("/Dashboard");
      })
      .catch((error) => console.log(error));
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
            ref={emailRef}
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
            ref={passwordRef}
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
            <Button onClick={() => popup()} type="button">
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
