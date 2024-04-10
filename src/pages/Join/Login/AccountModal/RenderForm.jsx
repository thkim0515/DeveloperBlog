import React from "react";
import * as S from "./AccountModal.style";
import { Input } from "../../../../components/form/Input";

export const RenderForm = ({ label1, label2, type1, type2, buttonText }) => (
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
