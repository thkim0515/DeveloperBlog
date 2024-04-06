import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./PostDetailComp.style";

function SafeHTMLComponent({ htmlContent }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export const PostDetailComp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const { image } = location.state;

  const history = useNavigate();
  const handleGoBack = () => {
    history(-1);
  };

  function formatDateWithTime(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().substr(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
  }

  return (
    <>
      {image.imagePath && (
        <S.SContainer>
          <S.STitle>
            <div>
              <img src={`../svg/${image.language}.svg`} alt="" />{" "}
              {/* alt={image.language} */}
            </div>
            <h3>{image.title}</h3>
            <span>...</span>
          </S.STitle>
          <S.SSpace>
            {/* <img src={`../${image.imagePath}`} alt={image.title} /> */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <S.SProfileImage title="프로필">
                {image.profileImg && (
                  <S.ProfileImage
                    src={`../${image.imagePath}`}
                    alt={image.profileImg}
                  />
                )}
              </S.SProfileImage>

              {image.nickname}
            </div>
            <div>{formatDateWithTime(image.postdate)}</div>
          </S.SSpace>
          <S.SImageContent>
            <img src={`../${image.imagePath}`} alt={image.title} />
            <p>{image.ace_contents}</p>
            <br></br>
            <p>
              {image.toast_contents && (
                <p>{image.toast_contents.replace(/(<([^>]+)>)/gi, "")}</p>
              )}
            </p>
            <button onClick={handleGoBack}>뒤로가기</button>
          </S.SImageContent>
        </S.SContainer>
      )}
    </>
  );
};
