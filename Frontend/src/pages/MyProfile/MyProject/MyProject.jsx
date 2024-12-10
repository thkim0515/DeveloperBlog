import styled from "styled-components";
import { ProjectCard } from "../../../components/ProjectCard/ProjectCard";
import { WriteButton } from "../../../components/common/WriteButton";

const MyProjectBox = styled.div`
  position: relative;

  button {
    position: absolute;
    top: -70px;
    right: -650px;
  }
`;

export const MyProject = ({ data }) => {
  return (
    <MyProjectBox>
      <WriteButton project />
      {data.map((data, idx) => (
        <ProjectCard key={idx} data={data} />
      ))}
    </MyProjectBox>
  );
};
