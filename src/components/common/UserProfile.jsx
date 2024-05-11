import styled from "styled-components";
import { useSelector } from "react-redux";

export const UserProfile = ({ imagePath, nickname }) => {
  const imageUrl = useSelector((state) => state.butketUrl.imageUrl);

  return (
    <UserProfileBox>
      <ProfileImage src={`${imageUrl}profileImg/${imagePath}`} alt="user" />
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
