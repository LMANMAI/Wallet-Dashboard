import React, { useState } from "react";
import { MenuContainer, MenuItem } from "../../../assets";
import { CgCreditCard, CgClose } from "react-icons/cg";
import { GiReceiveMoney, GiWallet, GiTwoCoins } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import {
  setMenuPosition,
  selectMenuState,
  selectModalState,
  setModal,
} from "../../../features/user/userSlice";
import {
  AddCards,
  MyCards,
  Money,
  Transactions,
} from "../auxiliars/ModalOptions";
import Popup from "../../../components/popup";
const Options = () => {
  const dispatch = useDispatch(setMenuPosition);
  const movestate = useSelector(selectMenuState);
  const modalstate = useSelector(selectModalState);
  const handleModal = (state) => {
    dispatch(setModal(state));
  };
  const handleMenuClose = () => {
    dispatch(setMenuPosition(false));
  };

  //const [open, setOpen] = useState(false);
  const [component, setComponent] = useState();

  const openModal = (comp) => {
    handleModal(true);
    dispatch(setMenuPosition(false));
    setComponent(comp);
  };
  return (
    <>
      <MenuContainer move={movestate}>
        <MenuItem>
          <CgClose onClick={() => handleMenuClose()} />
        </MenuItem>

        {/* <MenuItem onClick={() => openModal(<Transactions />)}>
          <CgArrowsExchangeAltV />
          Transferencias
        </MenuItem> */}

        <MenuItem onClick={() => openModal(<AddCards />)}>
          <CgCreditCard />
          Agregar tarjeta
        </MenuItem>
        <MenuItem onClick={() => openModal(<Money />)}>
          <GiReceiveMoney />
          Ingresar
        </MenuItem>
        <MenuItem onClick={() => openModal(<Money />)}>
          <GiTwoCoins />
          Agregar Gasto
        </MenuItem>
        <MenuItem onClick={() => openModal(<MyCards />)}>
          <GiWallet />
          Mis Tarjetas
        </MenuItem>
      </MenuContainer>

      <Popup open={modalstate} setClose={() => handleModal(false)}>
        {component}
      </Popup>
    </>
  );
};

export default Options;
