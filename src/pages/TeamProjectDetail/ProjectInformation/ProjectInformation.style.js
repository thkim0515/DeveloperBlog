import styled from "styled-components";

// informatin 줄임말 : info

export const ProjectTitle = styled.h2`
  margin-top: 40px;
  font-weight: 800;
  font-size: 36px;
  line-height: 126.5%;
  letter-spacing: -0.005em;
  color: #000;
  overflow-wrap: break-word;
`;

export const AuthorInfoBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  margin-top: 32px;
  padding-bottom: 32px;
`;

export const RecruitmentInfoBox = styled.div``;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  width: 42px;
  width: 42px;

  img:not(:last-child) {
    margin-right: 0.5rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
