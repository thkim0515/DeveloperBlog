import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./PostDetailComp.style";

export const PostDetailComp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const { image } = location.state;

  const history = useNavigate();
  const handleGoBack = () => {
    history(-1);
  };

  return (
    <>
      {image.imagePath && (
        <S.SContainer>
          <S.STitle>
            <div>
              <img src={`../svg/${image.language}.svg`} alt={image.language} />
            </div>
            <h3>{image.title}</h3>
            <span>여기에 드롭다운메뉴 구현</span>
          </S.STitle>
          <S.SSpace>
            {/* <img src={`../${image.imagePath}`} alt={image.title} /> */}
            <S.SProfileImage title="프로필">
              {image.profileImg && (
                <S.ProfileImage
                  src={`../${image.imagePath}`}
                  alt={image.profileImg}
                />
              )}
            </S.SProfileImage>
            {image.nickname}
          </S.SSpace>
          <S.SImageContent>
            <img src={`../${image.imagePath}`} alt={image.title} />
            <p>{image.ace_contents}</p>
            <button onClick={handleGoBack}>뒤로가기</button>
          </S.SImageContent>
        </S.SContainer>
      )}
    </>
  );
};
