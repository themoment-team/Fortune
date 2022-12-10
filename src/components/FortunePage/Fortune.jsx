import * as S from "./style";
import fortune from "../../imgs/fortune.png";
import Loading from "../LoadingPage/Loading";
import { useState, useEffect } from "react";

const Fortune = () => {
  const [isClick, setIsClick] = useState(false);
  const showLoading = () => {
    setIsClick(true);
  };

  return (
    <div>
      {isClick && <Loading serIsClick={setIsClick} />}
      <S.Container>
        <S.ClickFortuneImg src={fortune} />
        <S.ClcikInsteadFortuneImg onClick={showLoading}>
          <S.ClickText>touch!</S.ClickText>
        </S.ClcikInsteadFortuneImg>
      </S.Container>
    </div>
  );
};

export default Fortune;
