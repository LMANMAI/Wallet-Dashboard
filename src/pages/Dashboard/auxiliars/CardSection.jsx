import React from "react";
import { CardConteiner } from "../../../assets";
import Card from "./Card";
import { useSelector } from "react-redux";
import { selectCardState } from "../../../features/user/userSlice";

const CardSection = () => {
  const cards = useSelector(selectCardState);
  const cardprove = {
    name: "Lucas",
    cvv: "548",
    last_name: "Maidana",
  };
  return (
    <CardConteiner>
      {React.Children.toArray(cards.map((card) => <Card cardinfo={card} />))}
      <Card cardinfo={cardprove} />
      <Card cardinfo={cardprove} />
      <Card cardinfo={cardprove} />
    </CardConteiner>
  );
};

export default CardSection;
