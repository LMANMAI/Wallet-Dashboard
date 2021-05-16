import React, { useState } from "react";
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
import {
  selectUserName,
  selectUserPhoto,
  setMenuPosition,
} from "../../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
const HeaderSection = () => {
  const [menu, setMenu] = useState(false);
  const userName = useSelector(selectUserName);
  const photo = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const handlePopUp = () => {
    setMenu(!menu);
  };
  const handleMenu = () => {
    dispatch(setMenuPosition(true));
  };
  return (
    <HeaderContent>
      <LeftSectionUser>
        <TiThMenu onClick={() => handleMenu()} />
        <UserInfo>
          <p>Hi! {userName}</p>
          <span>Welcome Back</span>
        </UserInfo>
      </LeftSectionUser>

      <RightSectionUser>
        <UserAvatar>
          <img src={photo} alt="imagen de usuario" />
        </UserAvatar>
        <MenuButton onClick={handlePopUp}>
          <AiFillCaretDown />
        </MenuButton>
        {menu && <Menu />}
      </RightSectionUser>
    </HeaderContent>
  );
};

export default HeaderSection;
