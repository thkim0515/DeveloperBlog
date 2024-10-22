import { useSelector } from "react-redux";
import * as S from "./PostCardHeader.style";

export const PostCardHeader = ({ language }) => {
  const bucketUrl = useSelector(state => state.bucketUrl);
  const imageUrl = bucketUrl ? bucketUrl.imageUrl : "";

  return (
    <S.PostCardHeaderBox $bgColor={language}>
      <S.ProgrammingIcon>
        <img src={`${imageUrl}svgs/${language.toLowerCase()}.svg`} alt={language.toLowerCase()} />
      </S.ProgrammingIcon>
      <S.ProgrammingLangauge>{language.toUpperCase()}</S.ProgrammingLangauge>
    </S.PostCardHeaderBox>
  );
};
