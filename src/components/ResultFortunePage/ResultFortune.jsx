import * as S from "./style";
import fortune2 from "../../imgs/fortune2.png";

const ResultFortune = () => {
  return (
    <div>
      <S.Container>
        <S.ResultFortuneImg src={fortune2} />
        <S.ClickBox></S.ClickBox>
        <S.ClckText>안녕하세요</S.ClckText>
      </S.Container>
    </div>
  );
};

export default ResultFortune;
