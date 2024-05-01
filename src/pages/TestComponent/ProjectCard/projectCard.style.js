import styled from "styled-components";

export const ProjectCardBox = styled.div`
  width: 20rem;
  height: 15rem;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.75rem 1.3rem 0.75rem 1.3rem;
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const ProjectViewBox = styled.div``;

export const ProjectViews = styled.span`
  margin-left: 0.5rem;
`;

export const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0 1.25rem 0;
`;

export const ProjectHashTagBox = styled.div`
  span:not(:last-child) {
    margin-right: 0.438rem;
  }
`;

export const ProjectHashTag = styled.span`
  display: inline-block;
  color: #e31ce7;
  font-size: 0.875rem;
`;

export const ProjectTitle = styled.p`
  font-size: 1.125rem;
`;

export const projectStackBox = styled.div`
  svg:not(:last-child) {
    margin-right: 1.25rem;
  }

  svg {
    font-size: 2rem;
  }
`;

export const ProjectRoleBox = styled.div`
  span:not(:last-child) {
    margin-right: 0.25rem;
  }
`;

export const ProjectRole = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  background-color: #d8d8d8;
  border-radius: 20px;
`;

export const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
