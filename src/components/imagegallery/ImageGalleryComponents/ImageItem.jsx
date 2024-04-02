import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ImageItem.style";

export const ImageItem = ({ image }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (image) {
      navigate(`/post/${image.pid}`, { state: { image } });
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().substr(-2); // 연도의 마지막 두 자리
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월
    const day = date.getDate().toString().padStart(2, "0"); // 일

    return `${year}년${month}월${day}일`;
  }

  const formattedDate = formatDate(image.postdate);

  return (
    <>
      {image && (
        <S.SItem>
          <S.RoutingPage onClick={handleImageClick}>
            {image.imagePath && (
              <img
                src={image.imagePath}
                alt={image.title}
                className="post_img"
              />
            )}
            {image.language && (
              <img
                src={`/svg/${image.language.toLowerCase()}.svg`}
                alt={image.language.toLowerCase()}
                className="svgIcon"
              />
            )}
            <h2>{image.title}</h2>
          </S.RoutingPage>
          <div className="user_date_box">
            <S.SProfileImage title="프로필">
              {image.profileImg && (
                <S.ProfileImage src={image.profileImg} alt={image.profileImg} />
              )}
            </S.SProfileImage>
            <div className="user_info">
              <p className="user_write_info">{image.nickname}</p>
            </div>
            <p className="user_write_info">
              <p>{formattedDate}</p>
              {/* {new Date(image.postdate).toLocaleString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false, // 24시간제 사용
              })} */}
            </p>
          </div>
        </S.SItem>
      )}
    </>
  );
};
