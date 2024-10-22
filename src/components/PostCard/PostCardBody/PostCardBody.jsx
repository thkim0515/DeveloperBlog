import * as S from "./PostCardBody.style";
import { timeString } from "../../../utils/timeString";

export const PostCardBody = ({ title, postdate }) => {
  return (
    <S.PostCardBodyBox>
      <S.PostTitle>{title}</S.PostTitle>
      {/* <p>{}</p> */}
      <p>{timeString(postdate)}</p>
    </S.PostCardBodyBox>
  );
};
