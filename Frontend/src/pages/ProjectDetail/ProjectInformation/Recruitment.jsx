import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLeaf, faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import * as S from "./ProjectInformation.style";

export const Recruitment = () => {
  return (
    <div>
      <S.RecruitmentTitleBox>
        <S.InfoTitle>모집 인원</S.InfoTitle>
        <S.ApplyButton>지원하기</S.ApplyButton>
      </S.RecruitmentTitleBox>

      <S.RoleIconBox>
        <div>
          <FontAwesomeIcon icon={faPen} style={{ color: "#3C82F6" }} />
          <span>기획: 1명</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faLeaf} style={{ color: "#32C967" }} />
          <span>디자인: 1명</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCode} style={{ color: "#A855F7" }} />
          <span>프론트엔드: 1명</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faDatabase} style={{ color: "#F15050" }} />
          <span>백엔드: 1명</span>
        </div>
      </S.RoleIconBox>
    </div>
  );
};
