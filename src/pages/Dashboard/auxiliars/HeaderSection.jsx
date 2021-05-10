import React, { useEffect } from "react";
import {
  HeaderContent,
  UserInfo,
  UserAvatar,
  RightSectionUser,
  MenuButton,
} from "../../../assets";
import { AiFillCaretDown } from "react-icons/ai";
import Menu from "./Menu";
import {
  selectUserName,
  selectUserPhoto,
} from "../../../features/user/userSlice";
import { useSelector } from "react-redux";
const HeaderSection = () => {
  const userName = useSelector(selectUserName);
  const photo = useSelector(selectUserPhoto);
  return (
    <HeaderContent>
      <UserInfo>
        <p>Hi! {userName}</p>
        <span>Welcome Back</span>
      </UserInfo>
      <RightSectionUser>
        <UserAvatar>
          <img src={photo} alt="imagen de usuario" />
        </UserAvatar>
        <MenuButton>
          <AiFillCaretDown />
        </MenuButton>
        <Menu />
      </RightSectionUser>
    </HeaderContent>
  );
};

export default HeaderSection;
