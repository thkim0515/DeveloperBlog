import * as S from "./Layout.style";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = (props) => {
  return (
    <div>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
    </div>
  );
};
