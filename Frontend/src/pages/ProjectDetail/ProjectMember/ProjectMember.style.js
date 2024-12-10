// ProjectMember.style.js
import styled from "styled-components";

export const ProjectMemberBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  margin: 6px 0;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #dbe2ef;
  font-size: 1rem;

  h3 {
    font-weight: bold;
    font-size: 1.1rem;
    padding: 20px 0;
    color: #112d4e;
    margin-right: 10px;
  }
`;

export const MemberBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const MmeberList = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 2px;
`;

export const MemberItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 8px;
  padding: 4px;
  border: 2px solid #ccc;
  border-radius: 20px;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const MemberText = styled.span`
  display: flex;
  align-items: center;
`;

export const ParticipateBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 2px;
`;

export const ParticipateButtons = styled.div`
  position: absolute;
  right: -124px;
`;

export const ParticipateList = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
`;
