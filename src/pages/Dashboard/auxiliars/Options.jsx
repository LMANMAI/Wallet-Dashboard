import React from "react";
import { MenuContainer, MenuItem } from "../../../assets";
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
        <CgArrowsExchangeAltV />
        Transfer
      </MenuItem>

      <MenuItem>
        <CgMathPercent />
        voucher
      </MenuItem>
      <MenuItem>
        <IoIosPaper />
        Bill
      </MenuItem>
      <MenuItem>
        <IoIosPeople />
        Send
      </MenuItem>
      <MenuItem>
        <CgShoppingCart />
        Shopping
      </MenuItem>
    </MenuContainer>
  );
};

export default Options;
