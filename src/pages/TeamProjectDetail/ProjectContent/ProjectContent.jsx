import styled from "styled-components";

export const ProjectContent = (content) => {
  return <ProjectContentBox>{content.content}</ProjectContentBox>;
};

const ProjectContentBox = styled.section`
  margin-top: 1rem;
  padding: 1.75rem 0;
  font-size: 1.125rem;
  word-break: break-all;
  line-height: 1.7;
  letter-spacing: -0.004em;
`;
