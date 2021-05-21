import React, { useState } from "react";
import { MenuContainer, MenuItem } from "../../../assets";
import {
  CgArrowsExchangeAltV,
  CgCreditCard,
  CgShoppingCart,
  CgClose,
} from "react-icons/cg";
import { IoIosPaper, IoIosPeople } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  setMenuPosition,
  selectMenuState,
} from "../../../features/user/userSlice";
import Modal from "./Modal";
const Options = () => {
  const dispatch = useDispatch(setMenuPosition);
  const movestate = useSelector(selectMenuState);
  const handleMenuClose = () => {
    dispatch(setMenuPosition(false));
    console.log(movestate);
  };
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal((prev) => !prev);
    dispatch(setMenuPosition(false));
  };
  return (
    <>
      <MenuContainer move={movestate}>
        <MenuItem>
          <CgClose onClick={() => handleMenuClose()} />
        </MenuItem>

        <MenuItem>
          <CgArrowsExchangeAltV />
          Transferencias
        </MenuItem>

        <MenuItem>
          <CgCreditCard />
          <button onClick={() => openModal()}>Agregar tarjeta</button>
        </MenuItem>
        <MenuItem>
          <IoIosPaper />
          Facturas
        </MenuItem>

        <MenuItem>
          <CgShoppingCart />
          Compras
        </MenuItem>
      </MenuContainer>
      <Modal modal={modal} setModal={setModal} />
    </>
  );
};

export default Options;
