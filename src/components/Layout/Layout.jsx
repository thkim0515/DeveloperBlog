import * as S from "./Layout.style";
import { Header } from "./Header";
<<<<<<< HEAD
import { Footer } from "./Footer";
=======
>>>>>>> serverDB
import { Outlet } from "react-router-dom";

export const Layout = (props) => {
  return (
    <div>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
<<<<<<< HEAD
      <Footer />
=======
>>>>>>> serverDB
    </div>
  );
};
