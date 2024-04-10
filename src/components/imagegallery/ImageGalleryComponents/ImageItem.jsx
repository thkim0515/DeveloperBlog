import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ImageItem.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";

export const ImageItem = ({ content }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (content) {
      navigate(`/post/${content.pid}`, { state: { content } });
    }
  };

  const timeString = (postdate) => {
    const match = postdate.match(/(\d{4}).(\d{2}).(\d{2})/);

    if (match) {
      const year = match[1].substr(-2);
      const month = match[2];
      const day = match[3];

      return `${year}.${month}.${day}`;
    }
  };

  const formattedDate = timeString(content.postdate);

  return (
    <>
      {content && (
        <S.SItem>
          <S.RoutingPage onClick={handleImageClick}>
            {content.imagePath && (
              <img
                src={content.imagePath}
                alt={content.title}
                className="post_img"
              />
            )}
            {content.language && (
              <img
                src={`/svg/${content.language.toLowerCase()}.svg`}
                alt={content.language.toLowerCase()}
                className="svgIcon"
              />
            )}
            <h2>{content.title}</h2>
          </S.RoutingPage>
          <div className="user_date_box">
            <S.SProfileImage title="프로필">
              {content.profileImg && (
                <S.ProfileImage
                  src={content.profileImg}
                  alt={content.profileImg}
                />
              )}
            </S.SProfileImage>
            <div className="user_info">
              <p className="user_write_info">{content.nickname}</p>
            </div>
            <p className="user_write_info">
              <p>{formattedDate}</p>
              <FontAwesomeIcon icon={faEye} style={{ margin: "0 10px" }} />
              {content.views}
              <br />
              <FontAwesomeIcon icon={faComment} style={{ margin: "0 10px" }} />
              {content.commentCount}
            </p>
          </div>
        </S.SItem>
      )}
    </>
  );
};
