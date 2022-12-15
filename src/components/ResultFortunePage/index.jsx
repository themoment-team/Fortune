import * as S from "./style";
import fortune2 from "../../imgs/fortune2.png";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../MainPage/Main";

const ResultFortune = () => {
  const [fortuneBox, setFortuneBox] = useState(false);

  const lookFortuneBox = () => {
    setFortuneBox(true);
  };

  const returnMainPage = () => {
    window.location.href = "/";
  };

  const hideFortuneBox = () => {
    setFortuneBox(false);
  };

  const ShowFortuneResult = () => {
    return (
      <S.ShowFortuneBox>
        <S.CloseFortune onClick={hideFortuneBox}>X</S.CloseFortune>
      </S.ShowFortuneBox>
    );
  };

  return (
    <div>
      <S.Container>
        {fortuneBox && <ShowFortuneResult />}
        <S.WrapButton>
          {fortuneBox && (
            <S.ReturnButton onClick={returnMainPage}>돌아가기</S.ReturnButton>
          )}
          {fortuneBox && <S.ShareButton>공유하기</S.ShareButton>}
        </S.WrapButton>
        <S.BackgroundImg
          onClick={() => {
            lookFortuneBox();
          }}
        ></S.BackgroundImg>
      </S.Container>
    </div>
  );
};

export default ResultFortune;
