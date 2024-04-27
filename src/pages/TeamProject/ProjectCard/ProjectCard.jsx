import * as S from "./ProjectCard.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

// components
import { UserProfileBox } from "../../../components/user/UserProfileBox";

export const ProjectCard = ({ props }) => {
  return (
    <S.ProjectCardBox>
      {/*  */}
      <S.ProjectHeader>
        <div>
          <FontAwesomeIcon icon={faCalendarDays} />
          <span>{` ${props.startDate}`}</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faEye} />
          <S.ProjectViews>{props.views}</S.ProjectViews>
        </div>
      </S.ProjectHeader>

      {/*  */}
      <S.ProjectBody>
        <S.ProjectHashTagBox>
          {props.hashTags.map((item, idx) => (
            <S.ProjectHashTag key={idx}>{item}</S.ProjectHashTag>
          ))}
        </S.ProjectHashTagBox>
        <S.ProjectTitle>{props.title}</S.ProjectTitle>
        <S.projectStackBox>
          {Object.keys(props.stacks).map((key, idx) => (
            <li key={idx}>
              <img src={props.stacks[key]} alt={key} />
            </li>
          ))}
        </S.projectStackBox>
        <S.ProjectRoleBox>
          {Object.keys(props.roles).map((key, idx) => (
            <S.ProjectRole key={idx}>{props.roles[key]}</S.ProjectRole>
          ))}
        </S.ProjectRoleBox>
      </S.ProjectBody>

      {/*  */}
      <S.ProjectFooter>
        <UserProfileBox nickname={props.nickname} />
        <span>{`${props.recruitmentCompleted}/${props.tableOfOrganiztion}`}</span>
      </S.ProjectFooter>
    </S.ProjectCardBox>
  );
};
