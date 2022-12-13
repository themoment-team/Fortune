import { useState, useEffect } from "react";
import * as S from "./style";
import * as hangul from "hangul-js";
import { Link } from "react-router-dom";
import Loading from "../LoadingPage/Loading";

const regexr = /^[ㄱ-ㅎ|가-힣]+$/;

const Match = () => {
	const [isErr1, setIsErr1] = useState(false);
	const [isErr2, setIsErr2] = useState(false);
	const [isClicked, setIsClicked] = useState(false);
	const errMessege1 = "에러메세지";
	const errMessege2 = "에러메세지";
	let names = [];

	const checkName = (e) => {
		const target = e.target;
		const isChecked = regexr.test(target.value);
		setIsErr2(false);

		if (isChecked) {
			if (target.classList[2] === "firstName") {
				setIsErr1(false);
				// eslint-disable-next-line no-undef
				names[0] = Hangul.disassemble(target.value, true);
				names[2] = target.value;
			} else {
				setIsErr2(false);
				// eslint-disable-next-line no-undef
				names[1] = Hangul.disassemble(target.value, true);
				names[3] = target.value;
			}
		} else {
			if (target.classList[2] === "firstName") {
				setIsErr1(true);
			} else if (target.classList[2] === "secondName") {
				setIsErr2(true);
			}
		}
	};

	const beforeLocation = (e) => {
		if (
			names[0] != null &&
			names[1] != null &&
			!isErr1 &&
			!isErr2 &&
			names[2].length === 3 &&
			names[3].length === 3
		) {
			setIsClicked(true);
		} else {
			e.preventDefault();
			console.log(names[0][2]);
			if (
				names[0][2] === undefined ||
				names[0][1] === undefined ||
				names[2].length !== 3
			) {
				setIsErr1(true);
			}
			if (
				names[1][2] === undefined ||
				names[1][1] === undefined ||
				names[3].length !== 3
			) {
				setIsErr2(true);
			}
		}
	};

	return (
		<div>
			{isClicked ? <Loading></Loading> : null}
			<S.Container>
				<S.VioletText>두 분의 이름을 입력해주세요</S.VioletText>
				<S.NameContainer>
					<div>
						<S.NameInput
							maxLength={3}
							placeholder="이름"
							color={isErr1 ? "#FF0000" : "white"}
							onChange={checkName}
							className="firstName"
							type="text"
						></S.NameInput>
						<S.ErrMessege>{isErr1 ? errMessege1 : ""}</S.ErrMessege>
					</div>
					<div>
						<S.NameInput
							maxLength={3}
							placeholder="이름"
							color={isErr2 ? "#FF0000" : "white"}
							onChange={checkName}
							className="secondName"
							type="text"
						></S.NameInput>
						<S.ErrMessege>{isErr2 ? errMessege2 : ""}</S.ErrMessege>
					</div>
				</S.NameContainer>
				<Link
					onClick={beforeLocation}
					to={{
						pathname: "/match/result",
					}}
					state={{ names: names }}
					style={{ textDecoration: "none" }}
				>
					<S.TextContainer>궁합 보기</S.TextContainer>
				</Link>
			</S.Container>
		</div>
	);
};

export default Match;
