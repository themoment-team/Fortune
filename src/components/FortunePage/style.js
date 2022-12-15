import styled from "styled-components";
import fortune from "../../imgs/fortune.png";

export const Container = styled.div`
  height: 100vh;
  width: 720px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const FortuneImgBox = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
  background-image: url(${fortune});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  @media screen and (max-width: 720px) {
    width: 100vw;
    height: 100vw;
  }
`;

export const TouchText = styled.p`
  font-size: 300%;
  cursor: pointer;
  position: absolute;
  top: 37%;
  left: 50%;
  margin: 0;
  transform: translateX(-50%);
  @media screen and (max-width: 720px) {
    font-size: 15vw;
  }
`;
