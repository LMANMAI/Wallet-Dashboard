import React, { useEffect } from "react";
import {
  HeaderSection,
  CardSection,
  Options,
  Movements,
  Main,
  Container,
} from "../../assets";
import { auth } from "../../firebase";
import { selectUserEmail, setActiveUser } from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const DashboardPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userEmail = useSelector(selectUserEmail);
  //console.log(userEmail);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setActiveUser({
            username: user.displayName,
            email: user.email,
            userphoto: user.photoURL,
          })
        );
        history.push("/Dashboard");
      }
    });
  }, [userEmail]);

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
