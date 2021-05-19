import React, { useState } from "react";
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
import firebase from "../../../firebase";
import { useHistory } from "react-router-dom";
const Register = ({ handleSignInPopUp }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newuser, setNewUSer] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleMenu = (e) => {
    e.preventDefault();
    dispatch(setFormPosition(true));
  };
  const { name, email, password } = newuser;
  const handleChange = (e) => {
    setNewUSer({
      ...newuser,
      [e.target.name]: e.target.value,
    });
  };
  async function handleRegister(e) {
    e.preventDefault();
    try {
      await firebase.register(name, email, password);
      history.push("/Dashboard");
    } catch (error) {
      //guardo el posible error de validacion para mostrarlo por pantalla
      console.error(error.message);
    }
  }
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
          <Input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </InputContent>
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
