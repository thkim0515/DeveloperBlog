import { useNavigate } from "react-router-dom";
import { Metas } from "./../../components/common/Metas";
import * as S from "./NotFound.style";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <S.NotFoundBox>
      <Metas title="NotFound" />
      <S.NotFoundWrapper>
        <S.Title>존재하지 않는 페이지 입니다.</S.Title>
        <S.Links>
          <button onClick={goBack}>이전 페이지로 이동</button>
          <button onClick={goBack}>이전 페이지로 이동</button>
        </S.Links>
      </S.NotFoundWrapper>
    </S.NotFoundBox>
    </S.NotFoundBox>
  );
};

export default NotFound;
};

export default NotFound;
