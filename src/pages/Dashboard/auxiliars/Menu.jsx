import React, { useContext } from "react";
import { MenuWrapper } from "../../../assets";
import { FirebaseContext } from "../../../firebase";
import { useHistory } from "react-router-dom";
const Menu = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const handleSignOut = () => {
    firebase.logout();
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
