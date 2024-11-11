import * as S from "./Header.style";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <S.MenuBox>
      <ul>
        <li>
          <Link to="/blog">블로그</Link>
        </li>
        <li>
          <Link to="/project">프로젝트</Link>
        </li>
      </ul>
    </S.MenuBox>
  );
};

export default Menu;
