import styled from "styled-components";

//프로필 전체 박스
export const ProfileInfoMainBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

//프로필 제목
export const ProfileTitle = styled.h2`
  font-size: 1.5rem;
  color: #112d4e;
  margin-bottom: 16px;
  align-self: start;
  cursor: default;
`;

//프로필 내용 & 버튼 폼 박스
export const InfoAndBtnFormBox = styled.form`
  width: 60%;
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
  gap: 16px;
`;

//프로필 이미지 박스
export const ProfileImgBox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//프로필 이미지
export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

//프로필 텍스트박스
export const ProfileTextBox = styled.div`
  flex: 1;
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
  /* 자식 input, div 태그 스타일 적용 */
  input,
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 20px;
    padding: 8px;
    text-align: center;
    background-color: #dbe2ef;
  }
  div {
    color: gray;
  }
`;

//버튼박스
export const EditButtonBox = styled.div`
  margin-top: 24px;
  width: 100%;
  display: grid;
  gap: 12px;
  grid-template-columns: 100px 1fr;
  div {
    display: flex;
    align-items: center;
  }
`;
//TODO 버튼 컴포넌트화 하기
//변경사항 저장
export const ProfileEditButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #3f72af;
  border-radius: 12px;
  color: white;
  cursor: pointer;
`;

//사진 수정
export const ImgEditButton = styled.label`
  display: block;
  width: 100%;
  height: 30px;
  background-color: #3f72af;
  border-radius: 12px;
  color: white;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
`;

/**-------비밀번호 변경, 회원탈퇴 컴포넌트 시작 ----------- */

//패스워드, 회원탈퇴 메인 박스
export const PasswordAndUserOutBox = styled.div`
  width: 100%;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid #dbe2ef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

//비밀번호 변경 제목
export const PwdTitle = styled.h2`
  font-size: 1rem;
  color: #112d4e;
  align-self: start;
  cursor: default;
`;

//패스워드 폼 박스
export const PwdFormBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//패스워드 폼
export const PwdForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 6fr;
  column-gap: 12px;
  row-gap: 24px;
  label {
    color: #112d4e;
    font-weight: 600;
    text-align: right;
    line-height: 30px;
  }
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 20px;
    padding: 8px;
    background-color: #dbe2ef;
    text-align: center;
  }
`;
//변경사항 저장 버튼
export const PwdEditButton = styled.button`
  grid-column: 2/3;
  grid-row: 4/5;
  width: 100%;
  height: 40px;
  background-color: #3f72af;
  border-radius: 12px;
  color: white;
`;

/**회원 탈퇴 */
export const UseroutBtnBox = styled.div`
  margin-top: 40px;
  padding-top: 16px;
  border-top: 1px solid #dbe2ef;
  width: 60%;
  display: flex;
  justify-content: end;
  button {
    font-size: 0.8rem;
    color: #dbe2ef;
  }
`;
