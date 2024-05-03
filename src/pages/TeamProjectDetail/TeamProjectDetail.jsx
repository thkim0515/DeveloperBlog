// components
import { ProjectInformation } from "./ProjectInformation/ProjectInformation";
import { ProjectContent } from "./ProjectContent/ProjectContent";
import { ProjectComments } from "./ProjectComments/ProjectComments";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export const TeamProjectDetail = () => {
  const location = useLocation();
  const { props } = location.state;

  return (
    <TeamProjectDetailBox>
      <ProjectInformation props={props} />
      <ProjectContent content={props.content} />
      <ProjectComments content_id={props._id} />
    </TeamProjectDetailBox>
  );
};

const TeamProjectDetailBox = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 0.25rem 3.5rem 0.75rem 3.5rem;
`;
