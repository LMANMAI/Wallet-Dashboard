import React, { useState, useContext } from "react";
import {
  HeaderContent,
  UserInfo,
  UserAvatar,
  RightSectionUser,
  LeftSectionUser,
  MenuButton,
} from "../../../assets";
import { AiFillCaretDown } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import Menu from "./Menu";
import { setMenuPosition } from "../../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { FirebaseContext } from "../../../firebase";
const HeaderSection = () => {
  const [menu, setMenu] = useState(false);
  const { user, firebase } = useContext(FirebaseContext);

  const dispatch = useDispatch();
  const handlePopUp = () => {
    setMenu(!menu);
  };
  const handleMenu = () => {
    dispatch(setMenuPosition(true));
  };
  return (
    <HeaderContent>
      {user ? (
        <>
          <LeftSectionUser>
            <TiThMenu onClick={() => handleMenu()} />
            <UserInfo>
              <p>Hi! {user.displayName}</p>
              <span>Welcome Back</span>
            </UserInfo>
          </LeftSectionUser>

          <RightSectionUser>
            <UserAvatar>
              <img src={user.photoURL} alt="imagen de usuario" />
            </UserAvatar>
            <MenuButton onClick={handlePopUp}>
              <AiFillCaretDown />
            </MenuButton>
            {menu && <Menu />}
          </RightSectionUser>
        </>
      ) : null}
    </HeaderContent>
  );
};

export default HeaderSection;
