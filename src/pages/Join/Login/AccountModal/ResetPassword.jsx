import * as S from './AccountModal.style';

// component
import { Input } from './../../../../components/form/Input';

export const ResetPassword = () => {
  return (
    <>
      <form>
        <S.FormField>
          <label htmlFor="password">새로운 비밀번호</label>
          <Input type="password" id="password" />
        </S.FormField>
        <S.FormField>
          <label htmlFor="re-password">새로운 비밀번호 재입력</label>
          <Input type="password" id="re-password" />
        </S.FormField>
        <S.Button>비밀번호 변경</S.Button>
      </form>
    </>
  );
};
