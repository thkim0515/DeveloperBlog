import * as S from "./ProfileEdit.style.js";

export const PasswordEdit = () => {
  return (
    <S.PasswordBox>
      <S.PwdTitle>비밀번호 변경</S.PwdTitle>
      <S.PwdFormBox>
        <S.PwdForm>
          <label>현재 비밀번호</label>
          <input type="password" />
          <label>새로운 비밀번호</label>
          <input type="password" />
          <label>비밀번호 재입력</label>
          <input type="password" />
          <button>변경사항 저장</button>
        </S.PwdForm>
      </S.PwdFormBox>
    </S.PasswordBox>
  );
};
