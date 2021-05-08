import React from "react";
import { CardConteiner, CardSlider } from "../../../assets";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
const Block = styled.div`
  border: 1px solid blue;
  //height: 40vh;
  background-color: blue;
  width: 40%;
`;

const CardSection = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <CardConteiner>
      <CardSlider {...settings}>
        <Card />
        <Card />
        <Card />
      </CardSlider>
    </CardConteiner>
  );
};

export default CardSection;
