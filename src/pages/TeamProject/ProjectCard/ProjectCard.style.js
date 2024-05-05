import styled from "styled-components";

export const ProjectCardBox = styled.div`
  max-width: 320px;
  width: 100%;
  height: 280px;
  margin-top: 2.5rem;
  padding: 1.25rem 1.375rem 1.375rem;
  background-color: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  box-shadow: 13px 15px 14px -5px rgba(212, 207, 207, 0.75);
  -webkit-box-shadow: 13px 15px 14px -5px rgba(212, 207, 207, 0.75);
  -moz-box-shadow: 13px 15px 14px -5px rgba(212, 207, 207, 0.75);
  cursor: pointer;
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.625rem;
`;

export const ProjectViews = styled.span`
  margin-left: 0.5rem;
`;

export const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const ProjectHashTagBox = styled.div`
  margin-top: 0.375rem;
  font-size: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;

  span:not(:last-child) {
    margin-right: 0.375rem;
  }
`;

export const ProjectHashTag = styled.span`
  display: inline-block;
  color: #f542f4;
  font-weight: bold;
  font-size: 0.813rem;
  line-height: 0.813rem;
`;

export const ProjectTitle = styled.p`
  max-width: 16rem;
  padding: 0.625rem 0;
  font-size: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const projectStackBox = styled.ul`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 0.375rem;
  margin-bottom: 0.625rem;

  li {
    width: 30px;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const ProjectRoleBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li:not(:last-child) {
    margin-right: 0.375rem;
  }
`;

export const ProjectRole = styled.li`
  display: inline-block;
  padding: 0.188rem 0.625rem;
  height: 22px;
  background: #f2f4f8;
  border-radius: 14px;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 0.75rem;
  color: #3e86f5;
`;

export const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0.5rem 0.625rem;
`;
