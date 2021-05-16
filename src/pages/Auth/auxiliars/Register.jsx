import React from "react";
import {
  InputsContainer,
  InputContent,
  Input,
  ButtonContainer,
  Button,
  SignContainer,
  MessageContainer,
} from "../../../assets";
import { RiLock2Fill, RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import {
  selectFormState,
  setFormPosition,
} from "../../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Register = ({ handleSignInPopUp }) => {
  const dispatch = useDispatch();
  const handleMenu = (e) => {
    e.preventDefault();
    dispatch(setFormPosition(true));
    console.log("desde el registro false");
  };
  const formulariomove = useSelector(selectFormState);
  return (
    <SignContainer formulariomove={formulariomove}>
      <h2>Hi there, Welcome!</h2>
      <p>
        Plase fill the required data bellow so we can proceed to create your
        acount
      </p>
      <InputsContainer>
        <InputContent>
          <RiUserFill />
          <Input type="text" placeholder="Name" />
        </InputContent>
        <InputContent>
          <MdEmail />
          <Input type="text" placeholder="Email" />
        </InputContent>
        <InputContent>
          <RiLock2Fill />
          <Input type="password" placeholder="Password" />
        </InputContent>
        <MessageContainer>
          Already have acount?
          <button onClick={(e) => handleMenu(e)}>Login now </button>
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
    </SignContainer>
  );
};

export default Register;
