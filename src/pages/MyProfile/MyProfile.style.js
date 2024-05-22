import styled from "styled-components";

export const ProfileInfoMainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileTitle = styled.h2`
  font-size: 1.5rem;
  color: #112d4e;
  align-self: start;
  cursor: default;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
`;

export const ProfileInfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//프로필 이미지 박스
export const ProfileImgBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    &::before {
      content: "프로필 수정";
      position: absolute;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 174px;
      height: 174px;
      color: #ffffff;
      background-color: #000000;
      opacity: 0.65;
    }
  }
`;

//프로필 이미지
export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`;

//프로필 텍스트박스
export const ProfileTextBox = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;

  .nickname {
    padding: 0.5rem;
    border-radius: 20px;
    background-color: #dbe2ef;
  }
`;
