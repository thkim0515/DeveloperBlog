import styled, { css } from "styled-components";
import { getProfileImg } from "../../utils/getImagePath";

export const UserProfile = ({ imagePath, nickname, direction = "row" }) => {
  return (
    <UserProfileBox direction={direction}>
      <ProfileImage src={getProfileImg(imagePath)} alt="user" />
      <UserNickname direction={direction}>{nickname}</UserNickname>
    </UserProfileBox>
  );
};

const UserProfileBox = styled.div`
  display: flex;
  ${({ direction }) =>
    direction === "column"
      ? css`
          flex-direction: column;
          justify-content: center;
        `
      : css`
          flex-direction: row;
          align-items: center;
        `}
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const UserNickname = styled.span`
  ${({ direction }) => (direction === "column" ? "margin-top: 8px;" : "margin-left: 8px;")}
`;
