import React, { useContext } from "react";
import { MenuWrapper } from "../../../assets";
import firebase from "../../../firebase/firebase";
import { useHistory } from "react-router-dom";
const Menu = () => {
  const history = useHistory();
  const handleSignOut = () => {
    // firebase.logout();
    history.push("/");
  };
  return (
    <MenuWrapper>
      <ul>
        <li>Perfil</li>
        <li>Configuracion</li>
        <li onClick={handleSignOut}>Cerrar Sesion</li>
      </ul>
    </MenuWrapper>
  );
};

export default Menu;
