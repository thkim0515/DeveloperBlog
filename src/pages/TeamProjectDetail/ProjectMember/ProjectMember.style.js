// ProjectMember.style.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  font-size: 1rem;
`;

export const MmeberList = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;

  h3 {
    font-weight: bold;
    font-size: 1.1rem;
    padding: 20px 0;
    color: #112d4e;
    margin-right: 10px;
  }
`;

export const MemberItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  padding: 4px;
  border: 2px solid #ccc;
  border-radius: 20px;
`;

export const ParticipateButton = styled.button``;

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
