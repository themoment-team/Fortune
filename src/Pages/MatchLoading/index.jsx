import Loading from '../LoadingPage';
import * as S from './style';

const MatchLoading = () => {
    return (
        <div>
            <Loading />
            <S.Container>
                <S.VioletText>두 분의 이름을 입력해주세요</S.VioletText>
                <S.NameContainer>
                    <div>
                        <S.NameInput
                            maxLength={3}
                            placeholder="이름"
                        ></S.NameInput>
                    </div>
                    <div>
                        <S.NameInput
                            maxLength={3}
                            placeholder="이름"
                        ></S.NameInput>
                    </div>
                </S.NameContainer>
                <S.TextContainer>궁합 보기</S.TextContainer>
            </S.Container>
        </div>
    );
};
export default MatchLoading;
