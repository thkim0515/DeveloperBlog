import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import styled from "styled-components";

export const ProjectList = ({projectList}) => {

  return (
    <SProjectListBox>
      {projectList &&
        projectList.map((item, idx) => <ProjectCard key={idx} data={item} />)}
    </SProjectListBox>
  );
};

const SProjectListBox = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
`;
