import * as S from "./ProjectInformation.style";
import { UserProfileBox } from "../../../components/user/UserProfileBox";
import { RecruitmentInfo } from "../ProjectInformation/Recruitmentinfo/RecruitmentInfo";

export const ProjectInformation = () => {
  return (
    <section>
      <S.RemainsInfoBox>
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
      </S.RemainsInfoBox>

      {/*  */}
      <RecruitmentInfo />
    </section>
  );
};
