import * as S from "./style";
import { Loading } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Fortune = () => {
  const navigate = useNavigate();

  const [isClick, setIsClick] = useState(false);

  const showLoading = () => {
    setIsClick(true);
    setTimeout(() => {
      navigate("/fortune/result");
    }, 3000);
  };

  return (
    <div>
      {isClick && <Loading serIsClick={setIsClick} />}
      <S.Container>
        <S.FortuneImgBox>
          <S.TouchText onClick={showLoading}>touch !</S.TouchText>
        </S.FortuneImgBox>
      </S.Container>
    </div>
  );
};

export default Fortune;
