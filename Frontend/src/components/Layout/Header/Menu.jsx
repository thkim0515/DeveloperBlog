import * as S from "./Header.style";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  return (
    <S.MenuBox>
      <ul>
        <li>
          <Link to="/blog">블로그 {location.pathname.startsWith("/blog") && "🌟"}</Link>
        </li>
        <li>
          <Link to="/project">프로젝트 {location.pathname.startsWith("/project") && "🌟"}</Link>
        </li>
      </ul>
    </S.MenuBox>
  );
};

export default Menu;
