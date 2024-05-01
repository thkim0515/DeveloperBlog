import React from "react";
import * as S from "./Layout.style";

export const Footer = () => {
  return (
    <S.FooterBox>
      <S.DevelopersBox>
        <h4>developers</h4>
        <div>김태헌</div>
        <div>이효정</div>
        <div>정세은</div>
      </S.DevelopersBox>
      <S.CorporationBox>
        <div>React</div>
        <div>Express</div>
        <div>MongoDB</div>
        <div>Node.js</div>
        <div>OpenAI</div>
        <div>AWS</div>
        <div>
          Icons by{" "}
          <a
            href="https://icons8.kr/"
            style={{ "textDecoration": "underline" }}
          >
            Icons8
          </a>{" "}
        </div>
        <div>GoogleFont</div>
      </S.CorporationBox>
    </S.FooterBox>
  );
};
