import * as S from './AccountModal.style';

// component
import { Input } from './../../../../components/form/Input';

export const FindPassword = () => {
  return (
    <>
      <form>
        <S.FormField>
          <label htmlFor="id">아이디</label>
          <Input type="id" id="id" />
        </S.FormField>
        <S.FormField>
          <label htmlFor="email">이메일</label>
          <Input type="email" id="email" />
        </S.FormField>
        <S.Button>비밀번호 찾기</S.Button>
      </form>
    </>
  );
};
