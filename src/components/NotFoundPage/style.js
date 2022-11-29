import styled from 'styled-components';
// import notFoundIMG from '../../imgs/notFoundIMG.png';
import img404 from '../../imgs/img404.png';

export const view_textContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const view_notFound = styled.h1`
    font-size: 700%;
    color: #8f85ff;
    font-weight: bold;
    margin: 0;
`;

export const view_picture = styled.img.attrs({
    src: `${img404}`,
})`
    width: 700px;
    height: 700px;
    opacity: 80%;
`;

export const Style = {
    textContainer: view_textContainer,
    picture: view_picture,
    notFound: view_notFound,
};
