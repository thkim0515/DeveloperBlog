import * as S from "./Banner.style";
import { useState, useEffect } from "react";

export const Banner = () => {
  const messages = [
    "// 당신의 코딩여정, 우리가 해석하고 기록합니다.",
    "공부한 코드를 간단히 업로드하고, <br />AI로 주석을 생성해 공부에 도움을 줄 수 있습니다.",
    "OpenAI가 코드를 분석해 핵심 개념과 흐름을 설명하는 <br />주석을 자동으로 추가해줍니다.",
    "저장된 코드를 체계적으로 관리하고<br /> 과거에 작성한 코드도 쉽게 찾아볼 수 있습니다.",
    "코드와 설명을 정리하여 <br />나만의 학습 히스토리를 만들어갈 수 있습니다.",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // 페이드아웃 시작
      setTimeout(() => {
        setCurrentMessage(prevMessage => (prevMessage + 1) % messages.length);
        setIsFading(false); // 페이드인 시작
      }, 500); // 페이드아웃 시간과 동일
    }, 3000); // 3초마다 메시지 변경
    return () => clearInterval(interval);
  }, []);

  return (
    <S.BannerBox>
      <S.Banner>
        <S.BannerText $isFading={isFading} dangerouslySetInnerHTML={{ __html: messages[currentMessage] }} />
      </S.Banner>
    </S.BannerBox>
  );
};
