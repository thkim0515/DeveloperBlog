// import * as S from "./RecruitmentInfo.style";

export const RecruitmentInfo = (...props) => {
  const infoData = props[0];

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
    <div>
      <table>
        <tbody>
          <tr>
            <td>모집 기간</td>
            <td>
              <span>{timeString(infoData.startDate)}</span>
              <span>~</span>
              <span>{timeString(infoData.endDate)}</span>
            </td>
            <td>모집 분야</td>
            <td>
              <ul>
                {infoData.roles.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>모집 인원</td>
            <td>
              <span>{infoData.memberList.length}</span>
              <span>/</span>
              <span>{infoData.tableOfOrganiztion}</span>
            </td>
            <td>사용 기술</td>
            <td>
              <ul>
                {infoData.stacks.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
