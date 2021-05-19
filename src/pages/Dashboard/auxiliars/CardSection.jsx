import React, { useState } from "react";
import { CardConteiner, CardSlider } from "../../../assets";
import Card from "./Card";

const CardSection = () => {
  return (
    <CardConteiner>
      <Card />
      <Card />
      <Card />
    </CardConteiner>
  );
};

export default CardSection;
