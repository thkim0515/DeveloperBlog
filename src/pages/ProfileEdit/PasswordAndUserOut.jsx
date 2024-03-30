import * as S from "./ProfileEdit.style.js";

export const PasswordAndUserOut = ({ userData }) => {
  return (
    <S.PasswordAndUserOutBox>
      <S.PwdTitle>비밀번호 변경</S.PwdTitle>
      <S.PwdFormBox>
        <S.PwdForm>
          <label>현재 비밀번호</label>
          <input type="password" />
          <label>새로운 비밀번호</label>
          <input type="password" />
          <label>비밀번호 재입력</label>
          <input type="password" />
          <S.PwdEditButton>변경사항 저장</S.PwdEditButton>
        </S.PwdForm>
      </S.PwdFormBox>
      <S.UseroutBtnBox>
        <button>회원탈퇴</button>
      </S.UseroutBtnBox>
    </S.PasswordAndUserOutBox>
  );
};
