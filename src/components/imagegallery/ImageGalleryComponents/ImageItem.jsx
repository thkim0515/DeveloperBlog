import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SItem,
  SProfileImage,
  ProfileImage,
  RoutingPage,
} from "./ImageItem.style";

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
        <SItem>
          <RoutingPage onClick={handleImageClick}>
            {image.imagePath && <img src={image.imagePath} alt={image.title} />}
            {image.lang && (
              <img
                src={`/svg/${image.lang}`}
                alt={image.lang}
                className="svgIcon"
              />
            )}
            <h2>{image.title}</h2>
          </RoutingPage>
          <div className="user_date_box">
            <SProfileImage title="프로필">
              {image.profileImg && (
                <ProfileImage src={image.profileImg} alt={image.profileImg} />
              )}
            </SProfileImage>
            <div className="user_info">
              <p className="user_write_info">{image.writer}</p>
            </div>
            <p className="user_write_info">{image.date}</p>
          </div>
        </SItem>
      )}
    </>
  );
};
