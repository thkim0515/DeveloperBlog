import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ImageItem.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";

export const ImageItem = ({ content }) => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    if (content) {
      navigate(`/post/${content._id}`, { state: { content } });
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
              {content.userId.profileimg && (
                <S.ProfileImage
                  src={content.userId.profileimg}
                  alt={content.userId.profileimg}
                />
              )}
            </S.SProfileImage>
            <div className="user_info">
              <p className="user_write_info">{content.userId.nickname}</p>
            </div>
            <p className="user_write_info">
              <p>{timeString(content.postdate)}</p>
              <FontAwesomeIcon icon={faEye} style={{ margin: "0 10px" }} />
              {content.views}
              <br />
              <FontAwesomeIcon icon={faComment} style={{ margin: "0 10px" }} />
              {content.commentCount}
              <FontAwesomeIcon icon={faHeart} style={{ margin: "0 10px" }} />
              {content.likes}
            </p>
          </div>
        </S.SItem>
      )}
    </>
  );
};
