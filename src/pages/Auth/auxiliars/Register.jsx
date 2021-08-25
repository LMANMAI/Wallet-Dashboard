import React, { useRef } from "react";
import {
  InputsContainer,
  InputContent,
  Input,
  ButtonContainer,
  Button,
  SignContainer,
  MessageContainer,
  ErrorContainer,
  ErrorMessage,
} from "../../../assets";
import { RiLock2Fill, RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import {
  selectFormState,
  setFormPosition,
} from "../../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useValidation from "../../../hooks/useValidation";
import validateCreateAccount from "../../../hooks/validation/validateCreateAccount";
import { auth } from "../../../firebase/firebase";
const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};
const Register = ({ popup }) => {
  //validacion
  const { values, errors, handleChangeH, handleSubmitH, handleBlurH } =
    useValidation(INITIAL_STATE, validateCreateAccount, register);
  const { name, email, password } = values;
  //hoks
  const dispatch = useDispatch();
  const history = useHistory();
  //refs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleMenu = (e) => {
    e.preventDefault();
    dispatch(setFormPosition(true));
  };
  async function register(e) {
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
        history.push("/Dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const formulariomove = useSelector(selectFormState);
  return (
    <SignContainer
      formulariomove={formulariomove}
      onSubmit={handleSubmitH}
      novalidate
    >
      <h2>Hi there, Welcome!</h2>
      <p>
        Plase fill the required data bellow so we can proceed to create your
        acount
      </p>
      <InputsContainer>
        {errors.name && (
          <ErrorContainer>
            <ErrorMessage>{errors.name}</ErrorMessage>
          </ErrorContainer>
        )}
        <InputContent>
          <RiUserFill />
          <Input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChangeH}
            onBlur={handleBlurH}
          />
        </InputContent>
        {errors.email && (
          <ErrorContainer>
            <ErrorMessage>{errors.email}</ErrorMessage>
          </ErrorContainer>
        )}
        <InputContent>
          <MdEmail />
          <Input
            type="text"
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
            ref={passwordRef}
            value={password}
            onChange={handleChangeH}
            onBlur={handleBlurH}
          />
        </InputContent>
        <MessageContainer>
          Already have acount?
          <button onClick={(e) => handleMenu(e)}>Login now </button>
        </MessageContainer>
        <ButtonContainer>
          <Button onClick={(e) => register(e)}>Registrar</Button>
          <a>
            <Button onClick={() => popup()} type="button">
              <FcGoogle />
              Continuar con Google
            </Button>
          </a>
        </ButtonContainer>
      </InputsContainer>
    </SignContainer>
  );
};

export default Register;
