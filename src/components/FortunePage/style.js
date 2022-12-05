import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 800px) {
  }
`;

export const ClickFortuneImg = styled.img`
  width: 600px;
  height: 600px;
  position: relative;
  @media screen and (max-width: 720px) {
    width: 80vw;
    height: 80vw;
  }
`;

export const ClcikInsteadFortuneImg = styled.div`
  width: 350px;
  height: 350px;
  position: absolute;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    width:40vw;
    height:40vw;  
    
  },
`;

export const ClickText = styled.p`
  text-align: center;
  font-family: "MaplestoryOTFBold";
  position: relative;
  font-weight: 900;
  top: 10%;
  font-size: 300%;
  z-index: 99999;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  @media screen and (max-width: 720px) {
    font-size: 5vw;
  }
`;
