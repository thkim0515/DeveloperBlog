import * as S from "./AccountModal.style";
import { Input } from "../../../../components/form/Input";

export const FindAccount = ({ active }) => {
  const renderForm = (label1, label2, type1, type2, buttonText) => (
    <form>
      <S.FormField>
        <label htmlFor="field1">{label1}</label>
        <Input type={type1} id="field1" />
      </S.FormField>
      <S.FormField>
        <label htmlFor="field2">{label2}</label>
        <Input type={type2} id="field2" />
      </S.FormField>
      <S.Button>{buttonText}</S.Button>
    </form>
  );

  let componentToRender;

  switch (active) {
    case "findId":
      componentToRender = renderForm(
        "이메일",
        "비밀번호",
        "email",
        "password",
        "아이디 찾기"
      );
      break;
    case "findPassword":
      componentToRender = renderForm(
        "아이디",
        "이메일",
        "text",
        "email",
        "비밀번호 찾기"
      );
      break;
    default:
      componentToRender = renderForm(
        "이메일",
        "비밀번호",
        "email",
        "password",
        "아이디 찾기"
      );
  }

  return <>{componentToRender}</>;
};
