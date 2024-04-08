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

  const timeString = (postdate) => {
    const match = postdate.match(/(\d{4}).(\d{2}).(\d{2})/);

    if (match) {
      const year = match[1].substr(-2);
      const month = match[2];
      const day = match[3];

      return `${year}-${month}-${day}`;
    }
  };

  const formattedDate = timeString(image.postdate);

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
            </p>
          </div>
        </S.SItem>
      )}
    </>
  );
};
