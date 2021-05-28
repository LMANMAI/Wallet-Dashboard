import React from "react";
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
import firebase from "../../../firebase";
import { useHistory } from "react-router-dom";
import useValidation from "../../../hooks/useValidation";
import validateCreateAccount from "../../../hooks/validation/validateCreateAccount";
const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};
const Register = ({ handleSignInPopUp }) => {
  const { values, errors, handleChangeH, handleSubmitH, handleBlurH } =
    useValidation(INITIAL_STATE, validateCreateAccount, handleRegister);
  const { name, email, password } = values;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleMenu = (e) => {
    e.preventDefault();
    dispatch(setFormPosition(true));
  };

  async function handleRegister(e) {
    try {
      await firebase.register(name, email, password);
      history.push("/Dashboard");
    } catch (error) {
      //guardo el posible error de validacion para mostrarlo por pantalla
      //console.error(error.message);
    }
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
          Already have acount?
          <button onClick={(e) => handleMenu(e)}>Login now </button>
        </MessageContainer>
        <ButtonContainer>
          <Button onClick={(e) => handleRegister(e)}>Registrar</Button>
          <a>
            <Button onClick={handleSignInPopUp} type="button">
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
