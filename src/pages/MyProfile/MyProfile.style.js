import styled from "styled-components";

export const ProfileTitle = styled.h2`
  color: #112d4e;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0;
`;

export const MyProfileBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
`;

export const ProfileInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

//프로필 이미지 박스
export const ProfileImgBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-radius: 10px;

    &::before {
      content: "프로필 수정";
      position: absolute;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: #ffffff;
      background-color: rgba(0, 0, 0, 0.65);
      font-size: 1.2rem;
      border-radius: 10px;
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

export const TeamProjectBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  grid-row-gap: 1.75rem;
  margin-top: 1.5rem;
`;
