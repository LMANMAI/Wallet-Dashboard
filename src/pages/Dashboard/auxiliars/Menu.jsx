import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuWrapper } from "../../../assets";
import { FirebaseContext } from "../../../firebase";
import { useHistory } from "react-router-dom";
const Menu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
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
