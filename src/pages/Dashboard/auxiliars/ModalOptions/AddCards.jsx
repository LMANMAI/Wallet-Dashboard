import React, { useState, useContext } from "react";
import {
  FormularioModal,
  InputContainerModal,
  InputModal,
  ButtonModal,
  RadioContainer,
  Radio,
} from "../../../../assets";
import firebase from "../../../../firebase/firebase";
import { setModal } from "../../../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
const AddCards = () => {
  const [cardinfo, setCardInfo] = useState({
    name: "",
    last_name: "",
    card_type: "",
    salary: "",
    date: Date.now(),
    cvv: Math.floor(Math.random() * (999 - 100)) + 100,
    number: 4 + (Math.floor(Math.random() * (0 + 1000000000000000)) + 0),
  });
  const dispatch = useDispatch();
  const setClose = () => dispatch(setModal(false));
  const handleChange = (e) => {
    setCardInfo({
      ...cardinfo,
      [e.target.name]: e.target.value,
    });
  };
  const { name, last_name, salary } = cardinfo;
  // const { user } = useContext(FirebaseContext);
  const user = "Lucas";
  if (user) {
    cardinfo.user_email = user.email;
  }
  async function addCard() {
    await firebase.db.collection("cards").add(cardinfo);
    setClose();
  }
  return (
    <>
      <FormularioModal>
        <h4>Agregar tarjeta</h4>
        <InputContainerModal>
          <InputModal
            type="text"
            placeholder="Nombre"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <InputModal
            type="text"
            placeholder="Apellido"
            value={last_name}
            name="last_name"
            onChange={handleChange}
          />

          <InputModal
            type="number"
            placeholder="Ingresos Mensuales"
            value={salary}
            name="salary"
            onChange={handleChange}
          />
        </InputContainerModal>
        <RadioContainer>
          <Radio>
            <input
              onChange={handleChange}
              type="radio"
              value="VISA"
              name="card_type"
            />
            <FaCcVisa />
          </Radio>
          <Radio>
            <input
              onChange={handleChange}
              type="radio"
              value="MASTERCARD"
              name="card_type"
            />
            <FaCcMastercard />
          </Radio>
        </RadioContainer>
      </FormularioModal>
      <ButtonModal onClick={addCard}>Guardar</ButtonModal>
    </>
  );
};

export default AddCards;
