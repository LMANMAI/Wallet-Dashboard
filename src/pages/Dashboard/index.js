import React, { useEffect, useContext } from "react";
import {
  HeaderSection,
  CardSection,
  Options,
  Movements,
  Main,
  Container,
} from "../../assets";
import { useDispatch } from "react-redux";
import { FirebaseContext } from "../../firebase";
import { setCards } from "../../features/user/userSlice";
const DashboardPage = () => {
  const { firebase, user } = useContext(FirebaseContext);
  const dispatch = useDispatch();
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
    if (user) {
      dispatch(
        setCards(cards.filter((card) => card.user_email === user.email))
      );
    }
  }
  return (
    <Main>
      <Container>
        <HeaderSection />
        <Options />
        <CardSection />
        <Movements />
      </Container>
    </Main>
  );
};

export default DashboardPage;
