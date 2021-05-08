import React from "react";
import { MovementsSection, Section } from "../../../assets";
import Move from "./Move";
const Movements = () => {
  return (
    <MovementsSection>
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
