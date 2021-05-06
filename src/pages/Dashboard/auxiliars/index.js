import styled from "styled-components";
export { default as CardSection } from "./CardSection";
export { default as HeaderSection } from "./HeaderSection";
export { default as Movements } from "./Movements";
export { default as Options } from "./Options";
//variables
const GrisC = "#EBEBEB";
const GrisO = "#C0C0C0";
const Naranja = "#FF6700";
const AzulO = "#004E98";
const AzulC = "#3A6EA5";

export const Main = styled.main`
  width: fit-content;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  //border: 1px solid blue;
`;
export const Container = styled.div`
  background-color: ${GrisC};
  width: 100vw;
  height: 100vh;
`;

export const Navegacion = styled.nav`
  background-color: ${Naranja};
  width: 70vw;
  height: 100vh;
  display: none;
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
export const CardConteiner = styled.main`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 50vh;
`;

export const CardWraper = styled.div`
  width: 85%;
  height: 68%;
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
  //background: ;
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
  height: 80px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const MenuItem = styled.div`
  background-color: ${GrisO};
  margin: 5px;
  border-radius: 25px;
  padding: 2px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: white;
  svg {
    font-size: 30px;
  }
`;
export const ImgContainer = styled.div`
  /* border: 1px solid red;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  margin: 0 auto */
`;
