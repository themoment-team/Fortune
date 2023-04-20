import * as S from "./style";
import heart from "../../imgs/heart.png";
import { useState, useEffect } from "react";
import MatchLoading from "../MatchLoading";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const SharedMatch = () => {
  const [delay, setDelay] = useState(true); //로딩 화면 확인 변수

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(0);

  const navigate = useNavigate(); // 페이지 이동
  const params = useParams();

  const getResult = async (url) => {
    try {
      const res = await axios.post(url);
      const data = res.data;
      console.log(res);
      setName1(data.name1);
      setName2(data.name2);
      setResult(data.compatibility);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => setDelay(false), 3000); // 3초동안 로딩
    console.log(params.id);
    const url = `https://port-0-fortune-back-e9btb72blgnmoq2j.sel3.cloudtype.app/compatibility/info/${params.id}`;
    getResult(url);
  }, []);

  return (
    <div>
      {delay ? (
        <MatchLoading></MatchLoading>
      ) : (
        <S.Container>
          <S.VioletText>
            {name1}님과 {name2}님의 궁합은?
          </S.VioletText>
          <S.HeartDiv>
            <S.RelativeText>{result}%</S.RelativeText>
            <S.ViewPicture src={heart} />
          </S.HeartDiv>
          <S.TextContainer onClick={() => navigate("/match", {})}>
            나도 해보자!
          </S.TextContainer>
        </S.Container>
      )}
    </div>
  );
};

export default SharedMatch;
