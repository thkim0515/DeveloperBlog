import styled from "styled-components";

export const ProjectDetailBox = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 0.25rem 3.5rem 0.75rem 3.5rem;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;

  .back-button {
    font-size: 1.5rem;
    width: 42px;
    height: 42px;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid #ebebeb;
      border-radius: 3px;
    }
  }
`;

// Content
export const ProjectContentBox = styled.section`
  height: 100%;
  padding: 2.25rem 0;
  font-size: 1.125rem;
  word-break: break-all;
  line-height: 1.7;
  letter-spacing: -0.004em;
  border-bottom: 1px solid #dbe2ef;
`;

// ProjectTeam
export const ProjectTeamBox = styled.div`
  padding: 2.25rem 0;
  border-bottom: 1px solid #dbe2ef;
`;

export const ProfileBox = styled.div`
  display: flex;
  gap: 1.25rem;
`;
