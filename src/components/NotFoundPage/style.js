import styled from 'styled-components';

export const ViewTextContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (min-width: 800px) {
        height: 100vh;
        flex-direction: row;
    }
`;

export const ViewMediaContainer = styled.div`
    text-align: center;
    @media screen and (min-width: 800px) {
        position: relative;
        left: 100px;
        text-align: left;
        flex-direction: row;
    }
`;

export const ViewNotFound = styled.h1`
    font-size: 700%;
    color: #8f85ff;
    font-weight: bold;
    margin: 0;
    font-family: 'MaplestoryOTFBold';
    @media screen and (max-width: 800px) {
        font-size: 14vw;
    }
    text-shadow: 5px 5px 5px rgba(17, 17, 17, 0.158);
    @media screen and (max-width: 700px) {
        font-size: 16vw;
    }
`;

export const ViewPicture = styled.img`
    width: 700px;
    opacity: 80%;
    @media screen and (min-width: 800px) {
        width: 500px;
    }
    @media screen and (max-width: 800px) {
        width: 500px;
    }
    @media screen and (max-width: 700px) {
        width: 80vw;
        @media screen and (max-height: 799px) {
            width: 80vw;
        }
    }
`;
