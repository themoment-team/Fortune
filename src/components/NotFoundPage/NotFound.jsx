import React from 'react';
// import style from '../styles/style.css';
// import styles from '../styles/NotFound.module.css';
import * as S from './style';
import { Style, myStorage } from './style';
import img404 from '../../imgs/img404.png';
const StextContainer = Style['textContainer'];
const SnotFound = Style['notFound'];
const Spicture = Style['picture'];

// import {myS}

const NotFound = () => {
    return (
        // <StextContainer>
        //     <SnotFound>404 Not</SnotFound>
        //     <SnotFound>Found</SnotFound>
        //     <Spicture src={img404} />
        // </StextContainer>
        <S.view_textContainer>
            <S.view_notFound>404 Not</S.view_notFound>
            <S.view_notFound>Found</S.view_notFound>
            <S.view_picture src={img404} />
        </S.view_textContainer>
    );
};

export default NotFound;
