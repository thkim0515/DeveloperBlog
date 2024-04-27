import styled from "styled-components";

// components
import { ProjectEidtForm } from "./ProjectEditForm";

export const TeamProjectEdit = () => {
  return (
    <section>
      <H2>팀 프로젝트 글 수정</H2>
      <Box>
        <ProjectEidtForm />
      </Box>
    </section>
  );
};

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 4rem;
  margin-bottom: 1.5rem;
`;

const Box = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  background-color: #ffffff;
`;
