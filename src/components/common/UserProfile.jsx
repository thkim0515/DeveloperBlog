import styled from "styled-components";

export const UserProfile = ({ imagePath, nickname }) => {
  return (
    <UserProfileBox>
      <ProfileImage
        src={`https://starblog-bucket.s3.ap-northeast-2.amazonaws.com/profileImg/${imagePath}
        `}
        alt="user"
      />
      <span>{nickname}</span>
    </UserProfileBox>
  );
};

const UserProfileBox = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  gap: 6px;
  align-items: center;
  border-radius: 50%;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;
