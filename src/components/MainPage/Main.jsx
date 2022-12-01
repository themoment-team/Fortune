import * as S from "./style";

const Main = () => {
	return (
		<div>
			<div className="container">
				<div className="container-title">
					<S.text>Fortune</S.text>
				</div>
				<div className="container-buttons">
					<S.button>운세보기</S.button>
					<S.button>궁합보기</S.button>
				</div>
			</div>
		</div>
	);
};
export default Main;
