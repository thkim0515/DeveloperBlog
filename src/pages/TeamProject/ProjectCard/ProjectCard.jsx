import * as S from "./ProjectCard.style";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { translateRoleToKr } from "../../../utils/convertToTemplate";

// components
import { UserProfileBox } from "../../../components/user/UserProfileBox";

// util
import { timeString } from "./../../../utils/timeString";

export const ProjectCard = ({ data }) => {
  const navigate = useNavigate();

  const moveToProjectDetail = (id) => {
    navigate(`/project/${id}`, { state: { data } });
  };

  return (
    <S.ProjectCardBox
      key={`project-${data.pid}`}
      onClick={() => moveToProjectDetail(data._id)}
    >
      {/*  */}
      <S.ProjectHeader>
        <div>
          <span>{data.startDate ? ` ${timeString(data.startDate)}` : ""}</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faEye} />
          <S.ProjectViews>{data.views}</S.ProjectViews>
        </div>
      </S.ProjectHeader>

      {/*  */}
      <S.ProjectBody>
        <S.ProjectHashTagBox>
          {data.hashTags.map((hashTag, idx) => (
            <S.ProjectHashTag
              key={`${hashTag}-${idx}`}
            >{`#${hashTag}`}</S.ProjectHashTag>
          ))}
        </S.ProjectHashTagBox>
        <S.ProjectTitle>{data.title}</S.ProjectTitle>
        <S.projectStackBox>
          {data.stacks.slice(0, 5).map((stack, idx) => (
            <li key={`${stack}-${idx}`}>
              <img
                src={`https://starblog-bucket.s3.ap-northeast-2.amazonaws.com/svgs/${stack.toLowerCase()}.svg`}
                alt={stack}
              />
            </li>
          ))}
        </S.projectStackBox>
        <S.ProjectRoleBox>
          {Object.keys(data.roles).map((role, idx) => (
            <S.ProjectRole key={`${role}-${idx}`}>
              {translateRoleToKr(data.roles[role])}
            </S.ProjectRole>
          ))}
        </S.ProjectRoleBox>
      </S.ProjectBody>

      {/*  */}
      <S.ProjectFooter>
        <UserProfileBox nickname={data.userId.nickname} />
        <span>{`${data.memberList.length}/${data.tableOfOrganization}`}</span>
      </S.ProjectFooter>
    </S.ProjectCardBox>
  );
};
