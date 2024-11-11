import * as S from "./PorstCardFooter.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { UserProfile } from "../../common/UserProfile";

export const PostCardFooter = ({ userId, views, commentCount, likes }) => {
  return (
    <S.PostCardFooterBox>
      <UserProfile imagePath={userId.profileimg} nickname={userId.nickname} />
      <S.PostInformation>
        <S.IconBox>
          <FontAwesomeIcon icon={faEye} color="#999" style={{ margin: "0 4px", opacity: 0.6 }} />
          <span>{views}</span>
        </S.IconBox>
        <S.IconBox>
          <FontAwesomeIcon icon={faComment} color="#999" style={{ margin: "0 4px", opacity: 0.6 }} />
          <span>{commentCount}</span>
        </S.IconBox>
        <S.IconBox>
          <FontAwesomeIcon icon={faStar} color="#999" style={{ margin: "0 4px", opacity: 0.6 }} />
          <span>{likes}</span>
        </S.IconBox>
      </S.PostInformation>
    </S.PostCardFooterBox>
  );
};
