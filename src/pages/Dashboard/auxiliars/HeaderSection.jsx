import React from "react";
import { HeaderContent, UserInfo, UserAvatar } from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserPhoto } from "../../../features/userSlice";
const HeaderSection = () => {
  const username = useSelector(selectUserName);
  const userimg = useSelector(selectUserPhoto);
  console.log(username);
  return (
    <HeaderContent>
      <UserInfo>
        <p>Hi! {username}</p>
        <span>Welcome Back</span>
      </UserInfo>
      <UserAvatar>
        <img src={userimg} alt="imagen de usuario" />
      </UserAvatar>
    </HeaderContent>
  );
};

export default HeaderSection;
