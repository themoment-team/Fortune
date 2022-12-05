import { useState, useEffect } from 'react';
import * as S from './style';
const Match = () => {
    const [isErr, setIsErr] = useState(false);
    useEffect(() => {
        setIsErr(false);
    }, []);
    return (
        <S.Container>
            <S.VioletText>두 분의 이름을 입력해주세요</S.VioletText>
            <S.NameContainer>
                <div>
                    <S.NameInput
                        placeholder="이름"
                        color={isErr ? '#FF0000' : 'white'}
                    ></S.NameInput>
                    <S.ErrMessege>{isErr ? '에러메세지' : ''}</S.ErrMessege>
                </div>
                <div>
                    <S.NameInput
                        placeholder="이름"
                        color={isErr ? '#FF0000' : 'white'}
                    ></S.NameInput>
                    <S.ErrMessege>{isErr ? '에러메세지' : ''}</S.ErrMessege>
                </div>
            </S.NameContainer>
            <S.TextContainer>궁합 보기</S.TextContainer>
        </S.Container>
    );
};

export default Match;
