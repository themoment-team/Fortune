import * as S from './style';
import heart from '../../imgs/heart.png';

const MatchResult = () => {
    return (
        <S.Container>
            <S.VioletText>
                {}님과 {}님의 궁합은?
            </S.VioletText>
            <S.HeartDiv>
                <S.RelativeText>{100}%</S.RelativeText>
                <S.ViewPicture src={heart} />
            </S.HeartDiv>
            <S.ButtonBox>
                <S.TextContainer>돌아가기</S.TextContainer>
                <S.TextContainer>공유하기</S.TextContainer>
            </S.ButtonBox>
        </S.Container>
    );
};

export default MatchResult;
