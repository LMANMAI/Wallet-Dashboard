import React, { useState } from "react";
import {
  InputContainerModal,
  InputModal,
  ButtonModal,
} from "../../../../assets";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../../../../firebase";
import {
  selectUser,
  setModal,
  selectAccountState,
} from "../../../../features/user/userSlice";
const Money = () => {
  const dispatch = useDispatch();
  const setClose = () => dispatch(setModal(false));
  const user = useSelector(selectUser);
  const account = useSelector(selectAccountState);

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

  const handldeMoney = async () => {
    try {
      if (!account) {
        count.user_email = user.email;
        count.moves = movements;
        movements.total = value_account;
        console.log(count);
        await firebase.db.collection("account").add(count);
        setClose();
      } else {
        // // si ya esxiste una cuenta es porque puedo actualizarla
        const newtotal =
          parseFloat(account.value_account) + parseFloat(count.value_account);
        movements.total = value_account;
        //const newmovementsArray = [...account.moves, movements];
        let { moves } = account;
        //moves = [...moves, movements];
        console.log("array de movimientos", movements);

        await firebase.db.collection("account").doc(account.id).update({
          // moves: newmove,
          value_account: newtotal,
        });
        setClose();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      INGRESO DEL DINERO
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