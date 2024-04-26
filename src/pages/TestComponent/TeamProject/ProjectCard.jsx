import * as S from "./TeamProject.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";

export const TeamprojectCard = ({ props }) => {
  return (
    <S.ProjectCardBox>
      <S.ProjectHeader>
        <span>{`모집기간: ${props.startDate}`}</span>
        <div>
          <FontAwesomeIcon icon={faEye} />
          <S.ProjectViews>{props.views}</S.ProjectViews>
        </div>
      </S.ProjectHeader>
      <S.ProjectBody>
        <S.ProjectHashTagBox>
          {props.hashTags.map((item, idx) => (
            <S.ProjectHashTag key={idx}>{item}</S.ProjectHashTag>
          ))}
        </S.ProjectHashTagBox>
        <S.ProjectTitle>{props.title}</S.ProjectTitle>
        <S.projectStackBox>
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faNodeJs} />
        </S.projectStackBox>
        <S.ProjectRoleBox>
          {props.roles.map((item, idx) => (
            <S.ProjectRole key={idx}>{item}</S.ProjectRole>
          ))}
        </S.ProjectRoleBox>
      </S.ProjectBody>
      <S.ProjectFooter>
        <div>
          <img src={props.profileImage} alt="" width={20} />
          <span>{props.nickname}</span>
        </div>
        <span>{`${props.recruitmentCompleted}/${props.tableOfOrganiztion}`}</span>
      </S.ProjectFooter>
    </S.ProjectCardBox>
  );
};
