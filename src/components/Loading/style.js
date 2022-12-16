import styled from "styled-components";
import Spinner from "../../imgs/Spinner.gif";

export const Container = styled.div`
  z-index: 1000000000;
  position: absolute;
  background-color: black;
  opacity: 0.3;
  display: flex;
  width: 720px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Img2 = styled.img`
  display: flex;
  position: absolute;
  float: left;
  width: 10%;
  @media screen and(max-width:720px) {
    width: 10%;
  }
`;

export const Items = () => {
  return (
    <div>
      <Container>
        <Img2 src={Spinner}></Img2>
      </Container>
    </div>
  );
};

export default Items;
