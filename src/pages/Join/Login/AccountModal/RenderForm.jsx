import * as S from "./AccountModal.style";

// component
import { Input } from "../../../../components/form/Input";

export const RenderForm = ({ active, onChange, onClick, userId }) => (
  <form>
    {/* 아이디 찾기 */}
    <S.FormField>
      <label htmlFor="field1">
        {active === "findId" ? "이메일" : "아이디"}
      </label>
      <Input
        type={active === "findId" ? "email" : "text"}
        id="field1"
        onChange={onChange}
      />
    </S.FormField>
    <S.FormField>
      <label htmlFor="field2">
        {active === "findId" ? "비밀번호" : "이메일"}
      </label>
      <Input
        type={active === "findId" ? "password" : "email"}
        id="field2"
        onChange={onChange}
      />
    </S.FormField>

    {/* 찾기 버튼 */}
    <S.Button onClick={onClick}>
      {active === "findId" ? "아이디 찾기" : "비밀번호 찾기"}
    </S.Button>

    {/* userId 상태가 있을 때 아이디 보여주기 */}
    {userId && (
      <p>
        아이디는 <span>{userId}</span>입니다.
      </p>
    )}
  </form>
);
