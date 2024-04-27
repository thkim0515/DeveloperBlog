// components
import { ProjectInformation } from "./ProjectInformation/ProjectInformation";
import { ProjectContent } from "./ProjectContent/ProjectContent";
import { ProjectComments } from "./ProjectComments/ProjectComments";
import styled from "styled-components";

export const TeamProjectDetail = () => {
  return (
    <TeamProjectDetailBox>
      <ProjectTitle>
        위치기반 분실물 솔루션 서비스 LOCAT의 백-프론트엔드, 디자이너를
        모집합니다.
      </ProjectTitle>
      <BagroundBox>
        <ProjectInformation />
        <ProjectContent />
        <ProjectComments />
      </BagroundBox>
    </TeamProjectDetailBox>
  );
};

const TeamProjectDetailBox = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`;

const ProjectTitle = styled.h2`
  margin-top: 2.5rem;
  font-weight: 800;
  font-size: 2.25rem;
  line-height: 126.5%;
  letter-spacing: -0.005em;
  overflow-wrap: break-word;
  margin-bottom: 2rem;
  padding: 0 0.5rem;
`;

const BagroundBox = styled.div`
  background-color: #ffffff;
  padding: 0.25rem 3.5rem 0.75rem 3.5rem;
`;
