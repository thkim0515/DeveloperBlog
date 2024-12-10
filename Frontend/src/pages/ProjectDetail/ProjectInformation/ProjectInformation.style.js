import styled from "styled-components";

export const ProjectInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  border-bottom: 1px solid #dbe2ef;
  padding: 2.25rem 0;
`;

export const InfoTitle = styled.h3`
  margin-bottom: 1.25rem;
  font-size: 1.25rem;
`;

// Recruitment
export const RecruitmentTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ApplyButton = styled.button`
  display: inline-block;
  background-color: #d9d9d9;
  border: none;
  border-radius: 20px;
  padding: 8px 12px;
  cursor: pointer;
`;

export const RoleIconBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.825rem;
`;

// ProjectStack
export const StackBox = styled.li`
  display: inline-block;
  width: 36px;
  height: 36px;

  img {
    width: 100%;
    height: 100%;
  }
`;
