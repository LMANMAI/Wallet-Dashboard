import React, { useState } from "react";
import { CardWraper, FrontCard } from "../../../assets";
const Card = ({ cardinfo }) => {
  return (
    <CardWraper>
      <FrontCard>
        <p>{cardinfo.name}</p>
        <p>{cardinfo.last_name}</p>
      </FrontCard>
    </CardWraper>
  );
};

export default Card;
