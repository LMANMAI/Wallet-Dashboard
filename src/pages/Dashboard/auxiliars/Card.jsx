import React, { useState } from "react";
import { CardWraper, FrontCard, BackCard } from "../../../assets";
const Card = ({ cardinfo }) => {
  return (
    <CardWraper>
      <BackCard>
        <p>{cardinfo.cvv}</p>
      </BackCard>

      <FrontCard>
        <p>{cardinfo.name}</p>
        <p>{cardinfo.last_name}</p>
      </FrontCard>
    </CardWraper>
  );
};

export default Card;
