import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./PostDetailComp.style";
import { PostDetailComment } from "./PostDetailComment";

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

  //드롭박스 열기/닫기 상태관리
  const [isDropOpen, setIsDropOpen] = useState(false);

  //드롭박스 참조
  const dropMenuRef = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (isDropOpen && !dropMenuRef.current.contains(e.target)) {
        setIsDropOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [isDropOpen]);

  return (
    <>
      {image.imagePath && (
        <S.SContainer>
          <S.STitle>
            <div className="img_box">
              <img src={`../svg/${image.language}.svg`} alt="" />{" "}
              {/* alt={image.language} */}
            </div>
            <h3>{image.title}</h3>
            <S.WriterBox className="writer-box" ref={dropMenuRef}>
              <div
                className="drop-box-btn"
                onClick={() => {
                  setIsDropOpen(!isDropOpen);
                }}
              >
                ...
              </div>
              <S.DropList $isOpen={isDropOpen}>
                <button>수정하기</button>
                <button>삭제하기</button>
              </S.DropList>
            </S.WriterBox>
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
            <p>{image.ace_contents}</p>
            <br></br>
            <div dangerouslySetInnerHTML={{ __html: image.toast_contents }} />
            <button onClick={handleGoBack}>뒤로가기</button>
          </S.SImageContent>
          <PostDetailComment />
        </S.SContainer>
      )}
    </>
  );
};
