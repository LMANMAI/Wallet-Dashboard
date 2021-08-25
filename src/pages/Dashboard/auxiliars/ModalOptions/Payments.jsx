import React from "react";
import {
  InputContainerModal,
  InputModal,
  ButtonModal,
  SelectModal,
  OptionModal,
} from "../../../../assets";
const Payments = () => {
  return (
    <div>
      <h4>Registro de Gastos</h4>
      <InputContainerModal>
        <SelectModal name="" id="">
          <OptionModal value="">Seleccione una opcion</OptionModal>
          <OptionModal value="compra">Compra</OptionModal>
          <OptionModal value="transporte">Transporte</OptionModal>
          <OptionModal value="servicio">Servicio</OptionModal>
          <OptionModal value="comida">Comida</OptionModal>
        </SelectModal>
      </InputContainerModal>
      <InputContainerModal>
        <InputModal
          type="number"
          placeholder="Ej: 4500"
          name="value_account"
          // value={value_account}
          // onChange={(e) => handleChange(e)}
        />
      </InputContainerModal>
      <ButtonModal>Guardar</ButtonModal>
    </div>
  );
};

export default Payments;
