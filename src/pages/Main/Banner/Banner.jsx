import * as S from "./Banner.style";

export const Banner = () => {
  return (
    <S.BannerBox>
      <S.Banner>
        <S.BannerText>
          {`// 당신의 코딩여정,`}
          <br />
          {`// 우리가 해석하고 기록합니다`}
        </S.BannerText>
      </S.Banner>
    </S.BannerBox>
  );
};
