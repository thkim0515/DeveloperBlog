import styled from 'styled-components';

//프로필 페이지 전체 박스
export const ProfileInfoMainBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:80px;
`;

//프로필 제목
export const ProfileTitle = styled.h2`
  font-size: 1.5rem;
  color: #112d4e;
  align-self: start;
  cursor: default;
`;

//프로필 내용 & 버튼 박스
export const InfoAndBtnBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


//프로필 이미지& 텍스트 박스
export const ProfileInfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:16px;
`;

//프로필 이미지 박스
export const ProfileImgBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//프로필 이미지
export const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

//프로필 텍스트박스
export const ProfileTextBox = styled.div`
  flex:1;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 4fr;
  column-gap: 12px;
  row-gap: 24px;
`;

//텍스트 박스 아이템들
export const TextBoxItem = styled.div`
  display: flex;
  align-items: center;
  /* 이메일 박스에 적용되는 스타일 */
  &:nth-child(6) {
    grid-column: 2/5;
  }
  /* 자식 p태그 스타일 적용 */
  p {
    color: #112d4e;
    font-weight: 600;
    text-align: left;
  }
  /* 자식 div 태그 스타일 적용 */
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    background-color: #dbe2ef;
  }
`;

//정보 수정 버튼
export const ProfileEditButton = styled.button`
  width: 100%;
  margin-top: 24px;
  height: 40px;
  background-color: #3f72af;
  border-radius: 12px;
  color: white;
`;