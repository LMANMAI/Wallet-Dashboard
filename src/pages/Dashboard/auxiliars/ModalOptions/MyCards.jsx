import React from "react";
import {
  ModalCardsContainer,
  ModalCardWrapper,
  ModalCard,
} from "../../../../assets";
import { useSelector } from "react-redux";
import firebase from "../../../../firebase/firebase";
import { selectCardState } from "../../../../features/user/userSlice";
const MyCards = () => {
  const cards = useSelector(selectCardState);
  const handleDelete = async (id) => {
    try {
      await firebase.db.collection("cards").doc(id).delete();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ModalCardsContainer>
      {React.Children.toArray(
        cards.map((card) => (
          <ModalCardWrapper>
            <ModalCard>{card.name}</ModalCard>
            <button onClick={() => handleDelete(card.id)}>Eliminar</button>
          </ModalCardWrapper>
        ))
      )}
    </ModalCardsContainer>
  );
};

export default MyCards;
