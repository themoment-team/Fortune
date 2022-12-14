import { useState } from 'react';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../LoadingPage';

const regexr = /^[ㄱ-ㅎ|가-힣]+$/; // 한글인지 체크

const Match = ({ history }) => {
    const [isErr1, setIsErr1] = useState(false); // 에러를 나타내는 변수
    const [isErr2, setIsErr2] = useState(false); // 에러를 나타내는 변수
    const [isClicked, setIsClicked] = useState(false); // 클릭을 확인하고 로딩 컴포넌트를 띄우는 변수
    const errMessage1 = '에러메세지'; // 에러메세지를 상황에 맞게 나타내기 위한 변수
    const errMessage2 = '에러메세지'; // 에러메세지를 상황에 맞게 나타내기 위한 변수
    let names = []; // 이름을 분리하고 짜내서 MatchResult로 보내고 검사하기 위한 변수
    let isOnErr = false; // 엔터 한정 오류 발생 확인 변수
    const navigate = useNavigate(); // 페이지 이동
    const FIRSTNAME = 'firstName';

    let userName1 = [];
    let userName2 = [];

    const checkName = (e) => {
        // 사용자가 입력한 이름을 오류 체크하는 함수
        const target = e.target;
        const isChecked = regexr.test(target.value); // 한글인지 체크
        setIsErr2(false);

        if (isChecked) {
            // 온전한 한글일때
            if (target.classList[2] === FIRSTNAME) {
                // 첫 번째 이름이 한글일 경우
                setIsErr1(false);
                // eslint-disable-next-line no-undef
                userName1[0] = Hangul.disassemble(target.value, true); // 한글 모음 자음마다 분리
                userName1[1] = target.value; // 온전한 이름 저장
            } else {
                // 두 번째 이름이 한글일 경우
                setIsErr2(false);
                // eslint-disable-next-line no-undef
                userName2[0] = Hangul.disassemble(target.value, true); // 한글 모음 자음마다 분리
                userName2[1] = target.value; // 온전한 이름 저장
            }
        } else {
            // 온전한 한글이 아닐때
            if (target.classList[2] === FIRSTNAME) {
                // 첫 번재 이름이 한글이 아닐때
                setIsErr1(true);
            } else if (target.classList[2] === 'secondName') {
                // 두 번재 이름이 한글이 아닐때
                setIsErr2(true);
            }
        }
    };

    const beforeLocation = (e) => {
        //submit
        if (
            // 예외처리
            userName1[0] !== undefined &&
            userName2[0] !== undefined &&
            !isErr1 &&
            !isErr2 &&
            userName1[1].length === 3 &&
            userName2[1].length === 3
        ) {
            names[0] = userName1[0];
            names[1] = userName2[0];
            names[2] = userName1[1];
            names[3] = userName2[1];
            setIsClicked(true); // 예외처리가 되면 로딩 컴포넌트 띄우기
        } else {
            try {
                // 엔터키로 함수를 호출하면 오류가 남
                e.preventDefault(); // 페이지 이동 막기
            } catch {
                isOnErr = true; // 에러 확인
            }
            if (
                // 첫 번째 이름에서 오류가 났을 경우
                userName1[0]?.length === undefined ||
                userName1[1]?.length === undefined ||
                userName1[1].length !== 3
            ) {
                setIsErr1(true);
            }
            if (
                // 두 번째 이름에서 오류가 났을 경우
                userName2[0]?.length === undefined ||
                userName2[1]?.length === undefined ||
                userName2[1].length !== 3
            ) {
                setIsErr2(true);
            }
        }
    };

    const onEnter = () => {
        // 엔터키로 제출했을 경우
        beforeLocation(); // 오류 확인
        if (!isOnErr) {
            // 오류가 안났으면?
            navigate('/match/result', {
                // 페이지 이동과 함께 이름들을 보낸다
                state: {
                    names: names,
                },
            });
        }
    };

    return (
        <div>
            {isClicked && <Loading></Loading>}
            <S.Container>
                <S.VioletText>두 분의 이름을 입력해주세요</S.VioletText>
                <S.NameContainer
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') onEnter();
                    }}
                >
                    <div>
                        <S.NameInput
                            maxLength={3}
                            placeholder="이름"
                            color={isErr1 ? '#FF0000' : 'white'}
                            onChange={checkName}
                            className="firstName"
                            type="text"
                        ></S.NameInput>
                        <S.ErrMessage>{isErr1 ? errMessage1 : ''}</S.ErrMessage>
                    </div>
                    <div>
                        <S.NameInput
                            maxLength={3}
                            placeholder="이름"
                            color={isErr2 ? '#FF0000' : 'white'}
                            onChange={checkName}
                            className="secondName"
                            type="text"
                        ></S.NameInput>
                        <S.ErrMessage>{isErr2 ? errMessage2 : ''}</S.ErrMessage>
                    </div>
                </S.NameContainer>
                <Link
                    onClick={beforeLocation}
                    to={{
                        pathname: '/match/result',
                    }}
                    state={{ names: names }}
                    style={{ textDecoration: 'none' }}
                >
                    <S.TextContainer>궁합 보기</S.TextContainer>
                </Link>
            </S.Container>
        </div>
    );
};

export default Match;
