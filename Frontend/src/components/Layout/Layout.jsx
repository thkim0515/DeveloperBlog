import * as S from "./Layout.style";
import { Header } from "./Header/Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { LiveChatComp } from "../LiveChat/LiveChatComp";

export const Layout = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Outlet />
        <S.LiveChatWrapper>
          <LiveChatComp />
        </S.LiveChatWrapper>
      </S.Container>
      <Footer />
    </>
  );
};
