import React, { useEffect, useContext } from "react";
import {
  HeaderSection,
  CardSection,
  Options,
  Movements,
  Main,
  Container,
} from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseContext } from "../../firebase";
import {
  setCards,
  setActiveUser,
  setAccount,
  selectUser,
} from "../../features/user/userSlice";
import { useHistory } from "react-router-dom";

const DashboardPage = () => {
  const { firebase } = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  useEffect(() => {
    firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setActiveUser(user));
        const handleCards = () => {
          firebase.db.collection("cards").onSnapshot(handdleSnapshot);
        };

        const handleAccount = () => {
          firebase.db.collection("account").onSnapshot(handleSnapshotAccount);
        };
        handleCards();
        handleAccount();
      } else {
        history.push("/");
      }
    });

    const handdleSnapshot = async (snapshot) => {
      const cards = await snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      dispatch(
        setCards(cards.filter((card) => card.user_email === user.email))
      );
    };
    const handleSnapshotAccount = async (snapshot) => {
      const accounts = await snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      dispatch(
        setAccount(
          accounts.filter((account) => account.user_email === user.email)
        )
      );
    };
  });

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
