import styled from "styled-components";

export const ProjectContent = content => {
  return (
    <ProjectContentBox>
      <pre>{content.content}</pre>
    </ProjectContentBox>
  );
};

const ProjectContentBox = styled.section`
  max-height: 1200px;
  height: 100%;
  margin: 1.5rem 0;
  padding-bottom: 2.25rem;
  font-size: 1.125rem;
  word-break: break-all;
  line-height: 1.7;
  letter-spacing: -0.004em;
  border-bottom: 1px solid #dbe2ef;
`;
