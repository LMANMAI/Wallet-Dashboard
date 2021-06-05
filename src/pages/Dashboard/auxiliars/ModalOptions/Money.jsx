import React, { useContext, useState } from "react";
import {
  InputContainerModal,
  InputModal,
  ButtonModal,
} from "../../../../assets";
import { useSelector, useDispatch } from "react-redux";
import firebase, { FirebaseContext } from "../../../../firebase";
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
    value: "",
  });
  const handleChange = (e) => {
    setCount({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const { value } = count;

  const handldeMoney = async () => {
    let previous_sald = parseFloat(account.count);
    let saldo = parseFloat(count.count) + previous_sald;
    console.log(saldo + previous_sald);
    try {
      if (account) {
        //actualizo la cuenta
        await firebase.db.collection("account").doc(account.id).update({
          count: saldo,
        });
        setClose();
      } else {
        count.user_email = user.email;
        await firebase.db.collection("account").add(count);
        setClose();
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      INGRESO DEL DINERO
      <InputContainerModal>
        <InputModal
          type="number"
          placeholder="Ej: 4500"
          name="count"
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </InputContainerModal>
      <ButtonModal onClick={() => handldeMoney()}>Ingresar</ButtonModal>
    </div>
  );
};

export default Money;
