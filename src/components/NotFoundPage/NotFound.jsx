import React from 'react';
// import style from '../styles/style.css';
// import styles from '../styles/NotFound.module.css';
import * as S from './style';
import { Style } from './style';

const NotFound = () => {
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
            <S.view_picture />
        </S.view_textContainer>
    );
};

export default NotFound;
