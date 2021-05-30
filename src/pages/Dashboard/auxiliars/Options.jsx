import React, { useState } from "react";
import { MenuContainer, MenuItem } from "../../../assets";
import { CgArrowsExchangeAltV, CgCreditCard, CgClose } from "react-icons/cg";
import { GiReceiveMoney, GiWallet } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import {
  setMenuPosition,
  selectMenuState,
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
  const handleMenuClose = () => {
    dispatch(setMenuPosition(false));
    console.log(movestate);
  };

  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState();

  const openModal = (comp) => {
    setOpen(!open);
    dispatch(setMenuPosition(false));
    setComp(comp);
  };
  return (
    <>
      <MenuContainer move={movestate}>
        <MenuItem>
          <CgClose onClick={() => handleMenuClose()} />
        </MenuItem>

        <MenuItem>
          <CgArrowsExchangeAltV />

          <button onClick={() => openModal(<Transactions />)}>
            Transferencias
          </button>
        </MenuItem>

        <MenuItem>
          <CgCreditCard />
          <button onClick={() => openModal(<AddCards />)}>
            Agregar tarjeta
          </button>
        </MenuItem>
        <MenuItem>
          <GiReceiveMoney />

          <button onClick={() => openModal(<Money />)}>Ingresar</button>
        </MenuItem>

        <MenuItem>
          <GiWallet />
          <button onClick={() => openModal(<MyCards />)}>Mis Tarjetas</button>
        </MenuItem>
      </MenuContainer>
      <Popup open={open} onClose={() => setOpen(false)}>
        {comp}
      </Popup>
    </>
  );
};

export default Options;
