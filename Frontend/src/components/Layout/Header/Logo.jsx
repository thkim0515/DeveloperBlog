import * as S from "./Header.style";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <S.Logo>
      <Link to="/">STARBLOG</Link>
      <p>우리의 지식이 별이 되는 공간</p>
    </S.Logo>
  );
};
