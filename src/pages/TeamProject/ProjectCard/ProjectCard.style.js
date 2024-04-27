import styled from "styled-components";

export const ProjectCardBox = styled.div`
  width: 22rem;
  height: auto;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 4px;
  padding: 1rem 2rem;
  cursor: pointer;
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

export const ProjectViews = styled.span`
  margin-left: 0.5rem;
`;

export const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
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

export const projectStackBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  li {
    width: 34px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProjectRoleBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const ProjectRole = styled.li`
  display: inline-block;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  background-color: #d8d8d8;
  border-radius: 20px;
`;

export const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;
