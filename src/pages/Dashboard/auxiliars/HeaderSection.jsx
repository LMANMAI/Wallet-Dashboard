import React from "react";
import { HeaderContent, UserInfo, UserAvatar } from "../../../assets";
const HeaderSection = () => {
  return (
    <HeaderContent>
      <UserInfo>
        <p>Hi! Name</p>
        <span>Welcome Back</span>
      </UserInfo>
      <UserAvatar>{/*Imagen traida por el reducer en Firebase*/}</UserAvatar>
    </HeaderContent>
  );
};

export default HeaderSection;
