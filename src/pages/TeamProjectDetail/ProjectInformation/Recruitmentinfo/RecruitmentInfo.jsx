import * as S from "./RecruitmentInfo.style";
import { translateRoleToKr } from "../../../../utils/convertToTemplate";
import { timeString } from "../../../../utils/timeString";
import { useSelector } from "react-redux";

export const RecruitmentInfo = (...props) => {
  const bucketUrl = useSelector(state => state.bucketUrl);
  const imageUrl = bucketUrl ? bucketUrl.imageUrl : "";
  const infoData = props[0];

  return (
    <>
      <S.UuorderListBox>
        <S.Ul className="recruitment-info-list">
          <S.Li>
            <span className="title">모집 기간</span>
            <span>{timeString(infoData.startDate)}</span>
            <span>~</span>
            <span>{timeString(infoData.endDate)}</span>
          </S.Li>
          <S.Li>
            <span className="title">모집 분야</span>
            <S.RoleBox>
              {infoData.roles.map((tag, index) => (
                <li key={index}>{translateRoleToKr(tag)}</li>
              ))}
            </S.RoleBox>
          </S.Li>
          <S.Li>
            <span className="title">모집 인원</span>
            <span>{infoData.memberList.length}</span>
            <span>/</span>
            <span>{infoData.tableOfOrganization}</span>
          </S.Li>
          <S.Li>
            <span className="title">사용 기술</span>
            {infoData.stacks.map((stack, idx) => (
              <S.IconBox key={idx}>
                <img src={`${imageUrl}svgs/${stack}.svg`} alt={stack} />
              </S.IconBox>
            ))}
          </S.Li>
        </S.Ul>
      </S.UuorderListBox>
    </>
  );
};
