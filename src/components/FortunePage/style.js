import styled from "styled-components";

export const Container = styled.div`
  width: 720px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LoadingContainer = styled.div`
  width: 720px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000;
  opacity: 70%;
`;

export const ClickFortuneImg = styled.img`
  width: 600px;
`;

export const ClcikInsteadFortuneImg = styled.div`
  width: 350px;
  height: 350px;
  position: absolute;
  cursor: pointer;
`;

export const ClickText = styled.p`
  font-family: "MaplestoryOTFBold";
  position: relative;
  font-weight: 900;
  top: 10%;
  font-size: 300%;
  z-index: 99999;
  cursor: pointer;
`;
