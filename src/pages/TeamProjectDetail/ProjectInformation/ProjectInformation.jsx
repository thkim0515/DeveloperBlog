import * as S from "./ProjectInformation.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const ProjectInformation = () => {
  return (
    <>
      <div>
        <S.ProjectTitle>
          위치기반 분실물 솔루션 서비스 LOCAT의 백-프론트엔드, 디자이너를
          모집합니다.
        </S.ProjectTitle>
        <S.AuthorInfoBox>
          <img alt="user" width={20} />
          <span>오늘의날씨</span>
          <span>2024.05.09</span>
        </S.AuthorInfoBox>
        <div style={{ textAlign: "right" }}>
          <FontAwesomeIcon icon={faEye} />
          <span>177</span>
        </div>
      </div>

      <S.RecruitmentInfoBox>
        <hr />
        <table>
          <tbody>
            <tr>
              <td>모집 인원</td>
              <td>인원 미정</td>
              <td>모집 기간</td>
              <td>D-20</td>
            </tr>
            <tr>
              <td>연락 방법</td>
              <td>카카오 오픈채팅</td>
              <td>예상 기간</td>
              <td>기간 미정</td>
            </tr>
            <tr>
              <td>모집 분야</td>
              <td>기획자 디자이너 프론트 백엔드</td>
              <td>사용 언어</td>
              <td>리액트 리덕스 노드 몽고디비</td>
            </tr>
          </tbody>
        </table>
        <hr />
      </S.RecruitmentInfoBox>
    </>
  );
};
