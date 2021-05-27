import React from "react";
import { CardConteiner } from "../../../assets";
import Card from "./Card";
import { useSelector } from "react-redux";
import { selectCardState } from "../../../features/user/userSlice";

const CardSection = () => {
  const cards = useSelector(selectCardState);
  return (
    <CardConteiner>
      {React.Children.toArray(cards.map((card) => <Card cardinfo={card} />))}
    </CardConteiner>
  );
};

export default CardSection;
