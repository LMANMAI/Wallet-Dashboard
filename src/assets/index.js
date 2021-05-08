import styled from "styled-components";
import Slider from "react-slick";

/**Componentes del Dashboard */
export { default as CardSection } from "../pages/Dashboard/auxiliars/CardSection";
export { default as HeaderSection } from "../pages/Dashboard/auxiliars/HeaderSection";
export { default as Movements } from "../pages/Dashboard/auxiliars/Movements";
export { default as Options } from "../pages/Dashboard/auxiliars/Options";
//variables
const GrisC = "#EBEBEB";
const GrisO = "#C0C0C0";
const Naranja = "#FF6700";
const AzulO = "#004E98";
const AzulC = "#3A6EA5";

/**Auth Page*/
export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${GrisC};
  display: grid;
  place-items: center;
`;

export const Formulario = styled.form`
  width: 100%;
  height: 100%;
  background-color: ${GrisC};
  padding: 15px;
  padding-top: 125px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  h2 {
    color: ${AzulO};
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    width: 40vw;
    height: fit-content;
    max-width: 500px;
    border-radius: 35px;
  }
`;
export const InputsContainer = styled.div`
  height: 60%;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const InputContent = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${GrisO};
  border-radius: 25px;
  margin: 5px;
  display: grid;
  grid-template-columns: 50px 1fr;
  place-items: center;
  transition: all 300ms ease-in-out;
  svg {
    font-size: 30px;
    padding-left: 5px;
  }
  &:focus-within {
    svg {
      color: ${Naranja};
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 0 25px 25px 0;
  border: none;
  outline: none;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  margin: 15px 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: inherit;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Button = styled.button`
  padding: 15px;
  min-width: 90%;
  margin: 5px;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  @media (min-width: 768px) {
    min-width: 80px;
  }
  &:first-child {
    background-color: ${Naranja};
    color: white;
  }
  &:last-child {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    svg {
      font-size: 1rem;
      margin-right: 5px;
    }
  }
`;
/**Dashboard Page*/
export const Main = styled.main`
  width: 100%;
  height: fit-content;
  overflow-x: hidden;
  background-color: ${GrisC};
  padding: 10px;
`;
export const Container = styled.div`
  height: 100%;
`;
/**seccion del header */
export const HeaderContent = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  margin-bottom: 5px;
  padding: 10px;
`;
export const UserInfo = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: 5px;
  p {
    font-weight: bold;
  }
`;
export const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${AzulC};
`;

/**Seccion Main de las tarjetas */
export const CardConteiner = styled.section`
  width: 95vw;
  height: 40vh;
  margin: 15px auto;
  margin-bottom: 25px;
  box-sizing: border-box;
`;

export const CardSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  @media (min-width: 768px) {
    width: 500px;
    margin: 0 auto;
  }
`;

export const CardWraper = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 40vh;
  max-width: 300px;
  max-height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 35px;
  background-color: ${AzulC};
  border: 1px solid ${GrisO};
  border-bottom: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
export const BgCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("/assets/pattern.jpeg");
  filter: opacity(30%);
`;
export const MainCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 15px;
`;

/**Menu de Opciones  */
export const MenuContainer = styled.nav`
  width: 95%;
  margin: 10px auto;
  height: 90px;
  border: 1px solid ${Naranja};
  padding: 5px;
  border-radius: 25px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const MenuItem = styled.div`
  background-color: ${GrisO};
  border-radius: 25px;
  padding: 2px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  svg {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

/**Transactions */
export const MovementsSection = styled.section`
  min-height: 40vh;
  width: 100%;
  padding: 5px 2%;
`;
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  margin-bottom: 5px;
`;
export const Movement = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 50px;
  padding: 5px;
  margin: 5px 0;
  min-height: 70px;
  align-items: center;
`;
