import React from "react";
import { MenuContainer, MenuItem, ImgContainer } from "./";
import {
  CgArrowsExchangeAltV,
  CgMathPercent,
  CgShoppingCart,
} from "react-icons/cg";
import { IoIosPaper, IoIosPeople } from "react-icons/io";
const Options = () => {
  return (
    <MenuContainer>
      <MenuItem>
        <ImgContainer>
          <CgArrowsExchangeAltV />
        </ImgContainer>
        Transfer
      </MenuItem>

      <MenuItem>
        <ImgContainer>
          <CgMathPercent />
        </ImgContainer>
        voucher
      </MenuItem>
      <MenuItem>
        <ImgContainer>
          <IoIosPaper />
        </ImgContainer>
        Bill
      </MenuItem>
      <MenuItem>
        <ImgContainer>
          <IoIosPeople />
        </ImgContainer>
        Send
      </MenuItem>
      <MenuItem>
        <ImgContainer>
          <CgShoppingCart />
        </ImgContainer>
        Shopping
      </MenuItem>
    </MenuContainer>
  );
};

export default Options;
