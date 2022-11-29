import React from 'react';
// import style from '../styles/style.css';
// import styles from '../styles/NotFound.module.css';
import * as S from './style';
import { Style, myStorage } from './style';
import img404 from '../../imgs/img404.png';

// import {myS}

const NotFound = () => {
    console.log(myStorage['car']['inside']['glove box']);
    return (
        // <Style[textContainer]>
        //     <Style[notFound]>
        //         404 Not
        //     </Style[notFound]>
        //     <Style[notFound]>
        //         Found
        //     </Style[notFound]>
        //     <Style[picture]>
        // </Style[textContainer]>
        <S.view_textContainer>
            <S.view_notFound>404 Not</S.view_notFound>
            <S.view_notFound>Found</S.view_notFound>
            <S.view_picture src={img404} />
        </S.view_textContainer>
    );
};

export default NotFound;
