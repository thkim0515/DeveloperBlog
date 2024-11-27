import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import * as S from "./ProjectTitle.style";
import { IconData } from "../ProjectInformation/IconData";
import { timeString } from "../../../utils/timeString";

export const ProjectTitle = ({ projectData }) => {
  return (
    <S.ProjectTitleBox>
      <S.ProjectTitle>{projectData.title}</S.ProjectTitle>
      <S.ProjectSubInformatioin>
        <span>
          모집 기간: {timeString(projectData.startDate)}~{timeString(projectData.endDate)}
        </span>
        <S.ParticipantCountBox>
          <IconData
            iconElement={<FontAwesomeIcon icon={faUser} />}
            label={`${projectData.memberList.length}명 참여중`}
          />
          <IconData
            iconElement={<FontAwesomeIcon icon={faUser} />}
            label={`${projectData.participateList.length}명 지원`}
          />
        </S.ParticipantCountBox>
      </S.ProjectSubInformatioin>
    </S.ProjectTitleBox>
  );
};
