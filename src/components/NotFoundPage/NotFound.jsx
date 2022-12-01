import React from 'react';
// import style from '../styles/style.css';
// import styles from '../styles/NotFound.module.css';
import * as S from './style';
import { Style, myStorage } from './style';
import img404 from '../../imgs/img404.png';
const View_TextContainer = Style['TextContainer'];
const View_NotFound = Style['NotFound'];
const View_Picture = Style['Picture'];

// import {myS}

const NotFound = () => {
    return (
        // <View_TextContainer>
        //     <View_NotFound>404 Not</View_NotFound>
        //     <View_NotFound>Found</View_NotFound>
        //     <View_Picture src={img404} />
        // </View_TextContainer>
        <S.View_TextContainer>
            <S.View_NotFound>404 Not</S.View_NotFound>
            <S.View_NotFound>Found</S.View_NotFound>
            <S.View_Picture src={img404} />
        </S.View_TextContainer>
    );
};

export default NotFound;
