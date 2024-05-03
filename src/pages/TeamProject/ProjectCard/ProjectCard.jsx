import * as S from "./ProjectCard.style";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

// components
import { UserProfileBox } from "../../../components/user/UserProfileBox";

export const ProjectCard = ({ props }) => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    if (props) {
      navigate(`/project/${props._id}`, { state: { props } });
    }
  };

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
    <S.ProjectCardBox onClick={handleImageClick}>
      {/*  */}
      <S.ProjectHeader>
        <div>
          <FontAwesomeIcon icon={faCalendarDays} />
          <span>{` ${timeString(props.startDate)}`}</span>
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
          {props.stacks.map((stack) => {
            return (
              <li key={stack}>
                <img
                  src={`https://starblog-bucket.s3.ap-northeast-2.amazonaws.com/svgs/${stack.toLowerCase()}.svg`}
                  alt={stack}
                />
              </li>
            );
          })}
        </S.projectStackBox>
        <S.ProjectRoleBox>
          {Object.keys(props.roles).map((key, idx) => (
            <S.ProjectRole key={idx}>{props.roles[key]}</S.ProjectRole>
          ))}
        </S.ProjectRoleBox>
      </S.ProjectBody>

      {/*  */}
      <S.ProjectFooter>
        <UserProfileBox nickname={props.userId.nickname} />
        <span>{`${props.memberList.length}/${props.tableOfOrganiztion}`}</span>
      </S.ProjectFooter>
    </S.ProjectCardBox>
  );
};
