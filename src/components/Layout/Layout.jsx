import * as S from "./Layout.style";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = (props) => {
  return (
    <div>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
      <Footer />
    </div>
  );
};

import * as S from "./Layout.style";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = (props) => {
  return (
    <div>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
      <Footer />
    </div>
  );
};
