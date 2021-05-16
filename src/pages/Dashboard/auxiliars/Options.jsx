import React from "react";
import { MenuContainer, MenuItem } from "../../../assets";
import {
  CgArrowsExchangeAltV,
  CgMathPercent,
  CgShoppingCart,
  CgClose,
} from "react-icons/cg";
import { IoIosPaper, IoIosPeople } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  setMenuPosition,
  selectMenuState,
} from "../../../features/user/userSlice";
const Options = () => {
  const dispatch = useDispatch(setMenuPosition);
  const movestate = useSelector(selectMenuState);
  const handleMenuClose = () => {
    dispatch(setMenuPosition(false));
    console.log(movestate);
  };
  return (
    <MenuContainer move={movestate}>
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
      <CgClose onClick={() => handleMenuClose()} />
    </MenuContainer>
  );
};

export default Options;
