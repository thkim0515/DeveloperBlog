import * as S from "./ProjectCard.style";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { translateRoleToKr } from "../../../utils/convertToTemplate";
import { useSelector } from "react-redux";

// components
import { UserProfile } from "../../../components/common/UserProfile";

// util
import { timeString } from "./../../../utils/timeString";

export const ProjectCard = ({ data }) => {
  const bucketUrl = useSelector((state) => state.butketUrl.bucketUrl);
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
          {data.stacks.slice(0, 4).map((stack, idx) => (
            <li key={`stack-${idx}`}>
              <img src={`${bucketUrl}svgs/${stack}.svg`} alt={stack} />
            </li>
          ))}
        </S.projectStackBox>
        <S.ProjectRoleBox>
          {Object.keys(data.roles).map((role, idx) => (
            <S.ProjectRole key={`role-${idx}`}>
              {translateRoleToKr(data.roles[role])}
            </S.ProjectRole>
          ))}
        </S.ProjectRoleBox>
      </S.ProjectBody>

      {/*  */}
      <S.ProjectFooter>
        <UserProfile
          imagePath={data.userId.profileimg}
          nickname={data.userId.nickname}
        />
        <span>{`${data.memberList.length}/${data.tableOfOrganization}`}</span>
      </S.ProjectFooter>
    </S.ProjectCardBox>
  );
};
