import styled from 'styled-components';

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
    margin: 0;
    color: #8f85ff;
    @media screen and (max-width: 700px) {
        font-size: 7.3vw;
    }
`;

export const RelativeText = styled.h1`
    position: relative;
    font-size: 75px;
    color: #8f85ff;
    margin: 0;
    top: 280px;
    @media screen and (max-width: 700px) {
        top: 38vw;
        font-size: 8.3vw;
    }
    @media screen and (max-height: 770px) {
        font-size: 7.3vw;
    }
    @media screen and (max-height: 600px) {
        top: 15vw;
        font-size: 4.3vw;
    }
`;

export const HeartDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ViewPicture = styled.img`
    width: 700px;
    opacity: 80%;
    @media screen and (max-width: 700px) {
        width: 100vw;
    }
    @media screen and (max-height: 600px) {
        height: 30vw;
        width: 30vw;
    }
`;

export const ButtonBox = styled.div`
    width: 700px;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    @media screen and (max-width: 700px) {
        flex-direction: column;
        width: 50vw;
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
    cursor: pointer;
    @media screen and (max-width: 700px) {
        width: 50vw;
        font-size: 5vw;
        height: 15vw;
        margin-bottom: 3vh;
    }
    @media screen and (max-height: 770px) {
        width: 30vw;
        height: 10vw;
    }
    &:hover {
        color: #8f85ff;
        transition: ease-in-out 0.2s;
        scale: 1.05;
    }
`;
