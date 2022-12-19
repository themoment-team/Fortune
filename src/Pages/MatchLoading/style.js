import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 720px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  flex-direction: column;
  @media screen and (max-width: 720px) {
    width: 100vw;
  }
`;

export const VioletText = styled.h1`
  position: relative;
  top: 15vh;
  font-size: 55px;
  color: #8f85ff;
  @media screen and (max-width: 700px) {
    font-size: 7.3vw;
  }
`;

export const NameContainer = styled.div`
  width: 700px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    width: 50vw;
  }
`;

export const NameInput = styled.input`
  outline: none;
  width: 270px;
  height: 100px;
  border: 0;
  border-bottom: solid 2px ${(props) => props.color || "white"};
  display: flex;
  text-align: center;
  font-size: 40px;
  font-family: "MaplestoryOTFBold";
  @media screen and (max-width: 700px) {
    margin-bottom: 3vh;
    height: 15vw;
    font-size: 7vw;
    width: 60vw;
  }
  &:focus {
    border-bottom: solid 2px #8f85ff;
    transition: ease-in-out 0.2s;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const ErrMessege = styled.p`
  position: absolute;
  text-align: left;
  color: #ff0000;
  margin: 0;
  @media screen and (max-width: 700px) {
    position: relative;
    bottom: 3vh;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  bottom: 7vh;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #969696;
  height: 100px;
  background: linear-gradient(to right, #e8ebf2, #f1f3f7);
  box-shadow: 15px 15px 15px rgba(17, 17, 17, 0.158);
  transition: ease-in-out 0.2s;
  scale: 1.05;
`;
