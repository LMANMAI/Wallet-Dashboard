import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuWrapper } from "../../../assets";
import { setUserLogOut } from "../../../features/user/userSlice";
import { auth } from "../../../firebase";
import { useHistory } from "react-router-dom";
const Menu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOut());
        history.push("/");
      })
      .catch((err) => alert(err.message));
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
