import { useNavigate } from "react-router-dom";
import * as S from "./NotFound.style";

export const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <S.NotFoundBox>
      <S.NotFoundWrapper>
        <S.Title>존재하지 않는 페이지 입니다.</S.Title>
        <S.Links>
          <button onClick={goBack}>이전 페이지로 이동</button>
        </S.Links>
      </S.NotFoundWrapper>
    </S.NotFoundBox>
  );
};
