import React, { useState, useContext } from "react";
import {
  FormularioModal,
  InputContainerModal,
  InputModal,
  Icon,
  ButtonModal,
} from "../../../../assets";
import firebase, { FirebaseContext } from "../../../../firebase";

const AddCards = ({ onClose }) => {
  const [cardinfo, setCardInfo] = useState({
    name: "",
    last_name: "",
    card_type: "",
    salary: "",
    date: Date.now(),
    cvv: Math.floor(Math.random() * (999 - 100)) + 100,
    number: 4 + (Math.floor(Math.random() * (0 + 1000000000000000)) + 0),
  });

  const handleChange = (e) => {
    setCardInfo({
      ...cardinfo,
      [e.target.name]: e.target.value,
    });
  };
  const { name, last_name, card_type, salary } = cardinfo;
  const { user } = useContext(FirebaseContext);

  if (user) {
    cardinfo.user_email = user.email;
  }
  async function addCard() {
    firebase.db.collection("cards").add(cardinfo);
    console.log("Datos de la tarjeta agregada: ", cardinfo);
    onClose();
  }
  return (
    <>
      <FormularioModal>
        <Icon>
          <img src="/assets/debit-card.png" alt="card-icon" />
        </Icon>
        <h4>Datos para solicitar la tarjeta</h4>
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
          <div>
            <label>Seleccione un tipo de tarjeta</label>
            <select name="card_type" value={card_type} onChange={handleChange}>
              <option value="-" selected>
                Tipo de tarjeta
              </option>
              <option value="VISA">Visa</option>
              <option value="MASTERCARD">Mastercard</option>
            </select>
          </div>
          <InputModal
            type="number"
            placeholder="Ingresos Mensuales"
            value={salary}
            name="salary"
            onChange={handleChange}
          />
        </InputContainerModal>
      </FormularioModal>
      <ButtonModal onClick={addCard}>Solicitar</ButtonModal>
    </>
  );
};

export default AddCards;
