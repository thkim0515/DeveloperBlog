import * as S from "./PostCardHeader.style";
import { getLanguageIcon } from "../../../utils/getImagePath";

export const PostCardHeader = ({ language }) => {
  return (
    <S.PostCardHeaderBox $bgColor={language}>
      <S.ProgrammingIcon>
        <img src={getLanguageIcon(language.toLowerCase())} alt={language.toLowerCase()} />
      </S.ProgrammingIcon>
      <S.ProgrammingLangauge>{language.toUpperCase()}</S.ProgrammingLangauge>
    </S.PostCardHeaderBox>
  );
};
