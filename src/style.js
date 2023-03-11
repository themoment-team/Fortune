import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;
export const View = styled.div`
    display: flex;
    justify-content: center;
    width: 720px;
    height: 100vh;
    background-color: #f2f3f7;
    box-shadow: 0px 0px 23px -15px rgb(0, 0, 0);
    @media screen and (max-width: 720px) {
        width: 100vw;
        height: 100vh;
    }
`;
