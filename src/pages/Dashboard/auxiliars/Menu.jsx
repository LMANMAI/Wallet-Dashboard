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
        <li>Profile</li>
        <li>Settings</li>
        <li onClick={handleSignOut}>Sign Out</li>
      </ul>
    </MenuWrapper>
  );
};

export default Menu;
