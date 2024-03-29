import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ImageItem.style";

export const ImageItem = ({ image }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (image) {
      navigate(`/image/${image.pid}`, { state: { image } });
    }
  };

  return (
    <>
      {image && (
        <S.SItem>
          <S.RoutingPage onClick={handleImageClick}>
            {image.imagePath && <img src={image.imagePath} alt={image.title} />}
            {image.lang && (
              <img
                src={`/svg/${image.lang}`}
                alt={image.lang}
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
              <p className="user_write_info">{image.writer}</p>
            </div>
            <p className="user_write_info">{image.date}</p>
          </div>
        </S.SItem>
      )}
    </>
  );
};
