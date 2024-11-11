import React from "react";
import * as S from "./Layout.style";
import axios from "axios";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [visitorCount, setVisitorCount] = useState([]);

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        const res = await axios.get("/visitor/visitor");
        setVisitorCount(res.data);
      } catch (error) {
        console.error("err", error);
      }
    };
    fetchVisitorData();
  }, []);

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
          <a href="https://icons8.kr/" style={{ textDecoration: "underline" }}>
            Icons8
          </a>{" "}
        </div>
        <div>GoogleFont</div>
        <div>{visitorCount}</div>
      </S.CorporationBox>
    </S.FooterBox>
  );
};
