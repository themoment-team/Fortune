import React from 'react';
import * as S from './style';
import img404 from '../../imgs/img404.png';

// import {myS}

const NotFound = () => {
    return (
        <S.ViewTextContainer>
            <S.ViewMediaContainer>
                <S.ViewNotFound>404 Not</S.ViewNotFound>
                <S.ViewNotFound>Found</S.ViewNotFound>
            </S.ViewMediaContainer>
            <S.ViewPicture src={img404} />
        </S.ViewTextContainer>
    );
};

export default NotFound;
