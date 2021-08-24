import React, { useEffect } from "react";
import {
  MovementsSection,
  Section,
  SaldoConteiner,
  SectionButton,
} from "../../../assets";
import {
  selectAccountState,
  selectMovements,
  setArrayMovements,
} from "../../../features/user/userSlice";
import { useSelector } from "react-redux";
import Move from "./Move";

const Movements = () => {
  const saldo = useSelector(selectAccountState);
  const moves = useSelector(selectMovements);

  useEffect(() => {
    //setArrayMovements(saldo.moves);
    console.log(saldo.moves);
  }, []);

  console.log("array", saldo.moves);
  const handleIn = () => {
    alert("Filter a los movimiento por entrada");
  };
  const handleOut = () => {
    alert("Filter a los movimiento que se gastan");
  };
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
        <SectionButton onClick={() => handleIn()}>Ingresos </SectionButton>
        <SectionButton onClick={() => handleOut()}>Gastos </SectionButton>
      </Section>

      {React.Children.toArray(moves.map((item) => <Move data={item} />))}
      <Move name="Delivery" amount="800" />
      <Move name="Compras" amount="3400" />
    </MovementsSection>
  );
};

export default Movements;
