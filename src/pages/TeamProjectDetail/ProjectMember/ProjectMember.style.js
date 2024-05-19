// ProjectMember.style.js
import styled from "styled-components";

export const Container = styled.div`
  margin: 6px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  font-size: 1rem;

  h3 {
    font-weight: bold;
    font-size: 1.1rem;
    padding: 20px 0;
    color: #112d4e;
    margin-right: 10px;
  }
`;

export const MemberConatiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const MmeberList = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
`;

export const MemberItem = styled.div`
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

export const ParticipateConatiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 2px;
`;

export const ParticipateButton = styled.button``;

export const ParticipateList = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
`;
