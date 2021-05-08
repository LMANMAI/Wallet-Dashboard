import React from "react";
import {
  HeaderSection,
  CardSection,
  Options,
  Movements,
  Main,
  Container,
} from "../../assets";

const DashboardPage = () => {
  return (
    <Main>
      <Container>
        <HeaderSection />
        <CardSection />
        <Options />
        <Movements />
      </Container>
    </Main>
  );
};

export default DashboardPage;
