import * as S from "./ProjectInformation.style";
import { RecruitmentInfo } from "../ProjectInformation/Recruitmentinfo/RecruitmentInfo";
import { UserProfile } from "../../../components/common/UserProfile";
import { Metas } from "../../../components/common/Metas";

export const ProjectInformation = (data) => {
  const infoData = data.data;
  const timeString = (postdate) => {
    const match = postdate.match(/(\d{4}).(\d{2}).(\d{2})/);

    if (match) {
      const year = match[1].substr(-2);
      const month = match[2];
      const day = match[3];

      return `${year}.${month}.${day}`;
    }
  };

  return (
    <>
      <Metas title={infoData.title} />
      <S.ProjectInfoBox>
        <S.ProjectTitle>{infoData.title}</S.ProjectTitle>
        <S.HashTagBox>
          {infoData.hashTags.map((tag, index) => (
            <li key={index}>#{tag}</li>
          ))}
        </S.HashTagBox>
        <S.PostingInfoBox>
          <UserProfile
            imagePath={infoData.userId.profileimg}
            nickname={infoData.userId.nickname}
          />
          <S.ProjectViews>
            <img src="/img/eye-solid.png" alt="views-icon" />
            <span>{infoData.views}</span>
          </S.ProjectViews>
          <span>{timeString(infoData.startDate)}</span>
        </S.PostingInfoBox>

        {/*  */}
        <RecruitmentInfo
          startDate={infoData.startDate}
          endDate={infoData.endDate}
          memberList={infoData.memberList.length}
          tableOfOrganization={infoData.tableOfOrganization}
          stacks={infoData.stacks}
          roles={infoData.roles}
        />
      </S.ProjectInfoBox>
    </>
  );
};
