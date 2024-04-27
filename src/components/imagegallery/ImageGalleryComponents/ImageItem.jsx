//import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ImageItem.style";

import { switchColor } from "../../../utils/switchColor";
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
            <div
              className="lang_box"
              style={{ backgroundColor: switchColor(content.language) }}
            >
              <p>{content.language.toUpperCase()}</p>
            </div>
            {content.language && (
              <div className="img_box">
                <img
                  src={`
https://starblog-bucket.s3.ap-northeast-2.amazonaws.com/svgs/${content.language.toLowerCase()}.svg`}
                  alt={content.language.toLowerCase()}
                  className="svgIcon"
                />
              </div>
            )}
            <div className="text_contents_box">
              <h2>{content.title}</h2>
              <p className="post_date">{timeString(content.postdate)}</p>
            </div>
          </S.RoutingPage>
          <S.UserDateBox className="user_date_box">
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
            <div className="user_write_info">
              <div>
                <FontAwesomeIcon
                  icon={faEye}
                  color="#999"
                  style={{ margin: "0 4px", opacity: 0.6 }}
                />
                {content.views}
                <FontAwesomeIcon
                  icon={faComment}
                  color="#999"
                  style={{ margin: "0 4px", opacity: 0.6 }}
                />
                {content.commentCount}
                <FontAwesomeIcon
                  icon={faHeart}
                  color="#FF6666"
                  style={{ margin: "0 4px" }}
                />
                {content.likes}
              </div>
            </div>
          </S.UserDateBox>
        </S.SItem>
      )}
    </>
  );
};
