import React from "react";
import { Movement } from "../../../assets";
const Move = (data) => {
  return (
    <Movement>
      <p>{data.type}</p>
      <p>{data.name}</p>
      <p>${data.total}</p>
    </Movement>
  );
};

export default Move;
