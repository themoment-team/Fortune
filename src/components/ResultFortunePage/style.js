import styled from "styled-components";
import fortuneResultImg from "../../imgs/fortuneResultImg.png";

export const Container = styled.div`
  width: 720px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const BackgroundImg = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
  background-image: url(${fortuneResultImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media screen and (max-width: 720px) {
    width: 83vw;
    height: 83vw;
  }
`;

export const ShowFortuneBox = styled.div`
  width: 600px;
  height: 360px;
  border-radius: 7%;
  background-color: #fff;
  z-index: 99999999;
  position: absolute;
  top: 36%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 720px) {
    width: 83vw;
    height: 50vw;
  }
`;

export const dlwjddn = styled.button`
  width: 50px;
  height: 50px;
  background-color: white;
  background: none;
  color: #8f85ff;
  font-size: 200%;
  border: none;
  font-family: "MaplestoryOTFBold";
  position: absolute;
  top: 7%;
  right: 5%;
  cursor: pointer;
`;

export const ReturnButton = styled.button`
  width: 250px;
  height: 93px;
  background-color: #e8ebf2;
  position: absolute;
  z-index: 9999;
  font-family: "MaplestoryOTFBold";
  bottom: 7%;

  border: none;
  font-size: 200%;
  color: #8f85ff;
  left: 10%;
  cursor: pointer;
  transform: translateY(-7%);
  @media screen and (max-width: 720px) {
    width: 34vw;
    height: 14vw;
    font-size: 5vw;
  }
`;
export const ShareButton = styled.button`
  width: 250px;
  height: 93px;
  background-color: #e8ebf2;
  position: absolute;
  z-index: 9999;
  font-family: "MaplestoryOTFBold";
  bottom: 7%;
  transform: translateY(-7%);
  border: none;
  font-size: 200%;
  color: #8f85ff;
  right: 10%;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    width: 34vw;
    height: 14vw;
    font-size: 5vw;
  }
`;
