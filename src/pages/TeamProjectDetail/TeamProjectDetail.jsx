// components
import { ProjectInformation } from "./ProjectInformation/ProjectInformation";
import { ProjectContent } from "./ProjectContent/ProjectContent";
import { ProjectComments } from "./ProjectComments/ProjectComments";
import styled from "styled-components";

export const TeamProjectDetail = () => {
  return (
    <TeamProjectDetailBox>
      <ProjectInformation />
      <ProjectContent />
      <ProjectComments />
    </TeamProjectDetailBox>
  );
};

const TeamProjectDetailBox = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0.25rem 3.5rem 0.75rem 3.5rem;
  background-color: #ffffff;
`;
