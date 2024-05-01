import * as S from "./ProjectInformation.style";
import { UserProfileBox } from "../../../components/user/UserProfileBox";
import { RecruitmentInfo } from "../ProjectInformation/Recruitmentinfo/RecruitmentInfo";

export const ProjectInformation = () => {
  return (
    <S.ProjectInfoBox>
      <S.ProjectTitle>
        위치기반 분실물 솔루션 서비스 LOCAT의 백-프론트엔드, 디자이너를
        모집합니다.
      </S.ProjectTitle>
      <S.HashTagBox>
        <li>#서비스</li>
        <li>#어플리케이션</li>
      </S.HashTagBox>
      <S.PostingInfoBox>
        <UserProfileBox nickname="오늘의 날씨" />
        <S.ProjectViews>
          <img src="/img/eye-solid.png" alt="views-icon" />
          <span>177</span>
        </S.ProjectViews>
        <span>2024.05.09</span>
      </S.PostingInfoBox>

      {/*  */}
      <RecruitmentInfo />
    </S.ProjectInfoBox>
  );
};
