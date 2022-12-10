import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ResultFortuneImg = styled.img`
  width: 600px;
  height: 600px;
`;

export const ClickBox = styled.div`
  width: 450px;
  height: 350px;
  position: absolute;
  cursor: pointer;
  z-index: 99999;
`;

export const ClckText = styled.h2`
  position: absolute;
  left: 45%;
  transform: rotate(-38deg);
  font-size: 50px;
`;
