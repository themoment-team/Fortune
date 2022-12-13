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
