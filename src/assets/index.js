import styled from "styled-components";
import Slider from "react-slick";

/**Componentes del Dashboard */
export { default as CardSection } from "../pages/Dashboard/auxiliars/CardSection";
export { default as HeaderSection } from "../pages/Dashboard/auxiliars/HeaderSection";
export { default as Movements } from "../pages/Dashboard/auxiliars/Movements";
export { default as Options } from "../pages/Dashboard/auxiliars/Options";
//variabless
const White = "#FFF";
const GrisO = "#C0C0C0";
const Naranja = "#FF6700";
const AzulO = "#004E98";
const AzulC = "#3A6EA5";

/**Auth Page*/
export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${White};
  display: grid;
  place-items: center;
`;

export const Formulario = styled.form`
  width: 100%;
  height: 100%;
  background-color: ${White};
  padding: 15px;
  padding-top: 125px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  h2 {
    color: ${AzulO};
    font-size: 2rem;
  }
  overflow: hidden;
  position: relative;
  @media (min-width: 768px) {
    width: 40vw;
    height: fit-content;
    max-width: 500px;
    border-radius: 35px;
  }
`;
export const LoginContainer = styled.div`
  width: 100%;
  transition: all 400ms ease-in-out;
  transform: ${(props) =>
    props.formulariomove ? "translateX(-5px)" : "translateX(-100vw)"};
`;
export const SignContainer = styled.div`
  transition: all 400ms ease-in-out;
  width: 100%;
  position: absolute;
  top: 100px;
  transform: ${(props) =>
    props.formulariomove ? "translateX(-100vw)" : "translateX(-10px)"};
`;

export const InputsContainer = styled.div`
  min-height: 60%;
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
export const MessageContainer = styled.div`
  align-self: flex-start;
  font-size: 13px;
  padding: 5px;
  button {
    color: #4e4e4e;
    cursor: pointer;
    font-size: 13px;
    transition: all 250ms ease-in-out;
    background-color: transparent;
    border: none;
    padding: 5px;
    border-radius: 15px;
    &:hover {
      background-color: ${Naranja};
      color: white;
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
  position: relative;
  a {
    color: inherit;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
  &:before {
    content: "";
    display: block;
    height: 1px;
    background-color: ${GrisO};
    width: 95%;
    position: absolute;
    top: 5px;
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
  background-color: ${White};
  padding: 10px;
`;
export const Container = styled.div`
  //height: 100vh;
  @media (min-width: 768px) {
    display: grid;
    grid-template: auto 1fr / 200px 1fr 1fr;
  }
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
  grid-column: 1/ 4;
  background-color: ${GrisO};
  border-radius: 25px;
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
  overflow: hidden;
  img {
    width: 100%;
  }
`;
export const LeftSectionUser = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin: 0 5px;
  }
  @media (min-width: 768px) {
    svg {
      display: none;
    }
  }
`;
export const RightSectionUser = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const MenuButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  svg {
    font-size: 18px;
  }
`;
export const MenuWrapper = styled.div`
  width: 150px;
  height: fit-content;
  background-color: ${GrisO};
  position: absolute;
  border-radius: 10px;
  padding: 10px;
  bottom: -110px;
  z-index: 99;
  right: -1px;
  box-shadow: 0 10px 6px -6px #777;
  li {
    padding: 5px;
    padding-left: 12px;
    cursor: pointer;
    border-radius: 15px;
    &:hover {
      background-color: ${White};
    }
    &:last-child {
      &:before {
        content: "";
        display: block;
        height: 2px;
        width: 100%;
        background-color: ${White};
        margin-bottom: 2px;
      }
    }
  }
`;

/**Seccion Main de las tarjetas */

export const CardWraper = styled.div`
  transition: all 550ms ease-in-out;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    margin: 10px auto;
    width: 78%;
    height: 50px;
    &:hover {
      border: 1px solid red;
      margin-bottom: 0;
      transform: translateY(-30px) scale(1.03);
      z-index: 10;
    }
  }
`;
export const CardConteiner = styled.section`
  transition: all 250ms ease-in-out;
  position: relative;
  grid-column: 2 / 3;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 100%;
    height: 85vh;
    &:hover {
      ${CardWraper} {
        height: 350px;
        padding-top: 0px;
      }
    }
  }
`;

export const FrontCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;
export const BackCard = styled(FrontCard)``;

/**Menu de Opciones  */
export const MenuContainer = styled.nav`
  background-color: white;
  top: 0;
  z-index: 4;
  width: 65vw;
  left: 0;
  height: 100vh;
  position: fixed;
  transform: ${(props) =>
    props.move ? "translateX(0px)" : "translateX(-500px)"};
  transition: all 300ms ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;

  @media (min-width: 768px) {
    transform: translateX(0px);
    width: 100%;
    position: initial;
    grid-row: 2 / 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #bdbdbd;
    margin-right: 5px;
    svg {
      visibility: hidden;
      color: ${GrisO};
    }
  }
`;

export const MenuItem = styled.div`
  color: ${GrisO};
  border-radius: 25px;
  width: 100%;
  padding: 2px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 2px 0;
  svg {
    font-size: 30px;
    visibility: visible;
    margin: 0 5px;
  }
  button {
    border: none;
    background-color: transparent;
    outline: none;
    color: ${GrisO};
    cursor: pointer;
  }
  &:first-child {
    background-color: transparent;
    color: #8c8c8c;
    margin-bottom: 15px;
  }
  @media (min-width: 768px) {
    &:first-child {
      display: none;
    }
    &:hover {
      background-color: ${Naranja};
      color: white;
      button,
      svg {
        color: white;
      }
    }
  }
`;

/**Transactions */
export const MovementsSection = styled.section`
  min-height: 40vh;
  width: 95%;
  margin: 20px auto;
  padding: 12px;
  background-color: #bdbdbd;
  grid-column: 3 / 4;
  border-radius: 15px;
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

export const ModalView = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ModalContent = styled.div`
  width: 90vw;
  border-radius: 15px;
  padding: 15px;
  background-color: white;
  h4 {
    text-align: center;
  }
  @media (min-width: 768px) {
    width: 40vw;
  }
`;
export const ModalCloseButton = styled.button`
  border: none;
  background-color: transparent;
  text-align: end;
  width: 100%;

  svg {
    font-size: 20px;
    font-weight: bold;
  }
`;
export const FormularioModal = styled(Formulario)`
  padding: 0;
  width: 100%;
  box-shadow: none;
`;
export const InputContainerModal = styled(InputsContainer)``;
export const InputModal = styled(Input)`
  border-radius: 15px;
  padding: 10px;
  padding-left: 20px;
  margin: 8px 0;
  background-color: #e0e0e0;
  &::placeholder {
    color: black;
  }
`;
export const Icon = styled.div`
  width: 75px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;
export const ButtonModal = styled.button`
  border: none;
  cursor: pointer;
  padding: 15px;
  outline: none;
  margin: 0 auto;
  display: flex;
  border-radius: 15px;
  background-color: #90be6d;
  color: white;
`;
