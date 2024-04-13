import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import * as S from "./NotFound.style";

const NotFound = () => {
  const navigate = useNavigate(); // useNavigate 훅을 함수 컴포넌트 내에서 사용

  const goBack = () => {
    navigate(-1); // 페이지를 이전으로 이동
  };

  return (
    <S.NotFoundBox>
      <Helmet>
        <title>NotFound - StarBlog</title>
      </Helmet>
      <S.NotFoundWrapper>
        <S.Title>존재하지 않는 페이지 입니다.</S.Title>
        <S.Links>
          {/* onClick으로 이벤트 처리기 설정 */}
          <button onClick={goBack}>이전 페이지로 이동</button>
        </S.Links>
      </S.NotFoundWrapper>
    </S.NotFoundBox>
  );
};

export default NotFound;
