import React, { useState, useContext } from "react";
import {
  HeaderContent,
  UserInfo,
  UserAvatar,
  RightSectionUser,
  LeftSectionUser,
  MenuButton,
  UserContainer,
} from "../../../assets";
import { AiFillCaretDown } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import Menu from "./Menu";
import { setMenuPosition } from "../../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { FirebaseContext } from "../../../firebase";
const HeaderSection = () => {
  const [menu, setMenu] = useState(false);
  const { user } = useContext(FirebaseContext);

  const dispatch = useDispatch();
  const handlePopUp = () => {
    setMenu(!menu);
  };
  const handleMenu = () => {
    dispatch(setMenuPosition(true));
  };
  let firstLetter;
  if (user) {
    firstLetter = user.displayName.charAt(0);
  }
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
              {user.photoURL ? (
                <img src={user.photoURL} alt="imagen de usuario" />
              ) : (
                <UserContainer>{firstLetter}</UserContainer>
              )}
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
