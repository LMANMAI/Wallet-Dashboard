import React from "react";
import { MovementsSection, Section, SaldoConteiner } from "../../../assets";
import { selectAccountState } from "../../../features/user/userSlice";
import { useSelector } from "react-redux";
import Move from "./Move";

const Movements = () => {
  const saldo = useSelector(selectAccountState);

  return (
    <MovementsSection>
      <SaldoConteiner>
        {saldo ? (
          <span>$ {saldo.value_account}</span>
        ) : (
          <p>Todavia no ingresaste dinero</p>
        )}
      </SaldoConteiner>
      <Section>
        <p>Transaction</p>
        <p>See all</p>
      </Section>
      <Move />
      <Move />
      <Move />
      <Move />
    </MovementsSection>
  );
};

export default Movements;
