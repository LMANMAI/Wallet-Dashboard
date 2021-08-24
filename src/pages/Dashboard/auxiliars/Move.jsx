import React from "react";
import {
  Movement,
  MovementType,
  MovementName,
  MovementTotal,
} from "../../../assets";
import { FaShoppingCart } from "react-icons/fa";
const Move = (data) => {
  return (
    <>
      <Movement>
        <MovementType>
          <FaShoppingCart />
        </MovementType>
        <MovementName>
          <p>{data.name}</p>
        </MovementName>

        <MovementTotal>
          <p>${data.total}100</p>
        </MovementTotal>
      </Movement>
      <hr />
    </>
  );
};

export default Move;
