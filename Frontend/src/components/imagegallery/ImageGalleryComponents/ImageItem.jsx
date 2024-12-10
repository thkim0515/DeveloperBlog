import * as S from "./ImageItem.style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { switchColor } from "../../../utils/switchColor";

export const ImageItem = ({ content }) => {
  const bucketUrl = useSelector(state => state.bucketUrl);
  const imageUrl = bucketUrl ? bucketUrl.imageUrl : "";

  const navigate = useNavigate();
  const handleImageClick = () => {
    if (content) {
      navigate(`/post/${content._id}`, { state: { content } });
    }
  };

  const timeString = postdate => {
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
            <div className="lang_box" style={{ backgroundColor: switchColor(content.language) }}>
              <p>{content.language.toUpperCase()}</p>
            </div>
            {content.language && (
              <div className="img_box">
                <img
                  src={`
                      ${imageUrl}svgs/${content.language.toLowerCase()}.svg`}
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
                  src={`${imageUrl}profileImg/${content.userId.profileimg}`}
                  alt={`${imageUrl}profileImg/${content.userId.profileimg}`}
                />
              )}
            </S.SProfileImage>
            <div className="user_info">
              <p className="user_write_info">{content.userId.nickname}</p>
            </div>
            <div className="user_write_info">
              <div>
                <FontAwesomeIcon icon={faEye} color="#999" style={{ margin: "0 4px", opacity: 0.6 }} />
                {content.views}
                <FontAwesomeIcon icon={faComment} color="#999" style={{ margin: "0 4px", opacity: 0.6 }} />
                {content.commentCount}
                <FontAwesomeIcon icon={faHeart} color="#FF6666" style={{ margin: "0 4px" }} />
                {content.likes}
              </div>
            </div>
          </S.UserDateBox>
        </S.SItem>
      )}
    </>
  );
};
