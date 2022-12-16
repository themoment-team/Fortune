import * as S from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResultFortune = () => {
  const [fortuneBox, setFortuneBox] = useState(false);

  const navigate = useNavigate();

  const ShowFortuneResult = () => {
    return (
      <S.ShowFortuneBox>
        <S.CloseFortune
          onClick={() => {
            setFortuneBox(false);
          }}
        >
          X
        </S.CloseFortune>
      </S.ShowFortuneBox>
    );
  };

  return (
    <div>
      <S.Container>
        {fortuneBox && (
          <>
            <ShowFortuneResult />
            <S.WrapButton>
              <S.ReturnButton onClick={() => navigate("/")}>
                돌아가기
              </S.ReturnButton>
              <S.ShareButton>공유하기</S.ShareButton>
            </S.WrapButton>
          </>
        )}
        <S.BackgroundImg
          onClick={() => {
            setFortuneBox(true);
          }}
        ></S.BackgroundImg>
      </S.Container>
    </div>
  );
};

export default ResultFortune;
