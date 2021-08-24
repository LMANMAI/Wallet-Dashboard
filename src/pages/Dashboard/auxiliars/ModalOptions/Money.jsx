import React, { useState } from "react";
import {
  InputContainerModal,
  InputModal,
  ButtonModal,
} from "../../../../assets";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../../../../firebase/firebase";
import {
  setModal,
  setArrayMovements,
  selectUser,
  selectAccountState,
  selectMovements,
} from "../../../../features/user/userSlice";
const Money = () => {
  const dispatch = useDispatch();
  const setClose = () => dispatch(setModal(false));
  const user = useSelector(selectUser);
  const account = useSelector(selectAccountState);
  const array_moves = useSelector(selectMovements);
  const [count, setCount] = useState({
    value_account: "",
    user_email: "",
    moves: [],
  });
  const { value_account } = count;

  const [movements, setMovements] = useState({
    name: "Ingreso",
    type: "in",
    total: 0,
  });
  const handleChange = (e) => {
    setCount({
      ...count,
      [e.target.name]: e.target.value,
    });
  };
  const handleAccount = async () => {
    //si no existe la cuenta
    if (!account) {
      count.user_email = user.email;
      count.moves = [];
      movements.total = value_account;
      await firebase.db.collection("account").add(count);
    } else {
      const newtotal =
        parseFloat(account.value_account) + parseFloat(count.value_account);
      movements.total = value_account;
      await firebase.db.collection("account").doc(account.id).update({
        value_account: newtotal,
      });
    }
    setClose();
  };
  const addToMovements = async (movements) => {
    // console.log("AGREGANDO A LoS MOVIMIENTOS", movements);
    dispatch(setArrayMovements(movements));
    console.log("estos son los movimientos que voy a upgradear", array_moves);
    await firebase.db.collection("account").doc(account.id).update({
      moves: array_moves,
    });
  };
  const handldeMoney = async () => {
    try {
      //Actualizo el total
      handleAccount();
      addToMovements(movements);
    } catch (error) {
      //console.log(error);
    }
  };
  return (
    <div>
      <h4>Ingresar saldo</h4>
      <InputContainerModal>
        <InputModal
          type="text"
          placeholder="Ej: Transporte"
          name="value_account"
          value={value_account}
          onChange={(e) => handleChange(e)}
        />
      </InputContainerModal>
      <InputContainerModal>
        <InputModal
          type="number"
          placeholder="Ej: 4500"
          name="value_account"
          value={value_account}
          onChange={(e) => handleChange(e)}
        />
      </InputContainerModal>
      <ButtonModal onClick={() => handldeMoney()}>Ingresar</ButtonModal>
    </div>
  );
};

export default Money;
