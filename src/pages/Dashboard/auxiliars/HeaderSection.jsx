import React, { useState } from "react";
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
  const [menu, setMenu] = useState(false);
  const userName = useSelector(selectUserName);
  const photo = useSelector(selectUserPhoto);
  const handlePopUp = () => {
    setMenu(!menu);
  };
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
        <MenuButton onClick={handlePopUp}>
          <AiFillCaretDown />
        </MenuButton>
        {menu && <Menu />}
      </RightSectionUser>
    </HeaderContent>
  );
};

export default HeaderSection;
