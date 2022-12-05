import styled from 'styled-components';
import Spinner from "../../imgs/Spinner.gif";

export const Container = styled.div`
    display: flex;
    width: 720px;
    height: 100vh;
    justify-content: center;
    align-items: center;
    `;

export const Img2 = styled.img`
    display: flex;
    position: absolute;
    float: left;
    width: 10%;
    `;

export const Box = styled.div`
    display: flex;
    height: 100vh;
    width: 720px;
    z-index: 1000000000;
    position: relative;
    background-color: black;
    opacity: 0.3;
`;
export const Items = () => {
    return (
        <div>

            <Container>
                <Img2 src={Spinner}></Img2>
                <Box>
                </Box>
            </Container>
        </div>

    );
}

export default Items;