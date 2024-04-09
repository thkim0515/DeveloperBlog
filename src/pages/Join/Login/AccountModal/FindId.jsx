import * as S from './AccountModal.style';

// component
import { Input } from './../../../../components/form/Input';

export const FindId = () => {
  const onFindId = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form>
        <S.FormField>
          <label htmlFor="email">이메일</label>
          <Input type="email" id="email" />
        </S.FormField>
        <S.FormField>
          <label htmlFor="password">비밀번호</label>
          <Input type="password" id="password" />
        </S.FormField>
        <S.Button onClick={onFindId}>아이디 찾기</S.Button>
      </form>
    </>
  );
};
