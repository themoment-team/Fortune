<<<<<<< HEAD:src/components/MatchResult/MatchResult.jsx
import * as S from "./style";
import { useLocation, Link } from "react-router-dom";
import heart from "../../imgs/heart.png";
import { useState } from "react";
import { useEffect } from "react";
import MatchLoading from "../MatchLoading/MatchLoading";
import { counting } from "./hangul";

const MatchResult = () => {
	const [delay, setDelay] = useState(true);

	const location = useLocation();
	const props = location.state;

	let name1 = [props.names[0][0], props.names[0][1], props.names[0][2]];
	let name2 = [props.names[1][0], props.names[1][1], props.names[1][2]];

	const [result, setResult] = useState("100");

	const getMatch = (name1, name2) => {
		let matchResult1 = [
			name1[0],
			name2[0],
			name1[1],
			name2[1],
			name1[2],
			name2[2],
		];
		let matchResult2 = [];
		let final;
		for (let i = 0; i < 4; i++) {
			if (i % 2 === 0)
				for (let j = 0; j < 5 - i; j++) {
					matchResult2[j] =
						(matchResult1[j] + matchResult1[j + 1]) % 10;
				}
			else
				for (let j = 0; j < 5 - i; j++) {
					matchResult1[j] =
						(matchResult2[j] + matchResult2[j + 1]) % 10;
				}
		}
		final = `${matchResult1[0]}${matchResult1[1]}`;
		return final;
	};

	useEffect(() => {
		setTimeout(() => setDelay(false), 3000);

		name1 = counting(name1);
		console.log(name1);
		name2 = counting(name2);
		console.log(name2);
		setResult(getMatch(name1, name2));
	}, []);
=======
import * as S from './style';
import { useLocation, Link } from 'react-router-dom';
import heart from '../../imgs/heart.png';
import { useState, useEffect } from 'react';
import MatchLoading from '../MatchLoading';
import { counting } from './hangul';

const MatchResult = () => {
    const [delay, setDelay] = useState(true); //로딩 화면 확인 변수

    const location = useLocation(); // 파라미터를 받기 위함
    const props = location.state;

    let name1 = [props.names[0][0], props.names[0][1], props.names[0][2]]; // 첫 번째 이름을 획마다 나눈것
    let name2 = [props.names[1][0], props.names[1][1], props.names[1][2]]; // 두 번째 이름을 획마다 나눈것

    const [result, setResult] = useState('100'); // 궁합 결과 설정

    const getMatch = (userNames) => {
        // 궁합을 보는 로직이 있는 함수
        let matchResult2 = []; // 반복문을 돌면서 결과가 나오는 과정에 필요한 공간
        let final; // 최종 결과
        for (let i = 0; i < 4; i++) {
            // 각 획수를 비교하는 과정을 전체적으로 4번 반복함
            if (i % 2 === 0)
                // 2회 반복될 때마다 저장 공간 교체
                for (let j = 0; j < 5 - i; j++) {
                    // 점차 반복 횟수가 줄어들게(아래로 뾰족한 삼각형처럼)
                    matchResult2[j] = (userNames[j] + userNames[j + 1]) % 10; // j인덱스에 있는 획수와 그 다음 인덱스에 있는 획수를 더해서 10으로 나눈 나머지를 구함
                }
            else
                for (let j = 0; j < 5 - i; j++) {
                    // 점차 반복 횟수가 줄어들게(아래로 뾰족한 삼각형처럼)
                    userNames[j] = (matchResult2[j] + matchResult2[j + 1]) % 10; // j인덱스에 있는 획수와 그 다음 인덱스에 있는 획수를 더해서 10으로 나눈 나머지를 구함
                }
        }
        final = `${userNames[0]}${userNames[1]}`; // 문자열로 변환해서 저장
        return final;
    };

    useEffect(() => {
        setTimeout(() => setDelay(false), 3000); // 3초동안 로딩

        name1 = counting(name1); // 각 획수를 센다
        name2 = counting(name2); // 각 획수를 센다
        const userNames = [
            name1[0],
            name2[0],
            name1[1],
            name2[1],
            name1[2],
            name2[2],
        ];
        setResult(getMatch(userNames)); // 결과를 구한다
    }, []);
>>>>>>> develop:src/Pages/MatchResult/index.jsx

	return (
		<div>
			{delay ? (
				<MatchLoading></MatchLoading>
			) : (
				<S.Container>
					<S.VioletText>
						{props.names[2]}님과 {props.names[3]}님의 궁합은?
					</S.VioletText>
					<S.HeartDiv>
						<S.RelativeText>{result}%</S.RelativeText>
						<S.ViewPicture src={heart} />
					</S.HeartDiv>
					<S.ButtonBox>
						<Link
							to={{ pathname: "/match" }}
							style={{ textDecoration: "none" }}
						>
							<S.TextContainer>돌아가기</S.TextContainer>
						</Link>
						<S.TextContainer>공유하기</S.TextContainer>
					</S.ButtonBox>
				</S.Container>
			)}
		</div>
	);
};

export default MatchResult;
