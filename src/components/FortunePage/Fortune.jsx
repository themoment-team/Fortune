import * as S from "./style";
import fortune from "../../imgs/fortune.png";
import { useState } from "react";
const Fortune = () => {
  return (
    <div>
      <S.Container>
        <S.ClickFortuneImg src={fortune} />
        <S.ClcikInsteadFortuneImg>
          <S.ClickText>touch!</S.ClickText>
        </S.ClcikInsteadFortuneImg>
      </S.Container>
    </div>
  );
};

export default Fortune;
