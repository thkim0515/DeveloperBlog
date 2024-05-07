import * as S from "./RecruitmentInfo.style";
import { translateRoleToKr } from "../../../../utils/convertToTemplate";
import { timeString } from "../../../../utils/timeString";

export const RecruitmentInfo = (...props) => {
  const infoData = props[0];

  return (
    <div>
      <S.Table>
        <tbody>
          <S.TR>
            <td className="recruitment-info-title">모집 기간</td>
            <td>
              <span>{timeString(infoData.startDate)}</span>
              <span>~</span>
              <span>{timeString(infoData.endDate)}</span>
            </td>
            <td className="recruitment-info-title">모집 분야</td>
            <td>
              <ul>
                {infoData.roles.map((tag, index) => (
                  <S.ProjectRole key={index}>
                    {translateRoleToKr(tag)}
                  </S.ProjectRole>
                ))}
              </ul>
            </td>
          </S.TR>
          <S.TR>
            <td className="recruitment-info-title">모집 인원</td>
            <td>
              <span>{infoData.memberList.length}</span>
              <span>/</span>
              <span>{infoData.tableOfOrganiztion}</span>
            </td>
            <td className="recruitment-info-title">사용 기술</td>
            <td>
              <S.IconBox></S.IconBox>
            </td>
          </S.TR>
        </tbody>
      </S.Table>
    </div>
  );
};
