import styled from "styled-components";

// components
import { ProjectCreateForm } from "./ProjectCreateForm";

export const TeamProjectCreate = () => {
  return (
    <section>
      <H2>팀 프로젝트 글 작성</H2>
      <Box>
        <ProjectCreateForm />
      </Box>
    </section>
  );
};

const H2 = styled.h2`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Box = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  background-color: #ffffff;
`;
