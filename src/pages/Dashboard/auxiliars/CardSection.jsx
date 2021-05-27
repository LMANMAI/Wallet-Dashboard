import React, { useState, useEffect, useContext } from "react";
import { CardConteiner } from "../../../assets";
import Card from "./Card";
import { FirebaseContext } from "../../../firebase";

const CardSection = () => {
  const [cardsarray, saveCards] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const handleCards = () => {
      firebase.db.collection("cards").onSnapshot(handdleSnapshot);
    };
    handleCards();
  });
  function handdleSnapshot(snapshot) {
    const cards = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    saveCards(cards);
  }
  return (
    <CardConteiner>
      {React.Children.toArray(
        cardsarray.map((card) => <Card cardinfo={card} />)
      )}
    </CardConteiner>
  );
};

export default CardSection;
