import * as S from "./ProjectInformation.style";
import { Recruitment } from "./Recruitment";
import { ProjectStack } from "./ProjectStack";

export const ProjectInformation = ({ projectData }) => {
  return (
    <S.ProjectInfoBox>
      <Recruitment />
      <ProjectStack stacks={projectData.stacks} />
      <div>
        <S.InfoTitle>연락 수단</S.InfoTitle>
        <p></p>
      </div>
    </S.ProjectInfoBox>
  );
};
