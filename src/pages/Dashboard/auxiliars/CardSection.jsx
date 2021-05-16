import React, { useEffect } from "react";
import { CardConteiner, CardSlider } from "../../../assets";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import DataBase, { db } from "../../../firebase";
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
  const handleGetCards = async () => {
    db.collection("cards")
      .doc()
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
        } else {
          console.log("Error ");
        }
      })

      .catch((error) => {
        console.log("error getting document", error);
      });
  };
  useEffect(() => {
    handleGetCards();
  }, []);
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
