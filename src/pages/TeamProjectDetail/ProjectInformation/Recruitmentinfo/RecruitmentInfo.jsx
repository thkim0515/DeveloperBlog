import * as S from "./Recruitment.style";
import { IMAGE_PATHS, IMAGE_ALT_TEXT } from "../../../../utils/stacks";

export const RecruitmentInfo = () => {
  return (
    <>
      <S.RecruitmentInfoBox>
        <S.RecruitmentInfo>
          <span className="recruitment-info-title">모집 인원</span>
          <span>인원 미정</span>
        </S.RecruitmentInfo>
        <S.RecruitmentInfo>
          <span className="recruitment-info-title">모집 기간</span>
          <span>~2024.04.26</span>
        </S.RecruitmentInfo>
        <S.RecruitmentInfo>
          <span className="recruitment-info-title">연락 방법</span>
          <span>카카오 오픈채팅</span>
        </S.RecruitmentInfo>
        <S.RecruitmentInfo>
          <span className="recruitment-info-title">예상 기간</span>
          <span>기간 미정</span>
        </S.RecruitmentInfo>
      </S.RecruitmentInfoBox>

      {/*  */}
      <S.TechInfoBox>
        <li>
          <span className="recruitment-info-title">모집 분야</span>
          <S.RoleInfoBox>
            <li>프론트엔드</li>
            <li>백엔드</li>
            <li>디자이너</li>
          </S.RoleInfoBox>
        </li>
        <S.ProgramLangBox>
          <span className="recruitment-info-title">사용 언어</span>
          <S.IconBox>
            <li>
              <img src={IMAGE_PATHS.node} alt={IMAGE_ALT_TEXT.node} />
            </li>
            <li>
              <img src={IMAGE_PATHS.java} alt={IMAGE_ALT_TEXT.java} />
            </li>
            <li>
              <img src={IMAGE_PATHS.react} alt={IMAGE_ALT_TEXT.react} />
            </li>
          </S.IconBox>
        </S.ProgramLangBox>
      </S.TechInfoBox>
    </>
  );
};
