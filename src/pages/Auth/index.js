import React from "react";
import {
  AuthContainer,
  Formulario,
  InputsContainer,
  InputContent,
  Input,
} from "../../assets";
import { RiLock2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
const LoginPage = () => {
  return (
    <AuthContainer>
      <Formulario>
        <h2>Hi there, Welcome!</h2>
        <p>Plase fill the required data bellow so we can proceed your acoung</p>
        {/* contenedor de los inputs*/}
        <InputsContainer>
          <InputContent>
            <MdEmail />
            <Input type="text" placeholder="Email" />
          </InputContent>
          <InputContent>
            <RiLock2Fill />
            <Input type="password" placeholder="Password" />
          </InputContent>
        </InputsContainer>
        {/* inputs*/}
        {/* boton para ingresar y de google*/}
      </Formulario>
    </AuthContainer>
  );
};

export default LoginPage;
