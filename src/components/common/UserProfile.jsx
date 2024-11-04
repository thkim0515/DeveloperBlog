import styled from "styled-components";
import { getProfileImg } from "../../utils/getImagePath";

export const UserProfile = ({ imagePath, nickname }) => {
  return (
    <UserProfileBox>
      <ProfileImage src={getProfileImg(imagePath)} alt="user" />
      <UserNickname>{nickname}</UserNickname>
    </UserProfileBox>
  );
};

const UserProfileBox = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const UserNickname = styled.span`
  margin-left: 8px;
`;
