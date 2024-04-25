import * as S from "./TeamProject.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";

export const TeamProject = () => {
  return (
    <S.ProjectCardBox>
      <S.ProjectHeader>
        <span>모집기간: D-20</span>
        <S.ProjectViewBox>
          <FontAwesomeIcon icon={faEye} />
          <S.ProjectViews>32</S.ProjectViews>
        </S.ProjectViewBox>
      </S.ProjectHeader>
      <S.ProjectBody>
        <S.ProjectHashTagBox>
          <S.ProjectHashTag>#SNS</S.ProjectHashTag>
          <S.ProjectHashTag>#플랫폼</S.ProjectHashTag>
        </S.ProjectHashTagBox>
        <S.ProjectTitle>gps 기반 기온별 옷차림 공유 사이트</S.ProjectTitle>
        <S.projectStackBox>
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faNodeJs} />
        </S.projectStackBox>
        <S.ProjectRoleBox>
          <S.ProjectRole>기획자</S.ProjectRole>
          <S.ProjectRole>디자이너</S.ProjectRole>
          <S.ProjectRole>프론트</S.ProjectRole>
          <S.ProjectRole>백엔드</S.ProjectRole>
        </S.ProjectRoleBox>
      </S.ProjectBody>
      <S.ProjectFooter>
        <div>
          <img alt="user" width={20} />
          <span>닉네임</span>
        </div>
        <span>2/5</span>
      </S.ProjectFooter>
    </S.ProjectCardBox>
  );
};

// svg 이미지 불러오기
// svgImages.map((svgName, idx) => {
//   return (
//     <img
//       key={idx}
//       src={`/svg/${svgName}.svg`}
//       alt={svgName}
//       onClick={() => handleUpdateSelectedIcon(svgName)}
//       style={{
//         cursor: "pointer",
//         backgroundColor:
//           svgName === selectedIcon && svgName !== "back"
//             ? "#fff"
//             : "transparent",
//         padding:
//           svgName === selectedIcon && svgName !== "back"
//             ? "4px"
//             : "0",
//       }}
//     />
//   );
// })
