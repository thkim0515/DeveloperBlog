import styled from 'styled-components';

//프로필 전체 박스
export const ProfileInfoMainBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:15%;
`;

//프로필 제목
export const ProfileTitle = styled.h2`
  font-size: 1.5rem;
  color: #112d4e;
  margin-bottom: 16px;
  align-self: start;
`;

//프로필 내용 & 버튼 박스
export const InfoAndBtnBox = styled.div`
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
  gap:8px;
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
export const ProfileTextForm = styled.form`
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
  /* 자식 input 태그 스타일 적용 */
  input {
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
`;

//버튼박스
export const EditButtonBox = styled.div`
  margin-top: 24px;
  width: 100%;
  display: grid;
  gap: 12px;
  grid-template-columns: 100px 1fr;


`
//TODO 버튼 컴포넌트화 하기
//사진 수정, 변경사항 저장
export const ProfileEditButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: #3f72af;
  border-radius: 12px;
  color: white;
`;

/**-------비밀번호 변경 컴포넌트 시작 ----------- */

//패스워드 메인 박스
export const PasswordBox = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//비밀번호 변경 제목
export const PwdTitle = styled.h2`
  font-size: 1.5rem;
  color: #112d4e;
  margin-bottom: 32px;
  align-self: start;
`;


//패스워드 폼 박스
export const PwdFormBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
//패스워드 폼
export const PwdForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 6fr;
  column-gap: 12px;
  row-gap: 24px;
label{
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
`

/**회원 탈퇴 */
export const UseroutBtn = styled.button`
  margin-top: 24px;
  float: right;
  background-color: none;
  border: none;
  font-style: 0.5rem;
  color: #112d4e;
`