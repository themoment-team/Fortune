import styled from 'styled-components';
// import notFoundIMG from '../../imgs/notFoundIMG.png';

export const View_TextContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const View_NotFound = styled.h1`
    font-size: 700%;
    color: #8f85ff;
    font-weight: bold;
    margin: 0;
`;

export const View_Picture = styled.img`
    width: 700px;
    height: 700px;
    opacity: 80%;
`;

export const Style = {
    TextContainer: View_TextContainer,
    Picture: View_Picture,
    NotFound: View_NotFound,
};
