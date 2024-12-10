import * as S from "./Layout.style";
import { Header } from "./Header/Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
      <Footer />
    </>
  );
};
