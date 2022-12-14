import React from 'react';
import * as S from './style';
import Spinner from '../../imgs/Spinner.gif';
export const Loading = () => {
    return (
        <S.Container>
            <S.Img2 src={Spinner}></S.Img2>
        </S.Container>
    );
};

export default Loading;
